import css from "../css/login.module.css";
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
    <div>
      <div className={`${css["center-div"]}`}>
        <h1>Reset Password</h1>

        <form onSubmit={handleSubmit}>
          <input className={css["form-form"]} type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="New Password" />
          <input className={css["form-form"]} type="password" placeholder="Confirm Password" />
          <button className={css["form-btn"]} type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword