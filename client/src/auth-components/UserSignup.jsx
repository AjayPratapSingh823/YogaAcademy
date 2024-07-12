import { useState } from "react";
import css from "../css/login.module.css";
import google from "../../assets/Google.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserSignup = () => {
  const navigator = useNavigate();

  const [Form, setForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...Form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Form.password !== Form.confirmpassword) {
      return alert("Password not matached!");
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user-signup",
        Form
      );

      console.log(response);
      alert("User Signed In!");
      navigator("/user-login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className={css["top-div"]}>
    <h2>User Sign up</h2>
  </div>
    <section className={css["registerSec"]}>
      <form>
        <div class={css["formOuter"]}>
          <a href="/user-login" class={css["signInRegister"]} id="signIn">
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
  );
};

export default UserSignup;
