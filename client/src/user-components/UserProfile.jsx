import {useState, useEffect} from "react";
import css from "../css/user-profile.module.css";
import axios from 'axios';
const UserProfile = () => {
  const [FullName,setFullName]=useState('');
  const [Phone,setPhone]=useState('');
  const [Email,setEmail]=useState('');
  const [address,setaddress]=useState('');
  const [finaladdress,setfinaladdress]=useState('');
  const [finalgender,setfinalgender]=useState('');
  const [gender,setgender]=useState('');
  const [weight,setweight]=useState('');
  useEffect(()=>{
    const fetchData=async()=>{
       setFullName(localStorage.getItem('full Name:'));
       setPhone(localStorage.getItem('Phone:'));
       setEmail(localStorage.getItem('Email:'));
       setfinaladdress(localStorage.getItem('Address:'))
       setfinalgender(localStorage.getItem('Gender:'))
  }
    fetchData()
  },[finaladdress]);

  const handleAddressSubmit=async()=>{
    try{
          const response= await axios.post('http://localhost:4000/api/address',{
            address:address,
            Email:Email,
          })
          console.log(response);
          localStorage.setItem('Address:',address);
    }catch(err){
      console.log(err);
    }
  }

  const handleAddressUpdate=async()=>{
        localStorage.removeItem('Address:');
        setfinaladdress('');
  }
  const handleGender=async()=>{
        try{
          const response = await axios.post('http://localhost:4000/api/gender',{
            gender:gender,
            Email:Email
          })
          console.log(response);
          localStorage.setItem('Gender:',gender);
        }catch(err){
          console.log(err);
        }
  }
  
 

  return (
    <div className={css["user-profile"]}>
      <h2 className="text-success p-2">User Profile</h2>
      <div className="m-2 border rounded">
        <h4 className="m-2 btn-success btn">Update Profile Pic</h4>
        <div className="container p-4">
          <div className="input-group mb-3 w-lg-50">
            <input type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text">
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
              {finaladdress ? <p>{finaladdress}</p>:<input
                type="text"
                className="rounded border p-1"
                value={address}
                onChange={(e)=>setaddress(e.target.value)}
                placeholder="Address"
              ></input>}
              <button className="btn btn-dark m-1" title="Save" onClick={()=>handleAddressSubmit()}>
                Save
              </button>
              <button className="btn btn-success m-1" onClick={()=>handleAddressUpdate()}>
                Update
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">Gender:</div>
            <div className="col">
              {finalgender ? <p>{finalgender}</p>:<input
                type="text"
                className="rounded border p-1"
                value={gender}
                onChange={(e)=>setgender(e.target.value)}
                placeholder="Gender"
              ></input>}
              <button className="btn btn-dark m-1" title="Save" onClick={()=>handleGender()}>
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
                onChange={(e)=>setweight(e.target.value)}
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
