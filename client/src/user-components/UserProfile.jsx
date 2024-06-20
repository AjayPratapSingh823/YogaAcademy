import { useState, useEffect } from "react";
import css from "../css/user-profile.module.css";
import axios from 'axios';

const UserProfile = () => {
  const [FullName, setFullName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [finalAddress, setFinalAddress] = useState('');
  const [finalGender, setFinalGender] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setFullName(localStorage.getItem('Full Name:'));
      setPhone(localStorage.getItem('Phone:'));
      setEmail(localStorage.getItem('Email:'));
      setFinalAddress(localStorage.getItem('Address:'));
      setFinalGender(localStorage.getItem('Gender:'));
    };
    fetchData();
  }, [finalAddress]);

  const handleAddressSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/address', {
        address: address,
        Email: Email,
      });
      console.log(response);
      localStorage.setItem('Address:', address);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddressUpdate = async () => {
    localStorage.removeItem('Address:');
    setFinalAddress('');
  };

  const handleGender = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/gender', {
        gender: gender,
        Email: Email,
      });
      console.log(response);
      localStorage.setItem('Gender:', gender);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePhotoChange = async (e) => {
    const { files } = e.target;
    setPhoto(files[0]);
  };

  const handlePhotoSubmit = async () => {
    if (!photo) {
      console.log("No photo selected");
      return;
    }
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('Email', Email);
    console.log(formData.Email);
    try {
      const response = await axios.post('http://localhost:4000/api/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
      alert("Photo uploaded successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={css["user-profile"]}>
      <h2 className="text-success p-2">User Profile</h2>
      <div className="m-2 border rounded">
        <h4 className="m-2 btn-success btn">Update Profile Pic</h4>
        <div className="container p-4">
          <div className="input-group mb-3 w-lg-50">
            <input type="file" className="form-control" id="inputGroupFile02" onChange={handlePhotoChange} />
            <label className="input-group-text" onClick={handlePhotoSubmit}>
              Upload
            </label>
          </div>
        </div>
      </div>
      <div className="m-2 border rounded">
        <h4 className="m-2 btn-success btn">Basic Info</h4>
        <div className="container p-4">
          <div className="row">
            <div className="col">Full Name:</div>
            <div className="col m-1">{FullName}</div>
          </div>
          <div className="row">
            <div className="col">Phone Number:</div>
            <div className="col m-1">{Phone}</div>
          </div>
          <div className="row">
            <div className="col">Email:</div>
            <div className="col m-1">{Email}</div>
          </div>
          <div className="row">
            <div className="col">Address:</div>
            <div className="col">
              {finalAddress ? <p>{finalAddress}</p> : <input
                type="text"
                className="rounded border p-1"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              ></input>}
              <button className="btn btn-dark m-1" title="Save" onClick={() => handleAddressSubmit()}>
                Save
              </button>
              <button className="btn btn-success m-1" onClick={() => handleAddressUpdate()}>
                Update
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">Gender:</div>
            <div className="col">
              {finalGender ? <p>{finalGender}</p> : <input
                type="text"
                className="rounded border p-1"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="Gender"
              ></input>}
              <button className="btn btn-dark m-1" title="Save" onClick={() => handleGender()}>
                Save
              </button>
              <button className="btn btn-success m-1">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 border rounded">
        <h4 className="m-2 btn-success btn">Health Info</h4>
        <div className="container p-4">
          <div className="row">
            <div className="col">Weight:</div>
            <div className="col">
              <input
                type="text"
                className="rounded border p-1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight"
              ></input>
              <button className="btn btn-dark m-1" title="Save">
                Save
              </button>
              <button className="btn btn-success m-1">
                Update
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">Health Condition:</div>
            <div className="col">
              <input
                type="text"
                className="rounded border p-1"
                placeholder="Health Condition"
              ></input>
              <button className="btn btn-dark m-1" title="Save">
                Save
              </button>
              <button className="btn btn-success m-1">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
