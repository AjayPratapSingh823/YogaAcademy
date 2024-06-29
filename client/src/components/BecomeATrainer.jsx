import axios from "axios";
import React, { useState } from "react";

const BecomeATrainer = () => {

  const [fullname, setFullname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [qualifications, setQualifications] = useState("")

  const submitHandler = async (e)=>{
    e.preventDefault()
    const res = await axios.post("http://localhost:4000/api/become-trainer",{
      fullname,
      phone,
      email,
      qualifications,
    })
    alert(res.data);
    window.location.reload()
  }



  return (
    <div>
      <h1 className="text-center bg-success text-white">Enter Your Details</h1>
      <form className="m-2 p-2 border rounded" onSubmit={submitHandler}>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Full Name
          </span>
          <input type="text" className="form-control" name="title" onChange={(e)=>setFullname(e.target.value)} required />
        </div>

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Phone
          </span>
          <input type="text" className="form-control" name="title" onChange={(e)=>setPhone(e.target.value)} required/>
        </div>

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Email
          </span>
          <input type="email" className="form-control" name="title" onChange={(e)=>setEmail(e.target.value)} required/>
        </div>

        <div className="input-group">
          <span className="input-group-text">Qualifications</span>
          <textarea className="form-control" name="desc" onChange={(e)=>setQualifications(e.target.value)} required></textarea>
        </div>

        <div className="text-center m-2">
          <button className="btn btn-dark" type="submit">
            Send Details <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BecomeATrainer;
