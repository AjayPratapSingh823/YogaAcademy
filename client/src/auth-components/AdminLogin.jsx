import React from 'react'

const AdminLogin = () => {
  return (
    <div className='border rounded m-2 p-2 text-center'>
        <h2>Welcome Admin!</h2>
    <form action="">
    <div class="input-group flex-nowrap mb-3">
  <span class="input-group-text" id="addon-wrapping">Email</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
    <div class="input-group flex-nowrap mb-3">
  <span class="input-group-text" id="addon-wrapping">Password</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
  <button className="btn btn-success">Login</button>
    </form>
    </div>
  )
}

export default AdminLogin