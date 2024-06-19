import React, { useState } from 'react'
import css from "../css/admin.module.css"
import userImg from "../../assets/user.jpg"

const TrainerInfo = () => {

  const [usersCount, setUsersCount] = useState(2)

  let arr = [
    {
      name: "Vishwamitra",
      phone: "987654321",
      email: "abcd123@gmail.com",
      weight: 70,
      image: userImg, 
    },
    {
      name: "Vasisht",
      phone: "987654321",
      email: "abcd123@gmail.com",
      weight: 70,
      image: userImg, 
    },
  ]

  return (
    <div>
      <h1 className='bg-success text-light text-center p-2'>Trainer Data</h1>
      <div className="container">
        <div className={css["data-card-div"]}>
        {
          arr.map((item)=>(
            <div className={css["data-card"]}>
          <img src={item.image} alt="" />
          <div className={css["data"]}>
            <h4 className='bg-success text-white text-center'>{item.name}</h4>
            <h6>{item.phone}</h6>
            <h6>{item.email}</h6>
            <h6>{item.weight} Kg</h6>
          </div>
        </div>
          ))
        }
        </div>
      </div>
      <h2 className='m-5 text-center'>Total trainers : {usersCount}</h2>
    </div>
  )
}

export default TrainerInfo