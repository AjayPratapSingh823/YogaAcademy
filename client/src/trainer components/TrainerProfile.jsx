import React from "react";
import css from "../css/trainer.module.css";

const TrainerProfile = () => {
  return (
    <div>
      <div className={css["cover"]}>
        <div className={css["profile"]}>
          <img src="" alt="" />
        </div>
      </div>
      <h2 className="p-2">
        Name <span class="badge text-bg-primary">Trainer</span>
      </h2>

{/* Modal Button */}
<button type="button" class="m-2 btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Blogs Section
</button>

{/* Modal Section */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Blogs Section</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer">
        <a href="/blogs" class="btn btn-dark">All Blogs</a>
        <a href="/create-blog" class="btn btn-success">Create a Blog</a>
      </div>
    </div>
  </div>
</div>


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

        <div className="m-2 border rounded">
          <h4 className="m-2 btn-success btn">Qualification</h4>
          <div className="container text-center p-4">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="rounded border p-1"
                  placeholder="Enter your Qualification I"
                ></input>
                <button className="btn btn-dark m-1" title="Save">
                  Save
                </button>
                <button className="btn btn-success m-1">Update</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="rounded border p-1"
                  placeholder="Enter your Qualification II"
                ></input>
                <button className="btn btn-dark m-1" title="Save">
                  Save
                </button>
                <button className="btn btn-success m-1">Update</button>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2 border rounded">
          <h4 className="m-2 btn-success btn">Achievements</h4>
          <div className="container text-center p-4">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="rounded border p-1"
                  placeholder="Enter your Achievements I"
                ></input>
                <button className="btn btn-dark m-1" title="Save">
                  Save
                </button>
                <button className="btn btn-success m-1">Update</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="rounded border p-1"
                  placeholder="Enter your Achievements II"
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

export default TrainerProfile;