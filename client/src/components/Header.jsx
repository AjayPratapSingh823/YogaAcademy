import React, { useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import css from "../css/header.module.css";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky-top">
      {/* Top Section */}
      <div
        className={`${css["top-section"]} bg-dark text-light d-flex justify-content-end align-items-center`}
      >
        <p className="m-0 p-1 m-no">
          <i class="fa-solid fa-phone"></i> +91 987654321
        </p>
        <p className="m-0 p-1 m-no">
          <i class="fa-solid fa-envelope"></i> info@mail.com
        </p>
        {isLoggedIn ? (
          <a href="/" className="btn btn-success m-2">
            Logout
          </a>
        ) : (
          <a href="/user-login" className="btn btn-success m-2">
            Sign in/Login
          </a>
        )}
      </div>
      {/* Desktop Nav */}
      <DesktopNav />

      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
