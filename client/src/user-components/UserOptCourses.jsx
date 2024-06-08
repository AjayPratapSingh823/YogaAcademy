import React, { useState } from "react";
import userImg from "../../assets/user.jpg";
import css from "../css/user-opt-courses.module.css";

const UserOptCourses = () => {
  const [courseList, setCourseList] = useState([
    {
      date: "07-June-2024",
      courseName: "Special title treatment",
      description:
        "With supporting text below as a natural lead-in to additional content.",
    },
    {
      date: "07-June-2024",
      courseName: "Special title treatment",
      description:
        "With supporting text below as a natural lead-in to additional content.",
    },
  ]);

  return (
    <div>
      <h2 className="text-success p-2">Your Courses</h2>

      {courseList.map((item, index) => (
        <div class="card m-2">
          <div class="card-header">{item.date}</div>
          <div class="card-body">
            <div className="d-flex">
              <img
                src={userImg}
                class={`${css["user-img-card"]} me-2`}
                alt=""
              />
              <div>
                <h5 class="card-title">{item.courseName}</h5>
                <p class="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserOptCourses;
