import React from "react";
import css from "../css/mobileNav.module.css";

const MobileNav = () => {
  return (
    <nav class={`${css["d-no"]} navbar navbar-expand-lg bg-body-tertiary p-4`}>
      <div class="container">
        <a class="text-success fw-bold navbar-brand fs-3" href="#">
        Yoga Academy
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home */}
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* I am New Here */}
            <li class="nav-item dropdown ddown">
              <a
                class="nav-link dropdown-toggle ddown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                I am New here
              </a>
              <ul class="dropdown-menu ddown-menu">
                <li>
                  <a class="dropdown-item" href="/i-am-new-here">
                    What is Yoga?
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/i-am-new-here">
                    What can you expect
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/i-am-new-here">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/i-am-new-here">
                    Trainers
                  </a>
                </li>
              </ul>
            </li>
            {/* Offering Classes */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Offerings/Classes
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/kids-class">
                    Kids Classes
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/group-class">
                    Group Yoga Classes(Offline/Online)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/private-class">
                    Private Yoga Classes(Offline/Online)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/yoga-workshops">
                    Yoga Workshop
                  </a>
                </li>
              </ul>
            </li>
            {/* Calender */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Calender
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/two-zero-two-four">
                    2024
                  </a>
                </li>
              </ul>
            </li>
            {/* Resource */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resource
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/blogs">
                    Blogs
                  </a>
                </li>
              </ul>
            </li>
            {/* Contact Us */}
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/contact-us">
                Contact Us
              </a>
            </li>
          </ul>
          <div>
        <a href="/user-dashboard" className="btn btn-success">User Profile</a>
        <a href='/group-class' className="btn btn-success m-1">Book a Class</a>
      </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
