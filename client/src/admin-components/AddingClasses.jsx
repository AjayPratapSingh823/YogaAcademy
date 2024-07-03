import React, { useState } from "react";


const AddingClasses = () => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")

  const submitHandler = async (e)=>{
    e.preventDefault()
    
  }

  return (
    <div>
      <h1 className="text-center bg-success text-white">All Classes</h1>
      <div className="container p-2 d-flex justify-content-center">
        <div className="card p-2 m-2" style={{width:"500px"}}>
          <form action="">

            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                Title
              </span>
              <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)}/>
            </div>

            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                Category
              </span>
              <select className="form-select" aria-label="Default select example" onSelect={(e)=>setCategory(e.target.value)}>
                <option>--SELECT--</option>
                <option value="Group Classes">Kids Classes</option>
                <option value="Private Classes">Private Classes</option>
                <option value="Group Classes">Group Classes</option>
              </select>
            </div>

            <div className="input-group">
              <span className="input-group-text">Description</span>
              <textarea className="form-control" onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>

            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                Date
              </span>
              <input
                type="date"
                className="form-control"
                onChange={(e)=>setDate(e.target.value)}
              />
            </div>

            <button className="btn btn-success" type="submit">
              Add a Class
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddingClasses;
