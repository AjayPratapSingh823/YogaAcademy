import React, { useEffect, useState } from "react";
import userImg from "../../assets/user.jpg";
import css from "../css/become-a-trainer.module.css"
import axios from "axios";
import headImg from "../../assets/All Trainers assets/headImg1.jpg"

const AllTrainers = () => {
  const [trainers, setTrainers] = useState([]);

  const fetchTrainer = async (e) => {
    try {
      const res = await axios.get("http://localhost:4000/api/fetch-trainers");
      setTrainers(res.data);
      console.log(res.data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchTrainer();
  }, []);

  return (
    <>
      <div className={css["trainerTop"]}>
        <div>
          <h1>Yoga Teacher Training</h1>
        </div>
      </div>
      <main>
        <div className={css["mainOut1"]}>
          <p>
            Love sharing what you learnt, enjoyed and benefitted from?
            <br />
            <br />
            Also do you miss being that student which you were ages ago? Want to
            get busy with some assignments, submissions, exams, practical and
            last but not least - the viva? Here is your chance to do all that
            and
          </p>
          <h2>
            <span>Learn Yoga</span> And Also Learn To Teach Yoga ……
          </h2>
        </div>
        <div className={css["mainOut2"]}>
          <div>
            <img src={headImg} alt="" />
          </div>
        </div>
      </main>
      <div style={{textAlign:"center"}}>
        <h3 style={{fontSize: "3.5rem", padding: "30px 0"}}>Our Expert Team</h3>
      </div>
      <div class={css["experts"]}>
        {
          trainers.map((item, index)=>(
            <div key={index} class={css["expertOuter"]}>
            <div class={css["expertInner"]}>
              <img src={item.img || userImg} alt="" />
            </div>
            <div class={css["expertInner"]}>
              <h4>{item.fullname}</h4>
              <p>Yoga Teacher</p>
            </div>
          </div>
          ))
        }
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <a href="/become-a-trainer" className={css["trainerBtn"]}>Become a trainer</a>
      </div>
    </>

    // <div>
    //   <h1 className="text-center text-light bg-success">All Trainers</h1>
    //   <a href="/become-a-trainer" className="btn btn-outline-success m-2">Become a Trainer</a>
    //   <div className="container d-flex flex-wrap justify-content-around p-2">

    //     {
    //         trainers.map((item, index)=>(
    //             <div className="card m-2" key={index} style={{ width: "300px" }}>
    //       <img
    //         src={item.img || userImg}
    //         className="card-img-top"
    //         alt="..."
    //         style={{ width: "100%", height: "300px" }}
    //       />
    //       <div className="card-body">
    //         <h5 className="card-title text-center bg-dark text-light">
    //            {item.fullname}
    //         </h5>
    //       </div>
    //     </div>
    //         ))
    //     }
    //   </div>
    // </div>
  );
};

export default AllTrainers;
