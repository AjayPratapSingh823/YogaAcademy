import React from "react";
import css from "../css/login.module.css";
import imgYogaLogin from "../../assests/yoga-login.jpg";
import imgGoogle from "../../assests/Google.png"

// {`${css[]}`}

const UserLogin = () => {
  return (
    <div className={`${css["container"]}`}>
      <div className={`${css["image1"]}`}> 
        <img src={imgYogaLogin} />
      </div>

      <div className={`${css["login-form"]}`}>
        <h1>Welcome to Yoga Academy</h1>
        <h2>Login please</h2>

        <form onSubmit="">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <button className={`${css["google-btn"]}`} >Login with <img src={imgGoogle} alt="google" /></button>
        <div className={`${css["forgot-password"]}`}>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <p className={css["dont"]}>Don't have an account?</p>
        <div className={`${css["sign-in"]}`}>
          <a href="/user-signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
