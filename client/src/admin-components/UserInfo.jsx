import React, { useState } from 'react'
import css from "../css/admin.module.css"
import userImg from "../../assets/user.jpg"

const UserInfo = () => {

  const [usersCount, setUsersCount] = useState(4)

  let arr = [
    {
      name: "Ram Kumar",
      phone: "987654321",
      email: "abcd123@gmail.com",
      weight: 60,
      image: userImg, 
    },
    {
      name: "Bharat Kumar",
      phone: "987654321",
      email: "abcd123@gmail.com",
      weight: 60,
      image: userImg, 
    },
    {
      name: "Laxman Kumar",
      phone: "987654321",
      email: "abcd123@gmail.com",
      weight: 60,
      image: userImg, 
    },
    {
      name: "Shatrughan",
      phone: "987654321",
      email: "abcd123@gmail.com",
      weight: 60,
      image: userImg, 
    },
  ]

  return (
    <div>
      <h1 className='bg-success text-light text-center p-2'>User Data</h1>
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
      <h2 className='m-5 text-center'>Total users : {usersCount}</h2>
    </div>
  )
}

export default UserInfo