import { useState } from "react";
import axios from "axios";


const AddingClasses = () => {
  const [Trainer, setTrainer] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [price,setPrice]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post("http://localhost:4000/api/add-class", {
        Trainer: Trainer,
        category: category,
        description: description,
        date: date,
        price:price,
      });
      console.log(response.data); // Log the response data
      alert('Class is added successfully');
      setTrainer('');
      setCategory('');
      setDescription('');
      setDate('');
      setPrice('');
    } catch (err) {
      console.error("Error submitting form:", err); // Improved error logging
    }
  };

  return (
    <div>
      <h1 className="text-center bg-success text-white">All Classes</h1>
      <div className="container p-2 d-flex justify-content-center">
        <div className="card p-2 m-2" style={{ width: "500px" }}>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Trainer</span>
              <input
                type="text"
                className="form-control"
                value={Trainer}
                onChange={(e) => setTrainer(e.target.value)}
                required
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Category</span>
              <select
                className="form-select"
                aria-label="Default select example"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">--SELECT--</option>
                <option value="Kids Classes">Kids Classes</option>
                <option value="Private Classes">Private Classes</option>
                <option value="Group Classes">Group Classes</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Description</span>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Price</span>
              <textarea
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Date</span>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
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
