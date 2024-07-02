import React, { useEffect, useState } from "react";
import userImg from "../../assets/user.jpg";
import axios from "axios";

const AllTrainers = () => {

  const [trainers, setTrainers] = useState([])

  const fetchTrainer = async (e)=>{
    try {
      const res = await axios.get("http://localhost:4000/api/fetch-trainers")
      setTrainers(res.data)
      console.log(res.data);
    } catch (error) {
      alert(error);
    }
  }
  useEffect(()=>{
    fetchTrainer()
  },[])


  return (
    <div>
      <h1 className="text-center text-light bg-success">All Trainers</h1>
      <a href="/become-a-trainer" className="btn btn-outline-success m-2">Become a Trainer</a>
      <div className="container d-flex flex-wrap justify-content-around p-2">

        {
            trainers.map((item, index)=>(
                <div className="card m-2" key={index} style={{ width: "300px" }}>
          <img
            src={item.img || userImg}
            className="card-img-top"
            alt="..."
            style={{ width: "100%", height: "300px" }}
          />
          <div className="card-body">
            <h5 className="card-title text-center bg-dark text-light">
               {item.fullname}
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
