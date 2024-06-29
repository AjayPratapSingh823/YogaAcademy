import React from 'react'

const TrainerLogin = () => {
  return (
    <div className="border rounded m-2 p-2 text-center">
      <h1 className="bg-success text-white">Welcome Trainer!</h1>
      <form action="">
        <div class="input-group flex-nowrap m-3">
          <span class="input-group-text" id="addon-wrapping">
            Email
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div class="input-group flex-nowrap m-3">
          <span class="input-group-text" id="addon-wrapping">
            Password
          </span>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button className="btn btn-success">Login</button>
      </form>
    </div>
  )
}

export default TrainerLogin