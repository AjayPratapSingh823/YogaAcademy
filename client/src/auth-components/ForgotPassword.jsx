
import css from "../css/login.module.css";
import imgYogaLogin from "../../assets/yoga-login.jpg";

const ForgotPassword = () => {
  return (
    <div className={`${css["container"]}`}>
      <div className={`${css["image1"]}`}> 
        <img src={imgYogaLogin} />
      </div>

      <div className={`${css["login-form"]}`}>
        <h1>Forgot Password?</h1>
        <h2>Enter your Email</h2>

        <form onSubmit="">
          <input type="text" placeholder="Email" />
          <button type="submit" >Send Verification Link</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword