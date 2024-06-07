import React, { useState } from "react";
import css from "../css/user-dashboard.module.css";
import userImg from "../../assests/user.jpg";
import UserOptCourses from "./UserOptCourses";
import UserProfile from "./UserProfile";

const UserDashboard = () => {
  const [dashNum, setDashNum] = useState("1");

  return (
    <div>
      <div className={`${css["main"]}`}>
        <div className={`${css["one"]}`}>
          <img src={userImg} className={css["user-img"]} alt="" />
          <h2 className="text-light m-2">Welcome User!</h2>
          <div>
            <div className={css["my-list"]}>
              <a onClick={() => setDashNum("2")} href="#">
                Your Courses
              </a>
              <a href="#">
                Buy new course
              </a>
              <a onClick={() => setDashNum("1")} href="#">My Profile</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
        <div className={`${css["third"]} p-3`}>
          {dashNum === "1" ? <UserProfile /> : <UserOptCourses />}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
