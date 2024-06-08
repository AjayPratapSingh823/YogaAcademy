
import css from "../css/login.module.css";
import imgYogaLogin from "../../assets/yoga-login.jpg";
import { useState } from "react";
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const ResetPassword = () => {
  const [password,setPassword]=useState('');
  const {token}=useParams();
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
       const response=await axios.post(`http://localhost:4000/api/reset-password/${token}`,{
        token:token,
        password:password,
      });
       console.log(response);
       navigate('/user-login')
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className={`${css["container"]}`}>
      <div className={`${css["image1"]}`}> 
        <img src={imgYogaLogin} />
      </div>

      <div className={`${css["login-form"]}`}>
        <h1>Reset Password</h1>

        <form onSubmit={handleSubmit}>
          <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="New Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword