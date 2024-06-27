// PaymentForm.js
import  { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [amount, setAmount] = useState(0);
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/create-order', {
        amount
      });
      setOrderId(response.data.id);
      const options = {
        key: 'your_razorpay_key_id',
        amount: amount * 100, 
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Test Transaction',
        order_id: response.data.id, 
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#3399cc'
        }
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Complete Payment</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={handlePayment}>Pay via UPI</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default PaymentForm;
