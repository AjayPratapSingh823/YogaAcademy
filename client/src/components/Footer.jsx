import React from 'react'
import css from "../css/footer.module.css"

const Footer = () => {
  return (
    <div className={`bg-dark text-light p-5`}>
        <div className={`${css["footer-1"]}`}>
            <a href="">Our Mission</a>
            <a href="/contact-us">Contact us</a>
            <a href="/faqs">Help & FAQs</a>
            <a href="/yoga-demo-videos">Yoga Demo Videos</a>
            <a href="/testimonials">Testimonials</a>
        </div>
        <div className={`${css["footer"]}`}>
            <h1 className='text-success text-center p-4 border border-success rounded'>Yoga Academy</h1>
            <div>
                <h4>Our Classes</h4>
                <div className={`${css["footer-2"]}`}>
                <a href="/kids-classes">Kids Classes</a>
                <a href="/group-classes">Group Classes</a>
                <a href="/private-classes">Private Classes</a>
                </div>
            </div>
            <div className='me-lg-5'>
                <h4>Our Address</h4>
                <p>Office-123, First Floor, Second Building</p>
                <p>Old Road,New City, Somewhere</p>
                <p>PIN : 123456</p>
            </div>
        </div>
    </div>
  )
}

export default Footer