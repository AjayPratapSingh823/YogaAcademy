import React from "react";
import userImg from "../../assets/user.jpg";

const AllTrainers = () => {

    let arr = [
        {
            name: "John Doe",
            img: userImg,
        },
        {
            name: "John Doe",
            img: userImg,
        },
        {
            name: "John Doe",
            img: userImg,
        },
        {
            name: "John Doe",
            img: userImg,
        },
        {
            name: "John Doe",
            img: userImg,
        },
        {
            name: "John Doe",
            img: userImg,
        },
        {
            name: "John Doe",
            img: userImg,
        },
        {
            name: "John Doe",
            img: userImg,
        },
    ]

  return (
    <div>
      <h1 className="text-center text-light bg-success">All Trainers</h1>
      <button className="btn btn-outline-success m-2">Become a Trainer</button>
      <div className="container d-flex flex-wrap justify-content-between p-2">

        {
            arr.map((item)=>(
                <div class="card" style={{ width: "300px" }}>
          <img
            src={userImg}
            class="card-img-top"
            alt="..."
            style={{ width: "100%", height: "300px" }}
          />
          <div class="card-body">
            <h5 class="card-title text-center bg-dark text-light">
              John Doe
            </h5>
          </div>
        </div>
            ))
        }
      </div>
    </div>
  );
};

export default AllTrainers;
