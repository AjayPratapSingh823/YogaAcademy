import React from 'react'

const TrainerLogin = () => {
  return (
    <div className=" m-2 p-2 text-center">
      <h1 className="text-success">Welcome Trainer!</h1>
      <div className='d-flex justify-content-center'>
      <form action="" style={{width:"300px"}}>
        <div class="input-group flex-nowrap m-2">
          <span class="input-group-text bg-success text-white" id="addon-wrapping">
            Email
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div class="input-group flex-nowrap m-2">
          <span class="input-group-text bg-success text-white" id="addon-wrapping">
            Password
          </span>
          <input
            type="password"
            class="form-control"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button className="btn btn-success">Login</button>
      <a href="/forget-trainer-password" className='text-success'>Forget password?</a>
      </form>
      </div>
    </div>
  )
}

export default TrainerLogin