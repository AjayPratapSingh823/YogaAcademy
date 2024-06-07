import React from "react";
import css from "../css/login.module.css";
import imgYogaLogin from "../../assests/yoga-login.jpg";

// {`${css[]}`}

const UserLogin = () => {
  const [Form,setForm]=useState({
    email: '',
    password:'',
  });
  const handleChange=()=>{
    const {name, value}=e.target
    setForm({
      ...Form,
      [name]:value,
    })
  }
  const handleSubmit=(e)=>{
    e.preverntDefault();
  }
  return (
    <div className={`${css["container"]}`}>
      <div className={`${css["image1"]}`}> 
        <img src={imgYogaLogin} />
      </div>

      <div className={`${css["login-form"]}`}>
        <h1>Welcome to Yoga</h1>
        <h2>Login please</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="email" value={Form.email} onChange={handleChange}placeholder="Email" />
          <input type="password" name="password" value={Form.password} onChange={handleChange}placeholder="Password" />
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
