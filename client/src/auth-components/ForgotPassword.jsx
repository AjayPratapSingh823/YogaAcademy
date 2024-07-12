import css from "../css/login.module.css";
import { useState } from "react";
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail]=useState('');
  const [message,setMessage]=useState('');
  const handleSubmit=async(e)=>{
    try{
    e.preventDefault();
    const response=await axios.post('http://localhost:4000/api/forget-password',{email})
    console.log(response);
    }catch(err){
      if (err.response && err.response.status === 404) {
        setMessage('Email not found');
      } else {
        setMessage('An error occurred. Please try again.');
      }
      console.error(err);
    }
  }

  return (
    <div>
      <div className={`${css["top-div"]}`}>
        <h2>Forgot Password?</h2>
        <div className={css["center-div"]}>
        <h3>Enter your Email</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" className={css["form-form"]} onChange={(e)=>setEmail(e.target.value)}placeholder="Email" />
          <button type="submit" className={css["form-btn"]}>Send Verification Link</button>
             {message && <p className="message">{message}</p>}
        </form>

        </div>
      </div>
    </div>
  )
}

export default ForgotPassword