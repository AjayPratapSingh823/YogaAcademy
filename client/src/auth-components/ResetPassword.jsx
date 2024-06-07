
import css from "../css/login.module.css";
import imgYogaLogin from "../../assests/yoga-login.jpg";

const ResetPassword = () => {
  return (
    <div className={`${css["container"]}`}>
      <div className={`${css["image1"]}`}> 
        <img src={imgYogaLogin} />
      </div>

      <div className={`${css["login-form"]}`}>
        <h1>Reset Password</h1>

        <form onSubmit="">
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword