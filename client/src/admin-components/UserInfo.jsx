import React from "react";
import css from "../css/admin.module.css";
import userImg from "../../assets/user.jpg";

const UserInfo = () => {

  let arr = [
    {
      name: "Ram Kumar",
      phone: "987654321",
      email: "abcd123@gmail.com",
      weight: 60,
      image: userImg,
      address: "",
      gender: "",
      healthCondition: "",
    },
    {
      name: "Bharat Kumar",
      phone: "987654321",
      email: "abcd123@gmail.com",
      weight: 60,
      image: userImg,
      address: "",
      gender: "",
      healthCondition: "",
    },
    {
      name: "Laxman Kumar",
      phone: "987654321",
      email: "abcd123@gmail.com",
      weight: 60,
      image: userImg,
      address: "",
      gender: "",
      healthCondition: "",
    },
    {
      name: "Shatrughan",
      phone: "987654321",
      email: "abcd123@gmail.com",
      weight: 60,
      image: userImg,
      address: "",
      gender: "",
      healthCondition: "",
    },
  ];

  const usersCount = arr.length;

  return (
    <div>
      <h1 className="bg-success text-light text-center p-2">User Data</h1>
      <div className="container">
        <div className={css["data-card-div"]}>
          {arr.map((item, index) => (
            <div className={css["data-card"]} key={index}>
              <img src={item.image} alt="" />
              <div className={css["data"]}>
                <h4 className="bg-success text-white text-center">
                  {item.name}
                </h4>
                <h6>{item.phone}</h6>
                <h6>{item.email}</h6>
                <h6>{item.weight} Kg</h6>

                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal${index}`}
                >
                  Full Details
                </button>

                <div
                  className="modal fade"
                  id={`exampleModal${index}`}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          {item.name}
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="container text-center">
                          <div className="row">
                            <div className="col">Phone:</div>
                            <div className="col">{item.phone}</div>
                          </div>
                          <div className="row">
                            <div className="col">Email:</div>
                            <div className="col">{item.email}</div>
                          </div>
                          <div className="row">
                            <div className="col">Weight:</div>
                            <div className="col">{item.weight}</div>
                          </div>
                          <div className="row">
                            <div className="col">Address:</div>
                            <div className="col">{item.address}</div>
                          </div>
                          <div className="row">
                            <div className="col">Gender:</div>
                            <div className="col">{item.gender}</div>
                          </div>
                          <div className="row">
                            <div className="col">Health Condition:</div>
                            <div className="col">{item.healthCondition}</div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          ))}

        </div>
      </div>
      <h2 className="m-5 text-center">Total users : {usersCount}</h2>
    </div>
  );
};

export default UserInfo;
