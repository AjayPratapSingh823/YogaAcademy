import React from 'react'
import css from "../css/admin.module.css"
import userImg from "../../assets/user.jpg"

const TrainerInfo = () => {

  let arr = [
    {
      name: "Vishwamitra",
      phone: "987654321",
      email: "abcd123@gmail.com",
      address: "",
      image: userImg,
    },
    {
      name: "Vasisht",
      phone: "987654321",
      email: "abcd123@gmail.com",
      address: "",
      image: userImg, 
    },
  ]

  let trainerCount = arr.length;

  return (
    <div>
      <h1 className='bg-success text-light text-center p-2'>Trainer Data</h1>
      <div className="container">
        <div className={css["data-card-div"]}>
        {
          arr.map((item, index)=>(
            <div className={css["data-card"]}>
          <img src={item.image} alt="" />
          <div className={css["data"]}>
            <h4 className='bg-success text-white text-center'>{item.name}</h4>
            <h6>{item.phone}</h6>
            <h6>{item.email}</h6>

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
                            <div className="col">Address:</div>
                            <div className="col">{item.address}</div>
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
          ))
        }
        </div>
      </div>
      <h2 className='m-5 text-center'>Total trainers : {trainerCount}</h2>
    </div>
  )
}

export default TrainerInfo