import React from "react";
import google from "../../assets/Google.png";
import css from "../css/login.module.css";

const AdminLogin = () => {
  return (
    <>
      <div className={css["top-div"]}>
        <h2>Admin Login</h2>
      </div>
      <section className={css["registerSec"]}>
        <form>
          <div class={css["formOuter"]}>
            <a class={css["active-btn"]} id="signIn">
              Sign In
            </a>
            <a href="/admin-signup" class={css["signInRegister"]} id="register">
              Register
            </a>
          </div>
          <div class={css["googleSignIn"]}>
            <img src={google} alt="" />
            <span>Sign in with Google</span>
          </div>
          <hr />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p>
            <input type="checkbox" style={{ width: "1em" }} /> I agree to the
            <a href="" id="forgotPass">
              Terms of Service & Privacy Policy
            </a>
          </p>
          <a href="/forget-password">Forgot Password?</a>
          <button>Login</button>
          <a href="/login-page" className={css["form-btn"]}>Back</a>
        </form>
      </section>
    </>
  );
};

export default AdminLogin;
