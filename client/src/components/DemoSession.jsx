
function DemoSession() {
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8 custom-width">
        <h2 className="text-center">Book a Demo</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" placeholder="Enter your address" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default DemoSession