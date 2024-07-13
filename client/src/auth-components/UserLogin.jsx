import { useState } from "react";
import css from "../css/login.module.css";
import axios from "axios";
import google from "../../assets/Google.png";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigator = useNavigate();

  const [Form, setForm] = useState({
    email: "",
    password: "",
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
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user-login",
        Form
      );
      console.log(response.data.user.fullname);
      localStorage.setItem("fullname:", response.data.user.fullname);
      localStorage.setItem("Phone:", response.data.user.phone);
      localStorage.setItem("Email:", response.data.user.email);

      console.log("login successful");
      alert("Login Successful");
      navigator("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className={css["registerSec"]}>
        <form onSubmit={handleSubmit}>
          <div className={css["formOuter"]}>
            <a className={css["active-btn"]} id="signIn">
              Sign In
            </a>
            <a href="/user-signup" className={css["signInRegister"]} id="register">
              Register
            </a>
          </div>
          <div className={css["googleSignIn"]}>
            <img src={google} alt="" />
            <span>Sign in with Google</span>
          </div>
          <hr />
          <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
          <p>
            <input type="checkbox" style={{ width: "1em" }} /> I agree to the
            <a href="" id="forgotPass">
              Terms of Service & Privacy Policy
            </a>
          </p>
          <a href="/forget-password">Forgot Password?</a>
          <button type="submit">Login</button>
          <a href="/login-page" className={css["form-btn"]}>Back</a>
        </form>
      </section>
    </>
  );
};

export default UserLogin;
