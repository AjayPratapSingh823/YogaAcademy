import React from "react";
import css from "../css/user-profile.module.css"

const UserProfile = () => {
  return (
    <div className={css["user-profile"]}>
      <h2 className="text-success p-2">User Profile</h2>
      <div className="m-2 border rounded">
        <h4 className="m-2 btn-success btn">Profile Pic</h4>
        <div class="container p-4">
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" />
            <label class="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>
        </div>
      </div>
      <div className="m-2 border rounded">
        <h4 className="m-2 btn-success btn">Basic Info</h4>
        <button className="btn btn-dark text-right m-2">
          <i className="fa-solid fa-pencil"></i>
        </button>
        <div class="container p-4">
          <div class="row">
            <div class="col">First Name :</div>
            <div class="col">Column</div>
          </div>
          <div class="row">
            <div class="col">Last Name :</div>
            <div class="col">Column</div>
          </div>
          <div class="row">
            <div class="col">Phone Number :</div>
            <div class="col">Column</div>
          </div>
          <div class="row">
            <div class="col">Email :</div>
            <div class="col">Column</div>
          </div>
          <div class="row">
            <div class="col">Address :</div>
            <div class="col">Column</div>
          </div>
          <div class="row">
            <div class="col">Gender :</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
      <div className="m-2 border rounded">
        <h4 className="m-2 btn-success btn">Health Info</h4>
        <button className="btn btn-dark text-right m-2">
          <i className="fa-solid fa-pencil"></i>
        </button>
        <div class="container p-4">
          <div class="row">
            <div class="col">Weight :</div>
            <div class="col">Column</div>
          </div>
          <div class="row">
            <div class="col">Health Condition :</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
