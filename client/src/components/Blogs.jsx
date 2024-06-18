import React from 'react'
import css from "../css/blogs.module.css"
// import blogHead from "../../assets/Blog assets/Blog assets/blog-head.avif"
import blog1 from "../../assets/Blog assets/blog1.jpg"
import blog2 from "../../assets/Blog assets/blog2.jpg"
import blog3 from "../../assets/Blog assets/blog3.jpg"
import blog4 from "../../assets/Blog assets/blog4.jpg"
import blog5 from "../../assets/Blog assets/blog5.jpg"
import blog6 from "../../assets/Blog assets/blog6.jpg"
// import headBanner from "../../assets/Blog assets/headBanner.jpg"
// import headImg from '../../assets/Blog assets/headImg.avif'

const Blogs = () => {
  return (
    <div>
      <section  class={css["blogHead"]}>
        <div class={css["blogHeadDiv"]}>
            <h1>Blogs</h1>
        </div>
    </section>
    
    <section class={css["blogs"]}>
        <div class={css["blogDiv"]}>
            <div class={css["blogOuter1"]}><img src={blog1} alt=""/></div>
            <div class={css["blogOuter2"]}>
                <h2>A Yoga Practice…..</h2>
                <p>Hito all of you who are reading this 🙂 As fellow travelers in the journey</p>
            </div>
        </div>
        <div class={css["blogDiv"]}>
            <div class={css["blogOuter1"]}><img src={blog2} alt=""/></div>
            <div class={css["blogOuter2"]}>
                <h2>So, What Is Trust??</h2>
                <p>A few years back I went through a situation which made me a closed person</p>
            </div>
        </div>
        <div class={css["blogDiv"]}>
            <div class={css["blogOuter1"]}><img src={blog3} alt=""/></div>
            <div class={css["blogOuter2"]}>
                <h2>Let’s Break The Ball & Build Bridges</h2>
                <p>Often on the spiritual path , there is talk about detachment ! And common people</p>
            </div>
        </div>
        <div class={css["blogDiv"]}>
            <div class={css["blogOuter1"]}><img src={blog4} alt=""/></div>
            <div class={css["blogOuter2"]}>
                <h2>The Ultimate Truth About Us</h2>
                <p>Thanks to B.M.Hegde sir Understanding any subject can be boiled down to our understanding </p>
            </div>
        </div>
        <div class={css["blogDiv"]}>
            <div class={css["blogOuter1"]}><img src={blog5} alt=""/></div>
            <div class={css["blogOuter2"]}>
                <h2>We Are Already Late In Asking Ourselves This Question</h2>
                <p>Thanks to B.M.Hegde sir Understanding </p>
            </div>
        </div>
        <div class={css["blogDiv"]}>
            <div class={css["blogOuter1"]}><img src={blog6} alt=""/></div>
            <div class={css["blogOuter2"]}>
                <h2>Quotes To Remind You Of What Love Is NOT</h2>
                <p>Because Love dies between what it actually is and what you think </p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Blogs