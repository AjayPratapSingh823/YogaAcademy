import React from "react";

const AddingClasses = () => {
  let allClasses = [
    {
      title: "Something",
      description: "loremqwewqrhfklhjkhdskahfkdshfaklshfsfhshf",
      category: "Private",
      date: "22-09-2024",
    },
    {
      title: "Something",
      description: "loremqwewqrhfklhjkhdskahfkdshfaklshfsfhshf",
      category: "Group",
      date: "22-09-2024",
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
              <h2 className="text-danger">{item.title} <span className="text-success">({item.category})</span></h2>
              <p>
                {item.description}
              </p>
              <h4 className="text-primary">Date: {item.date}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddingClasses;
