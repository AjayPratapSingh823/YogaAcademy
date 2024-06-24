import React, { useState } from 'react'
import axios from "axios"
import css from "../css/contact.module.css"

const ContactUs = () => {

  let [fullname, setFullname] = useState("")
  let [email, setEmail] = useState("")
  let [phone, setPhone] = useState("")
  let [message, setMessage] = useState("")

  const submitHandler = async (e)=>{
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:4000/api/contact-form",({
        fullname,
        email,
        phone,
        message,
      }))
      alert(res.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
    <section className={css["contactHeader"]}>
    <div className={css["contactOuter"]}>
      <h1>Get In Touch With Us</h1>
      <p>
        Our yoga classes are hot, warm, or non-heated and we offer a variety
        of styles and approaches to suit everyone’s unique needs.
      </p>
    </div>
    <div className ={css["contactOuter"]}>
      <form action="">
        <h2>Fill up the form below</h2>
        <input type="text" onChange={(e)=>setFullname(e.target.value)} placeholder="Name" id="uname" />
        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" id="mail" />
        <input type="text" onChange={(e)=>setPhone(e.target.value)} placeholder="Contact no." id="phone" />
        <input type="text" onChange={(e)=>setMessage(e.target.value)} placeholder="Your Message" id="feedback" />
        <button type='submit' class={css["sendMsg"]} onClick={submitHandler}>Send Message</button>
      </form>
    </div>
  </section>

  {/* contact Info Section */}
  <section className={css["contactInfo"]}>
    <div className={css["ContactInfoLap"]}>
      <div className={css["cInfo"]}>
        <i className="fa-solid fa-phone"></i>
        <h5>PHONE</h5>
        <p>480-519-6276</p>
      </div>
      <div className={css["cInfo"]}>
        <i className="fa-solid fa-envelope"></i>
        <h5>EMAIL</h5>
        <p>info@example.com</p>
      </div>
      <div className={css["cInfo"]}>
        <i className="fa-solid fa-location-dot"></i>
        <h5>ADDRESS</h5>
        <p>51 211th Street, Bayside, NY</p>
      </div>
    </div>
  </section>
  </>
  )
}

export default ContactUs