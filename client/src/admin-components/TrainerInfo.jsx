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
                            <div class="col">Address:</div>
                            <div class="col">{item.address}</div>
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
          ))
        }
        </div>
      </div>
      <h2 className='m-5 text-center'>Total trainers : {trainerCount}</h2>
    </div>
  )
}

export default TrainerInfo