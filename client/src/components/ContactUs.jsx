import React from 'react'
import css from "../css/contact.module.css"

const ContactUs = () => {
  return (
    <>
    <section class={css["contactHeader"]}>
    <div class={css["contactOuter"]}>
      <h1>Get In Touch With Us</h1>
      <p>
        Our yoga classes are hot, warm, or non-heated and we offer a variety
        of styles and approaches to suit everyone’s unique needs.
      </p>
    </div>
    <div class={css["contactOuter"]}>
      <form action="">
        <h2>Fill up the form below</h2>
        <input type="text" placeholder="Name" id="uname" />
        <input type="email" placeholder="Email" id="mail" />
        <input type="text" placeholder="Contact no." id="phone" />
        <input type="text" placeholder="Your Message" id="feedback" />
        <button type='submit' class={css["sendMsg"]}>Send Message</button>
      </form>
    </div>
  </section>

  {/* contact Info Section */}
  <section class={css["contactInfo"]}>
    <div class={css["ContactInfoLap"]}>
      <div class={css["cInfo"]}>
        <i class="fa-solid fa-phone"></i>
        <h5>PHONE</h5>
        <p>480-519-6276</p>
      </div>
      <div class={css["cInfo"]}>
        <i class="fa-solid fa-envelope"></i>
        <h5>EMAIL</h5>
        <p>info@example.com</p>
      </div>
      <div class={css["cInfo"]}>
        <i class="fa-solid fa-location-dot"></i>
        <h5>ADDRESS</h5>
        <p>51 211th Street, Bayside, NY</p>
      </div>
    </div>
  </section>
  </>
  )
}

export default ContactUs