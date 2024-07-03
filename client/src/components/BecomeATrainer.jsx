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
    <h1 className="m-2 text-center text-success">Trainer's Details</h1>
      <div className="d-flex justify-content-center">

      <form className="m-4 p-2 border rounded bg-light" style={{width:"300px"}} onSubmit={submitHandler}>
        <div className="input-group">
          <input type="text" className="form-control" name="title" placeholder="Full name" onChange={(e)=>setFullname(e.target.value)} required />
        </div>

        <div className="input-group">
          <input type="text" className="form-control" name="title" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)} required/>
        </div>

        <div className="input-group">

          <input type="email" className="form-control" name="title" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
        </div>

        <div className="input-group">
          <textarea className="form-control" name="desc" placeholder="Your Qualification" onChange={(e)=>setQualifications(e.target.value)} required></textarea>
        </div>

        <div className="input-group">
          <textarea className="form-control" name="desc" placeholder="Your Experience" onChange={(e)=>setQualifications(e.target.value)} required></textarea>
        </div>

        <div className="text-center m-2">
          <button className="btn btn-dark" type="submit">
            Send Details <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default BecomeATrainer;
