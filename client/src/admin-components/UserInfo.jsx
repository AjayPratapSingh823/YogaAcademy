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
                  class="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal${index}`}
                >
                  Full Details
                </button>

                <div
                  class="modal fade"
                  id={`exampleModal${index}`}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          {item.name}
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="container text-center">
                          <div class="row">
                            <div class="col">Phone:</div>
                            <div class="col">{item.phone}</div>
                          </div>
                          <div class="row">
                            <div class="col">Email:</div>
                            <div class="col">{item.email}</div>
                          </div>
                          <div class="row">
                            <div class="col">Weight:</div>
                            <div class="col">{item.weight}</div>
                          </div>
                          <div class="row">
                            <div class="col">Address:</div>
                            <div class="col">{item.address}</div>
                          </div>
                          <div class="row">
                            <div class="col">Gender:</div>
                            <div class="col">{item.gender}</div>
                          </div>
                          <div class="row">
                            <div class="col">Health Condition:</div>
                            <div class="col">{item.healthCondition}</div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
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
