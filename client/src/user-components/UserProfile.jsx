
import css from "../css/user-profile.module.css";

const UserProfile = () => {
  return (
    <div className={css["user-profile"]}>
      <h2 className="text-success p-2">User Profile</h2>
      <div className="m-2 border rounded">
        <h4

          className="m-2 btn-outline-success btn"
        >
          Update Profile Pic
        </h4>
        <div className="container p-4">
          <div className="input-group mb-3">
            <input type="file"  id="inputGroupFile02" />
            <label className="input-group-text">
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
        <div className="container p-4">
          <div className="row">
            <div className="col">First Name :</div>
            <div className="col">Column</div>
          </div>
          <div className="row">
            <div className="col">Last Name :</div>
            <div className="col">Column</div>
          </div>
          <div className="row">
            <div className="col">Phone Number :</div>
            <div className="col">Column</div>
          </div>
          <div className="row">
            <div className="col">Email :</div>
            <div className="col">Column</div>
          </div>
          <div className="row">
            <div className="col">Address :</div>
            <input type="text" className="col" placeholder="Address"></input>
            <button className="col">Save</button>
            <button className="col">Update</button>
          </div>
          <div className="row">
            <div className="col">Gender :</div>
            <div className="col">Column</div>
          </div>
        </div>
      </div>
      <div className="m-2 border rounded">
        <h4 className="m-2 btn-success btn">Health Info</h4>
        <button className="btn btn-dark text-right m-2">
          <i className="fa-solid fa-pencil"></i>
        </button>
        <div className="container p-4">
          <div className="row">
            <div className="col">Weight :</div>
            <div className="col">Column</div>
          </div>
          <div className="row">
            <div className="col">Health Condition :</div>
            <div className="col">Column</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
