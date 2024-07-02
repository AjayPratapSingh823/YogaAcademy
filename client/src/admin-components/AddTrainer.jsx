import axios from "axios";
import React, { useEffect, useState } from "react";

const AddTrainer = () => {
  const[trainerReq, setTrainerReq] = useState([]);

  const[fullname, setFullname] = useState("")
  const[phone, setPhone] = useState("")
  const[email, setEmail] = useState("")
  const[qualifications, setQualifications] = useState("")
  const[password, setPassword] = useState("")
  const[confPassword, setConfPassword] = useState("")

  const fetchTrainerReq = async () => {
    const res = await axios.get(
      "http://localhost:4000/api/fetch-trainer-req"
    );
    setTrainerReq(res.data);
  };

  useEffect(() => {
    try {
      fetchTrainerReq();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const submitHandler = async (e)=>{
    try {
      e.preventDefault()
      const res = await axios.post("http://localhost:4000/api/trainer-signin",({
        fullname,
        phone,
        email,
        qualifications,
        password,
        confPassword,
      }))
      alert(res.data);
      window.location.reload()
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <div className="card m-2 p-2">
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              Trainer Name
            </span>
            <input type="text" className="form-control" onChange={(e)=>setFullname(e.target.value)} required/>
          </div>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              Phone
            </span>
            <input type="text" className="form-control" onChange={(e)=>setPhone(e.target.value)} required/>
          </div>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
            <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)} required/>
          </div>

          <div className="input-group">
            <span className="input-group-text">Qualifications</span>
            <textarea className="form-control" onChange={(e)=>setQualifications(e.target.value)} required></textarea>
          </div>

          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              Confirm Password
            </span>
            <input type="password" className="form-control" onChange={(e)=>setConfPassword(e.target.value)} required/>
          </div>
          <button type="submit" className="btn btn-success">
            Add Trainer
          </button>
        </form>
      </div>
      <h1 className="text-center text-white bg-success">
        Trainer Recieved Data
      </h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Qualifications</th>
            </tr>
          </thead>
          <tbody>
            {trainerReq.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.fullname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td className="w-50">{item.qualifications}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddTrainer;
