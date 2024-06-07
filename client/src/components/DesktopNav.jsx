import React from 'react'
import css from "../css/desktopNav.module.css"
import userImg from '../../assests/user.jpg';

const DesktopNav = () => {
  return (
    <nav class={`${css["m-no"]} navbar navbar-expand-lg bg-body-tertiary p-4`}>
    <div class="container">
      <a class="text-success fw-bold navbar-brand fs-3" href="/">
        Yoga Academy
      </a>
      <div class="">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Home */}
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">
              Home
            </a>
          </li>
          {/* I am New Here */}
          <li class={`nav-item dropdown ${css["dropdown"]}`}>
            <a
              class={`nav-link dropdown-toggle ${css["dropdown-toggle"]}`}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              I am New here
            </a>
            <ul className={`dropdown-menu ${css["dropdown-menu"]}`}>
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
          <li class={`nav-item dropdown ${css["dropdown"]}`}>
            <a
              class={`nav-link dropdown-toggle ${css["dropdown-toggle"]}`}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Offerings/Classes
            </a>
            <ul className={`dropdown-menu ${css["dropdown-menu"]}`}>
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
          <li class={`nav-item dropdown ${css["dropdown"]}`}>
            <a
              class={`nav-link dropdown-toggle ${css["dropdown-toggle"]}`}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Calender
            </a>
            <ul className={`dropdown-menu ${css["dropdown-menu"]}`}>
              <li>
                <a class="dropdown-item" href="/two-zero-two-four">
                  2024
                </a>
              </li>
            </ul>
          </li>
          {/* Resource */}
          <li class={`nav-item dropdown ${css["dropdown"]}`}>
            <a
              class={`nav-link dropdown-toggle ${css["dropdown-toggle"]}`}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Resource
            </a>
            <ul className={`dropdown-menu ${css["dropdown-menu"]}`}>
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
      </div>
      <div>
        <a href="/user-profile" className='btn btn-outline-success'><img src={userImg} className={`${css["user-img"]}`} /></a>
        <a href='/group-class' className="btn btn-success m-2">Book a Class</a>
      </div>
    </div>
  </nav>
  )
}

export default DesktopNav