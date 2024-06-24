import React from 'react'

const BecomeATrainer = () => {
  return (
    <div>
        <h1 className='text-center bg-success text-white'>Enter Your Details</h1>
              <form
        action=""
        className="m-2 p-2 border rounded"
      >
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Full Name
          </span>
          <input type="text" className="form-control" name="title" />
        </div>

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Phone
          </span>
          <input type="text" className="form-control" name="title" />
        </div>

        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Email
          </span>
          <input type="text" className="form-control" name="title" />
        </div>

        <div className="input-group">
          <span className="input-group-text">Qualifications</span>
          <textarea className="form-control" name="desc"></textarea>
        </div>

        <div className="text-center m-2">
          <button className="btn btn-dark" type="submit">
            Send Details <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  )
}

export default BecomeATrainer