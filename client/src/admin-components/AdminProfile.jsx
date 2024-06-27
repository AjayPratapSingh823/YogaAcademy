import React, { useEffect, useState } from "react";
import css from "../css/admin.module.css";
import axios from "axios";

const AdminProfile = () => {

  const[details, setDetails] = useState('')

  const adminDetail = async ()=>{
    try {
      const res = await axios.get("http://localhost:4000/api/admin-details")
      setDetails(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    adminDetail()
  },[])

  return (
    <div>
      <div className={css["cover"]}>
        <div className={css["profile"]}>
          <img src="" alt="" />
        </div>
      </div>
      <h2 className="p-2">
        Name <span className="badge text-bg-warning">Admin</span>
      </h2>
      <div className="m-2 p-2 border rounded">
        <h4 className="btn-success btn">Change Profile Picture</h4>
        <div className="input-group">
          <input type="file" className="form-control" id="inputGroupFile02" />
          <label className="input-group-text">Upload</label>
        </div>
      </div>
      <div className={css["admin-details"]}>
        <div className="m-2 border rounded">
          <h4 className="m-2 btn-success btn">Basic Info</h4>
          <div className="container p-4">
            <div className="row">
              <div className="col">Full Name:</div>
              <div className="col m-1">{details.fullname}</div>
            </div>
            <div className="row">
              <div className="col">Phone Number:</div>
              <div className="col m-1"></div>
            </div>
            <div className="row">
              <div className="col">Email:</div>
              <div className="col m-1">{details.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
