import React from "react";
import css from "../css/admin.module.css";

const AdminProfile = () => {
  return (
    <div>
      <div className={css["cover"]}>
        <div className={css["profile"]}>
          <img src="" alt="" />
        </div>
      </div>
      <h2 className="p-2">
        Name <span class="badge text-bg-warning">Admin</span>
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
              <div className="col m-1">Column</div>
            </div>
            <div className="row">
              <div className="col">Phone Number:</div>
              <div className="col m-1">Column</div>
            </div>
            <div className="row">
              <div className="col">Email:</div>
              <div className="col m-1">Column</div>
            </div>
            <div className="row">
              <div className="col">Address:</div>
              <div className="col">
                <input
                  type="text"
                  className="rounded border p-1"
                  placeholder="Address"
                ></input>
                <button className="btn btn-dark m-1" title="Save">
                  Save
                </button>
                <button className="btn btn-success m-1">Update</button>
              </div>
            </div>
            <div className="row">
              <div className="col">Gender:</div>
              <div className="col">
                <input
                  type="text"
                  className="rounded border p-1"
                  placeholder="Gender"
                ></input>
                <button className="btn btn-dark m-1" title="Save">
                  Save
                </button>
                <button className="btn btn-success m-1">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
