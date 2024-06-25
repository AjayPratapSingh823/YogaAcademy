import React from 'react'
import css from "../css/i-am-new-here.module.css"

const IAmNewHere = () => {
  return (
    <div>
          <section className={css["whatIsYoga"]}>
        <div className={css["outerDiv1"]}>
            <div></div>
        </div>
        <div className={css["outerDiv2"]}>
            <h1>WHAT IS YOGA ?</h1>
            <p>"Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control and still the mind, recognizing a detached witness-consciousness untouched by the mind and mundane suffering."</p>
        </div>
    </section>


    <div id={css["whatExp"]}><h2>What Can You Expect ?</h2></div>
    <section className={css["whatExpect"]}>
        <div className={css["expBox1"]}>
            <div className={css["weInDiv"]}>
                <i className="fa-solid fa-certificate"></i>
                <h3>Our Teachers Are Formally Certified</h3>
                <p>A Registered Yoga Teacher is a distinction given to Yoga teachers certified by Yoga Alliance.</p>
            </div>
            <div className={css["weInDiv"]}>
                <i className="fa-regular fa-heart"></i>
                <h3>Entire Team Is Light Hearted</h3>
                <p>As serious as we are about Yoga, the fun quotient in this team is definitely high. The entire team is light hearted, enjoys Yoga and enjoys making Yoga fun for you. So you are in for some silly jokes and goofing around for sure.</p>
            </div>
            <div className={css["weInDiv"]}>
                <i className="fa-solid fa-hand-sparkles"></i>
                <h3>Natural Light, Comfortable Space & Hygienic</h3>
                <p>Every aspect of the studio space has been thought through and carefully put together by us. We wanted the space to give you a sense of calm and grounding for your practice and we are happy to say that is exactly what it does. Flooded by natural light AYS is a cozy, comfortable space that is clean, hygienic and well equipped.</p>
            </div>
        </div>
        <div className={css["expBox2"]}>
            <div className={css["weInDiv"]}>
                <i className="fa-solid fa-clock"></i>
                <h3>Attend The Class Of Your Choice</h3>
                <p>There will always be something that seems more important than practice! Yeah, been there done that ! So, we have multiple classes through the day, both online and offline and personal classes are scheduled to your convenience, so you do not have to compromise on your practice! Basically you don’t have an excuse now ! You can attend the className of your choice at the studio or online and even two classes a day if you are the enthu type lol!</p>
            </div>
            <div className={css["weInDiv"]}>
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <h3>Extremely Affordable Prices</h3>
                <p>Last one but the most important – Our prices! We are extremely affordable for the expertise and flexibility we offer. This is a cliché but , you will pay the same for both- one meal at a restaurant and 1 month of unlimited yoga classes. If that still doesn’t work for you, you still get to practice and be part of the community through our short and long term programs and workshops.</p>
            </div>
        </div>
    </section>

    <section id={css["aboutUs"]}>
        <h2>About Us</h2>
        <p>Everything about Atma Yoga Shala from inception to where we are now has happened organically almost like we are just flowing with the order of the universe. Nothing about this beautiful community has been forced or made to happen and we are humbled by how naturally it has all come together.</p>
        <p>If you have ever wondered ‘who am I?’ ‘Who is the real me’? What is the purpose of this life?’ then know that real Yoga will lead you towards the answers you are looking for. Have we found them? Of course not! But we happily stumbling around on this path and we welcome you to join us !</p>
        <p>We are here to build a community that is curious about life and reality and question it with an open mind. Not forgetting having fun in the process. We may not get all the answers now, but we will find new perspectives and understanding.</p>
    </section>
    </div>
  )
}

export default IAmNewHere