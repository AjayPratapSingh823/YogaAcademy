import React from 'react'
import css from "../css/group-classes.module.css";
import yogaTemp from "../../assets/yoga-temp.jpg";


const KidsClass = () => {
  return (
    <div>
      <main className={css["kids-bg"]}>
        <div className={css["main-box"]}>
          <h1>Kids Yoga Classes</h1>
        </div>
      </main>
      <div className={css["second-div"]} style={{background: "linear-gradient(135deg, rgb(240, 142, 255) 0%, rgb(255, 244, 221) 50%, white)"}}>
        <div className={css["flex"]}>
          <div className={css["text"]}>
            <h4>
              Good friends don't let you do cool things... alone!!! And so, all
              you will have to do is sign up for our Group Yoga Classes at AYS
              Because
            </h4>
            <ul>
              <li>It is 60 mins of Yoga</li>
              <li>It is an hour of Fun</li>
              <li>It is a group of people who Love Yoga</li>
            </ul>
          </div>
          <img src={yogaTemp} alt="" />
        </div>
      </div>
      <div className={css["third-div"]}>
        <h1>Enjoy The Vibe Of The Group Energy In Your Yoga Classes</h1>
        <h2>Now Avail In Offline / Online Yoga Group Classes</h2>
        <h3>Wondering What You Will Practice?</h3>
        <p>
          The Vinyasa Krama online/in studio group Class at Atma Yoga Shala is a
          60 minute practice that incorporates Asana (physical exercises),
          Pranayama (breath work) and Dharana/ Dhyana (meditation). The practice
          of Asana (physical exercise) involves Yoga postures includes
          repetitive dynamic movements with breath and also static postures.
          Dynamic asanas works on the joints, muscles and the static asanas on
          the internal organs. Pranayama (Breath work) techniques to improve the
          breathing capacity and also helps improve energy levels in the body.
          Dharana/Dhyana (mindfulness & meditation) techniques and practices
          address the mind, producing a calming effect and also helps develop
          focus. AYS Group Yoga classes aim at providing a holistic experience.
        </p>
      </div>
      <div className={css["forth-div"]}>
        <h2>Our Latest Classes</h2>
        <div>
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">Yoga Classes</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi maxime eum!
              </p>
              <a href="#" className="btn btn-success m-2">
                Buy Class
              </a>
              <a href="#" className="btn btn-outline-dark">
                Add to Cart
              </a>
            </div>
          </div>
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">Yoga Classes</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi maxime eum!
              </p>
              <a href="#" className="btn btn-success m-2">
                Buy Class
              </a>
              <a href="#" className="btn btn-outline-dark">
                Add to Cart
              </a>
            </div>
          </div>
          <a href="/all-group-classes" className="btn btn-dark m-2">See more....</a>
        </div>
      </div>
    </div>
  )
}

export default KidsClass