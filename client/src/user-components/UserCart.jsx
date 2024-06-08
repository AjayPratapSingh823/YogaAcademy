import React, { useState } from "react";
import userImg from "../../assets/user.jpg";
import css from "../css/user-opt-courses.module.css";

const UserCart = () => {

  const [cartList, setCartList] = useState([
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
      <h2 className="text-success p-2">Your Cart</h2>

      {cartList.map((item, index) => (
        <div className="card m-2">
          <div className="card-header">{item.date}</div>
          <div className="card-body">
            <div className="d-flex">
              <img
                src={userImg}
                className={`${css["user-img-card"]} me-2`}
                alt=""
              />
              <div>
                <h5 className="card-title">{item.courseName}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserCart