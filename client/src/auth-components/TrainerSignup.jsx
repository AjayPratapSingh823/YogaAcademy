import React from 'react'
import google from "../../assets/Google.png";
import css from "../css/login.module.css";

const TrainerSignup = () => {
  return (
    <>
    <div className={css["top-div"]}>
    <h2>Trainer Sign up</h2>
  </div>
    <section className={css["registerSec"]}>
      <form>
        <div class={css["formOuter"]}>
          <a href="/trainer-login" class={css["signInRegister"]} id="signIn">
            Sign In
          </a>
          <a class={css["active-btn"]} id="register">
            Register
          </a>
        </div>
        <div class={css["googleSignIn"]}>
          <img src={google} alt="" />
          <span>Sign in with Google</span>
        </div>
        <hr />
        <input type="text" placeholder="Full name" class={css["toggle"]} />
        <input type="tel" placeholder="Phone number" class={css["toggle"]} />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <p>
          <input type="checkbox" style={{ width: "1em" }} /> I agree to the
          <a href="" id="forgotPass">
            Terms of Service & Privacy Policy
          </a>
        </p>
        <button>REGISTER</button>
        <a href="/login-page" className={css["form-btn"]}>Back</a>
      </form>
    </section>
    </>
  )
}

export default TrainerSignup