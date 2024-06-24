import React from "react";

const Queries = () => {
  let arr = [
    {
      fullname: "Shinchan Nohara",
      email: "shinchan@nohara.com",
      phone: 1234567890,
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta rerum placeat corrupti tenetur! Corporis dignissimos, quis illum placeat recusandae optio ipsam! Animi distinctio, velit, hic, est ad perspiciatis optio laboriosam aut placeat fugiat minus impedit neque fuga autem necessitatibus praum, ad",
     },
    {
      fullname: "Shinchan Nohara",
      email: "shinchan@nohara.com",
      phone: 1234567890,
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta rerum placeat corrupti tenetur! Corporis dignissimos, quis illum placeat recusandasentium voluptatum? Itaque perferendis illum officia excepturi natus aperiam numquam maxime vel in quos nisi adipisci reprehenderit laudantium laborum, ad",
    },
    {
      fullname: "Shinchan Nohara",
      email: "shinchan@nohara.com",
      phone: 1234567890,
      message: "Lorem ipsum, dm, ad",
    },
    {
      fullname: "Shinchan Nohara",
      email: "shinchan@nohara.com",
      phone: 1234567890,
      message:
        "Lorem Itaque perferendis illum officia excepturi natus aperiam numquam maxime vel in quos nisi adipisci reprehenderit laudantium laborum, ad",
    },
  ];

  return (
    <div>
      <h1 className="bg-success text-center text-white">All Queries</h1>
<div className="table-responsive">
      <table class="table">
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
          {arr.map((item, index) => (
            <tr>
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
