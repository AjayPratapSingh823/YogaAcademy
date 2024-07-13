import { useState } from "react";
import css from "../css/login.module.css";
import {GoogleLogin} from '@react-oauth/google';
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
    console.log(Form.fullname);
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

  const handleGoogleSuccess=async(response)=>{
    const id_token=response.credential;
    try{
      const res=await axios.post('http://localhost:4000/api/google',{idtoken:id_token});
      console.log("Google sign-in successful",res.data);
      alert("Google sign-in successful")
      navigator("/");
    }catch(err){
      console.log(err);
    }
  };

  const handleGoogleFailure=async(response)=>{
    console.log(response);
  };

  return (
    <>
    <section className={css["registerSec"]}>
      <form onSubmit={handleSubmit}>
        <div className={css["formOuter"]}>
          <a href="/user-login" className={css["signInRegister"]} id="signIn">
            Sign In
          </a>
          <a className={css["active-btn"]} id="register">
            Register
          </a>
        </div>
        <div className={css["googleSignIn"]}>
        <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            render={({ onClick }) => (
              <button onClick={onClick} className={css["googleSignInBtn"]}>
                <img src={google} alt="Google icon" /> Sign in with Google
              </button>
            )}
          />
        </div>
        <hr />
        <input type="text" placeholder="Full name" name="fullname" className={css["toggle"]} onChange={handleChange}/>
        <input type="tel" placeholder="Phone number" name="phone" className={css["toggle"]} onChange={handleChange}/>
        <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
        <input type="password" autoComplete="" name="password" placeholder="Password" onChange={handleChange}/>
        <input type="password" autoComplete="" name="confirmpassword" placeholder="Confirm Password" onChange={handleChange}/>
        <p>
          <input type="checkbox" style={{ width: "1em" }} /> I agree to the
          <a href="" id="">
            Terms of Service & Privacy Policy
          </a>
        </p>
        <button type="submit">REGISTER</button>
        <a href="/login-page" className={css["form-btn"]}>Back</a>
      </form>
    </section>
    </>
  );
};

export default UserSignup;
