import React, { useRef } from 'react'
import css from "../css/desktopNav.module.css"
import userImg from '../../assets/user.jpg';

const DesktopNav = () => {

  return (
    <nav className={`${css["m-no"]} navbar navbar-expand-lg bg-body-tertiary p-4`}>
    <div className="container">
      <a className="text-success fw-bold navbar-brand fs-3" href="/">
        Yoga Academy
      </a>
      <div className="">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Home */}
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              Home
            </a>
          </li>
          {/* I am New Here */}
          <li className={`nav-item dropdown ${css["dropdown"]}`}>
            <a
              className={`nav-link dropdown-toggle ${css["dropdown-toggle"]}`}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              I am New here
            </a>
            <ul className={`dropdown-menu ${css["dropdown-menu"]}`}>
              <li>
                <a className="dropdown-item" href="/i-am-new-here">
                  What is Yoga?
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/i-am-new-here/#whatExp">
                  What can you expect
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/i-am-new-here/#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/all-trainers">
                  Trainers
                </a>
              </li>
            </ul>
          </li>
          {/* Offering Classes */}
          <li className={`nav-item dropdown ${css["dropdown"]}`}>
            <a
              className={`nav-link dropdown-toggle ${css["dropdown-toggle"]}`}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Offerings/Classes
            </a>
            <ul className={`dropdown-menu ${css["dropdown-menu"]}`}>
              <li>
                <a className="dropdown-item" href="/kids-classes">
                  Kids Classes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/group-classes">
                  Group Yoga Classes(Offline/Online)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/private-classes">
                  Private Yoga Classes(Offline/Online)
                </a>
              </li>
            </ul>
          </li>
          {/* Calender */}
          <li className={`nav-item dropdown ${css["dropdown"]}`}>
            <a
              className={`nav-link dropdown-toggle ${css["dropdown-toggle"]}`}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Calender
            </a>
            <ul className={`dropdown-menu ${css["dropdown-menu"]}`}>
              <li>
                <a className="dropdown-item" href="/two-zero-two-four">
                  2024
                </a>
              </li>
            </ul>
          </li>
          {/* Resource */}
          <li className={`nav-item dropdown ${css["dropdown"]}`}>
            <a
              className={`nav-link dropdown-toggle ${css["dropdown-toggle"]}`}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Resource
            </a>
            <ul className={`dropdown-menu ${css["dropdown-menu"]}`}>
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
      </div>
      <div>
        <a href="/user-dashboard" className='btn btn-outline-success'><img src={userImg} className={`${css["user-img"]}`} /></a>
        <a href='/group-className' className="btn btn-success m-2">Book a Class</a>
      </div>
    </div>
  </nav>
  )
}

export default DesktopNav