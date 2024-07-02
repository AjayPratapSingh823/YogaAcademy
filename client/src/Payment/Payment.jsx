import {useState} from 'react'
import axios from 'axios'
const Payment=()=>{
  const [transactionId, setTransactionId]=useState('');
  const [amount,setAmount]=useState('');
  const handlePayment=async(e)=>{
    e.preventDefault();
    try{
    const response=await axios.post('http://localhost:4000/api/initiatePayment',{
      amount
    })
    if(response.data.success){
      window.location.href=response.data.paymentLink;
    }else{
      alert('Payment initiation failed');
    }
  }catch(err){
    console.log(err);
    alert('Error initiating payment');
  }
  }
  return(
    <>
       <form onSubmit={handlePayment}>
      <label>
        Amount (in paise):
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Pay with PhonePe</button>
    </form>
    </>
  )
}
export default Payment