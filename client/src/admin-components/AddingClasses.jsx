import React from "react";

const AddingClasses = () => {
  let allClasses = [
    {
      title: "",
      description: "",
      date: "",
    },
    {
      title: "",
      description: "",
      date: "",
    },
  ];

  return (
    <div>
      <h1 className="text-center bg-success text-white">All Classes</h1>
      <div className="container p-2">
        <div className="card p-2 m-2">
          <form action="">  

            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                Title
              </span>
              <input type="text" className="form-control" />
            </div>

            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                Category
              </span>
              <select className="form-select" aria-label="Default select example">
                <option selected>--SELECT--</option>
                <option value="Group Classes">Kids Classes</option>
                <option value="Private Classes">Private Classes</option>
                <option value="Group Classes">Group Classes</option>
                <option value="Group Classes">Yoga Classes</option>
              </select>
            </div>

            <div className="input-group">
              <span className="input-group-text">Description</span>
              <textarea className="form-control"></textarea>
            </div>

            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                Date
              </span>
              <input
                type="date"
                className="form-control"
              />
            </div>

            <button className="btn btn-success" type="submit">
              Add a Class
            </button>
          </form>
        </div>
        <div>
          {allClasses.map((item,index) => (
            <div className="card p-2 m-2">
              <h2 className="text-danger">Title</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi ea aut cupiditate at possimus tenetur veniam deserunt
                eaque optio alias, provident inventore dolorum?
              </p>
              <h4 className="text-primary">Date: 21/09/2024</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddingClasses;
