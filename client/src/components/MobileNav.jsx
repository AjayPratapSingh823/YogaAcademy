import React from "react";
import css from "../css/mobileNav.module.css";

const MobileNav = () => {
  return (
    <nav className={`${css["d-no"]} navbar navbar-expand-lg bg-body-tertiary p-4`}>
      <div className="container">
        <a className="text-success fw-bold navbar-brand fs-3" href="#">
        Yoga Academy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* I am New Here */}
            <li className="nav-item dropdown ddown">
              <a
                className="nav-link dropdown-toggle ddown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                I am New here
              </a>
              <ul className="dropdown-menu ddown-menu">
                <li>
                  <a className="dropdown-item" href="/i-am-new-here">
                    What is Yoga?
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/i-am-new-here">
                    What can you expect
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/i-am-new-here">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/i-am-new-here">
                    Trainers
                  </a>
                </li>
              </ul>
            </li>
            {/* Offering Classes */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Offerings/Classes
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/kids-className">
                    Kids Classes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/group-className">
                    Group Yoga Classes(Offline/Online)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/private-className">
                    Private Yoga Classes(Offline/Online)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/yoga-workshops">
                    Yoga Workshop
                  </a>
                </li>
              </ul>
            </li>
            {/* Calender */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Calender
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/two-zero-two-four">
                    2024
                  </a>
                </li>
              </ul>
            </li>
            {/* Resource */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resource
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/blogs">
                    Blogs
                  </a>
                </li>
              </ul>
            </li>
            {/* Contact Us */}
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/contact-us">
                Contact Us
              </a>
            </li>
          </ul>
          <div>
        <a href="/user-dashboard" className="btn btn-success">User Profile</a>
        <a href='/group-className' className="btn btn-success m-1">Book a className</a>
      </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
