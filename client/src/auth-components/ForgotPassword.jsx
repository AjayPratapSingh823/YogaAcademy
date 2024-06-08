
import css from "../css/login.module.css";
import imgYogaLogin from "../../assets/yoga-login.jpg";
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
    <div className={`${css["container"]}`}>
      <div className={`${css["image1"]}`}> 
        <img src={imgYogaLogin} />
      </div>

      <div className={`${css["login-form"]}`}>
        <h1>Forgot Password?</h1>
        <h2>Enter your Email</h2>

        <form onSubmit={handleSubmit}>
          <input type="text"  onChange={(e)=>setEmail(e.target.value)}placeholder="Email" />
          <button type="submit" >Send Verification Link</button>
             {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword