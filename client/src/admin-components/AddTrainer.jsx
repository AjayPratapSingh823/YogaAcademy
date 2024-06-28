import React from "react";

const AddTrainer = () => {
  return (
    <div>
      <div className="card m-2 p-2">
        <form action="">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              Trainer Name
            </span>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              Phone
            </span>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
            <input type="text" className="form-control" />
          </div>

          <div className="input-group">
            <span className="input-group-text">Qualifications</span>
            <textarea className="form-control"></textarea>
          </div>

          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input type="password" className="form-control" />
          </div>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              Confirm Password
            </span>
            <input type="password" className="form-control" />
          </div>

          <button type="submit" className="btn btn-success">
            Add Trainer
          </button>
        </form>
      </div>
      <h1 className="text-center text-white bg-success">Trainer Recieved Data</h1>
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

            <tr>
              <th scope="row">aaa</th>
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
              <td className="w-50">aaa</td>
            </tr>

        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AddTrainer;
