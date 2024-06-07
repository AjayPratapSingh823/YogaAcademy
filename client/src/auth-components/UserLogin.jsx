import React from "react";
import css from "../css/login.module.css";
import imgYogaLogin from "../../assests/yoga-login.jpg";

// {`${css[]}`}

const UserLogin = () => {
  return (
    <div className={`${css["container"]}`}>
      <div className={`${css["image1"]}`}> 
        <img src={imgYogaLogin} />
      </div>

      <div className={`${css["login-form"]}`}>
        <h1>Welcome to Yoga</h1>
        <h2>Login please</h2>

        <form action="">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <div className={`${css["forgot-password"]}`}>
          <a href="#">Forgot password?</a>
        </div>
        <p className={css["dont"]}>Dont have an account?</p>
        <div className={`${css["sign-in"]}`}>
          <a href="/signin">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
