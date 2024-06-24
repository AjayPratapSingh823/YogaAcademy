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
      <a href="/become-a-trainer" className="btn btn-outline-success m-2">Become a Trainer</a>
      <div className="container d-flex flex-wrap justify-content-between p-2">

        {
            arr.map((item, index)=>(
                <div class="card" key={index} style={{ width: "300px" }}>
          <img
            src={item.img}
            class="card-img-top"
            alt="..."
            style={{ width: "100%", height: "300px" }}
          />
          <div class="card-body">
            <h5 class="card-title text-center bg-dark text-light">
               {item.name}
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
