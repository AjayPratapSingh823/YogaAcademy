import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Payment(){
  const {id}=useParams();
  console.log(id);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 custom-width">
          <h2 className="text-center text-success">Make Payment</h2>
          <form className="m-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter your address"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
