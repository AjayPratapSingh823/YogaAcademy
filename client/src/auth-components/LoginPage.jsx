import React from 'react'
import css from "../css/login.module.css";

const LoginPage = () => {
  return (

    <div className={css['main-div']}>
        <div className={css["center-div"]}>
            <h1>Login as</h1>
            <a href="/user-login">User</a>
            <a href="/trainer-login">Trainer</a>
            <a href="/admin-login">Admin</a>
        </div>
    </div>
  )
}

export default LoginPage