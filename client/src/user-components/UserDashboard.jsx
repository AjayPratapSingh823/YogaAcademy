import  { useState } from "react";
import css from "../css/user-dashboard.module.css";
import userImg from "../../assets/user.jpg";
import UserOptCourses from "./UserOptCourses";
import UserProfile from "./UserProfile";
import UserCart from "./UserCart";

const UserDashboard = () => {
  const [dashNum, setDashNum] = useState("0");

  let dashRoute = ()=>{
    if(dashNum === "0"){
      return <UserProfile />
    } else if(dashNum === "1"){
      return <UserOptCourses />
    } else {
      return <UserCart />
    }
  }

  return (
    <div>
      <div className={`${css["main"]}`}>
        <div className={`${css["one"]}`}>
          <img src={userImg} className={css["user-img"]} alt="" />
          <h2 className="text-light m-2">Welcome User!</h2>
          <div>
            <div className={css["my-list"]}>
              <a onClick={() => setDashNum("0")} className={
                dashNum === "0" ? "bg-white text-success" : ""
              } href="#">My Profile</a>
              <a onClick={() => setDashNum("1")} className={
                dashNum === "1" ? "bg-white text-success" : ""
              } href="#">Your Courses</a>
              <a onClick={() => setDashNum("2")} className={
                dashNum === "2" ? "bg-white text-success" : ""
              } href="#">Your Cart</a>
              <a href="/">Logout</a>
            </div>
          </div>
        </div>
        <div className={`${css["third"]} p-3`}>
          {dashRoute()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
