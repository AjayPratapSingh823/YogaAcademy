import { useState } from "react";
import css from "../css/login.module.css";
import axios from 'axios'
import imgYogaLogin from "../../assets/yoga-login.jpg";
import imgGoogle from "../../assets/Google.png"
import {useNavigate} from "react-router-dom"


const UserLogin = () => {

  const navigator = useNavigate()

    const [Form, setForm]=useState({
         email:'',
         password:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm({
            ...Form,
            [name]:value,
        })
    }
    const handleSubmit=async(e)=>{
      e.preventDefault()
        try{
          const response = await axios.post('http://localhost:4000/api/user-login',Form);
          console.log(response.data.user.fullname);
          localStorage.setItem("full Name:",response.data.user.fullname);
          localStorage.setItem("Phone:",response.data.user.phone);
          localStorage.setItem("Email:",response.data.user.email);

          console.log('login successful');
          alert("Login Successful")
          navigator("/")
          window.location.reload()
        }
        catch(err){
            console.log(err);
        }
    
    
        } 
     return (
    <div className={`${css["container"]}`}>
      <div className={`${css["image1"]}`}> 
        <img src={imgYogaLogin} />
      </div>

      <div className={`${css["login-form"]}`}>
        <h1>Welcome to Yoga Academy</h1>
        <h2>Login please</h2>

        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="email"  value={Form.email} onChange={handleChange} placeholder="Email" />
          <input type="password" name="password" value={Form.password} onChange={handleChange} placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <button className={`${css["google-btn"]} btn btn-outline-warning text-black`} >Login with <img src={imgGoogle} alt="google" /></button>
        <a href="/admin-login" className="btn btn-outline-warning m-1 text-black" >Login as Admin </a>
        <a href="/trainer-login" className="btn btn-outline-warning m-1 text-black" >Login as Trainer </a>

        <div className={`${css["forgot-password"]}`}>
          <a href="/forget-password">Forget password?</a>
        </div>
        <p className={css["dont"]}>Don’t have an account?</p>
        <div className={`${css["sign-in"]}`}>
          <a href="/user-signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
