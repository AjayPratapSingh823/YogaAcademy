// src/controllers/paymentController.js
const crypto = require('crypto');
const axios = require('axios');
const { merchantId, saltKey } = require('../config/config');

const newPayment = async (req, res) => {
  try {
    const merchantTransactionId = 'M' + Date.now();
    const { price, phone, name } = req.body;
    const user_id = crypto.randomBytes(16).toString('hex'); // Generate a unique user ID

    
    const data = {
      merchantId: merchantId,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: 'MUID' + user_id,
      name: name,
      amount: price * 100,
      redirectUrl: `http://localhost:${port}/api/v1/callback`, // Correct callback URL
      redirectMode: 'POST',
      mobileNumber: phone,
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    };
    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString('base64');
    const keyIndex = 2;
    const string = payloadMain + '/pg/v1/pay' + saltKey;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;
    const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";
    const options = {
      method: 'POST',
      url: prod_URL,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      data: {
        request: payloadMain
      }
    };

    axios.request(options)
      .then(function (response) {
        return res.redirect(response.data.data.instrumentResponse.redirectInfo.url);
      })
      .catch(function (error) {
        console.error(error);
        res.status(500).send({
          message: error.message,
          success: false
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false
    });
  }
};

const callback = async (req, res) => {
  try {
    const { merchantTransactionId, txnId } = req.body;
    const keyIndex = 2;
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + saltKey;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + "###" + keyIndex;

    const options = {
      method: 'GET',
      url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum,
        'X-MERCHANT-ID': `${merchantId}`
      }
    };

    axios.request(options)
      .then(async (response) => {
        if (response.data.success === true) {
          console.log(response.data);
          return res.redirect(`http://localhost:${port}/success?transactionId=${merchantTransactionId}`);
        } else {
          return res.redirect(`http://localhost:${port}/failure`);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ msg: err.message });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false
    });
  }
};

const checkStatus = async (req, res) => {
  const merchantTransactionId = req.params['txnId'];
  const keyIndex = 2;
  const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + saltKey;
  const sha256 = crypto.createHash('sha256').update(string).digest('hex');
  const checksum = sha256 + "###" + keyIndex;
  const options = {
    method: 'GET',
    url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VERIFY': checksum,
      'X-MERCHANT-ID': `${merchantId}`
    }
  };

  axios.request(options)
    .then(async (response) => {
      if (response.data.success === true) {
        console.log(response.data);
        return res.status(200).send({ success: true, message: "Payment Success" });
      } else {
        return res.status(400).send({ success: false, message: "Payment Failure" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ msg: err.message });
    });
};

module.exports = {
  newPayment,
  callback,
  checkStatus
};
