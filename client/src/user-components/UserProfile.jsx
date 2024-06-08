import { useState } from "react";
import css from "../css/user-profile.module.css";

const UserProfile = () => {

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    gender: "",
    weight: "",
    healthCondition: "",
    profilePic: "",
  })

  return (
    <div className={css["user-profile"]}>
      <h2 className="text-success p-2">User Profile</h2>
      <div className="m-2 border rounded">
        <h4 className="m-2 btn-outline-success btn">Update Profile Pic</h4>
        <div className="container p-4">
          <div className="input-group mb-3 w-lg-50">
            <input type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>
        </div>
      </div>
      <div className="m-2 border rounded">
        <h4 className="m-2 btn-success btn">Basic Info</h4>
        <div className="container p-4">
          <div className="row">
            <div className="col">First Name:</div>
            <div className="col m-1">Column</div>
          </div>
          <div className="row">
            <div className="col">Last Name:</div>
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
              <button className="btn btn-success m-1">
                Update
              </button>
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
              <button className="btn btn-success m-1">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 border rounded">
        <h4 className="m-2 btn-success btn">Health Info</h4>
        <div className="container p-4">
          <div className="row">
            <div className="col">Weight:</div>
            <div className="col">
              <input
                type="text"
                className="rounded border p-1"
                placeholder="Weight"
              ></input>
              <button className="btn btn-dark m-1" title="Save">
                Save
              </button>
              <button className="btn btn-success m-1">
                Update
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">Health Condition:</div>
            <div className="col">
              <input
                type="text"
                className="rounded border p-1"
                placeholder="Health Condition"
              ></input>
              <button className="btn btn-dark m-1" title="Save">
                Save
              </button>
              <button className="btn btn-success m-1">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
