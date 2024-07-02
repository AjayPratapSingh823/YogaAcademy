import { useState } from "react";
import css from "../css/login.module.css";
import imgYogaLogin from "../../assets/yoga-login.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserSignup = () => {

  const navigator = useNavigate()

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
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user-signup",
        Form
      );
      console.log(response);
      alert("User Signed In!");
      navigator("/user-login")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${css["container"]}`}>
      <div className={`${css["image1"]}`}>
        <img src={imgYogaLogin} />
      </div>

      <div className={`${css["login-form"]}`}>
        <h1>Welcome to Yoga Academy</h1>
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            onChange={handleChange}
            value={Form.fullname}
            placeholder="FullName"
          />
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={Form.phone}
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={Form.email}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={Form.password}
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmpassword"
            onChange={handleChange}
            value={Form.confirmpassword}
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            onClick={() => {
              handleSubmit;
            }}
          >
            Sign up
          </button>
        </form>
        <p className={css["dont"]}>Already have an Account?</p>
        <div className={`${css["sign-in"]}`}>
          <a href="/user-login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
