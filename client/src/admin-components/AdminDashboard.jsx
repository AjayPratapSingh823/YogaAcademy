import React from "react";
import css from "../css/admin.module.css";

const AdminDashboard = () => {
  let arr = [
    {
      name: "Admin Profile",
      link: "/admin-profile",
    },
    {
      name: "User Data",
      link: "/user-data",
    },
    {
      name: "Trainer Data",
      link: "/trainer-data",
    },
    {
      name: "Add Trainer",
      link: "/add-trainer",
    },
    {
      name: "Add Class",
      link: "/adding-classes",
    },
    {
      name: "Create a Blog",
      link: "/create-blog",
    },
    {
      name: "Queries",
      link: "/queries",
    },
    {
      name: "FAQs",
      link: "/faqs",
    },
  ];
  return (
    <div>
      <nav className={css["dashboard-flex"]}>
        {arr.map((item) => (
          <div className={css["card"]}>
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default AdminDashboard;
