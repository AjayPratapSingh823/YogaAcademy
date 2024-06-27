import axios from "axios";
import React, { useEffect, useState } from "react";

const Queries = () => {

  const[queries, setQueries] = useState([])

  useEffect(()=>{
    const fetchQueries = async ()=>{
      try {
        const res = await axios.get("http://localhost:4000/api/fetch-queries")
        setQueries(res.data)
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchQueries()
  },[])


  return (
    <div>
      <h1 className="bg-success text-center text-white">All Queries</h1>
<div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((item, index) => (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.fullname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td className="w-50">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Queries;
