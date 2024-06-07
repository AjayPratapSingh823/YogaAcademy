import React from 'react'
import css from "../css/login.module.css";
import imgYogaLogin from "../../assests/yoga-login.jpg";

const UserSignup = () => {
  return (
    <div className={`${css["container"]}`}>
      <div className={`${css["image1"]}`}> 
        <img src={imgYogaLogin} />
      </div>

      <div className={`${css["login-form"]}`}>
        <h1>Welcome to Yoga Academy</h1>
        <h2>Register</h2>

        <form onSubmit="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Sign up</button>
        </form>
        <p className={css["dont"]}>Already have an Account?</p>
        <div className={`${css["sign-in"]}`}>
          <a href="/user-login">Login</a>
        </div>
      </div>
    </div>
  )
}

export default UserSignup;