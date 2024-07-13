import React from 'react'
import css from "../css/group-classes.module.css";
import bottomImg from '../../assets/Classes assets/bottomImg.jpg'
import mainSecImg from '../../assets/Classes assets/mainSecImg.jpg'
import onlineModule from '../../assets/Classes assets/onlineModuleImg.jpeg'
import sideImg1 from '../../assets/Classes assets/sideImg1.jpeg'

const PrivateClass = () => {
  return (
    <>
<section className={css["trainerTop"]}>
      <div><h1>Offline / Online Private Yoga Classes</h1></div>
    </section>
    <main>
      <div className={css["mainOut1"]}>
        <p>
          “My Yoga time is my ALONE TIME and it better be so!!”<br />
          <br />
          Oh yes! we hear you. Looking for some Private Yoga Lessons And why
          should you?
        </p>
        <ul>
          <li>Tailor made to suit my needs</li>
          <li>Goal specific Yoga Practice</li>
          <li>My Yoga Practice with a trainer only for Me</li>
        </ul>
      </div>
      <div className={css["mainOut2"]}>
        <div><img src={mainSecImg} alt="" /></div>
      </div>
    </main>

    {/* <!-- Private className section --> */}
    <section className={css["privateSec"]}>
      <h2>Three Roads Diverged In Private className Sessions</h2>
      <h2>Private Yoga Classes At Studio/Home</h2>
      <p>
        We offer hour-long private Vinyasa Krama Yoga classes at the Studio. A
        trainer will be assigned for your private className who will guide you in
        person during your practice. The sessions will be designed in a way to
        ensure progress from your current state towards a specific goal. Classes
        will include:
      </p>
    </section>

    {/* <!-- side Section1 --> */}
    <section className={css["sideSec1"]}>
      <div className={css["sideSec1OuterDiv"]}>
        <img src={sideImg1} alt="" />
      </div>
      <div className={css["sideSec1OuterDiv"]}>
        <h3>What Can You Expect In The Module?</h3>
        <ul>
          <li>Asana</li>
          <li>Pranayama</li>
          <li>and Mindfulness/Meditation practices</li>
        </ul>
      </div>
    </section>

    {/* <!-- Online module Section --> */}
    <div className={css["onlineModule"]}>
      <h3>Private Classes Online Modules</h3>
      <p>
        Private className Online Module for Yoga is designed to provide personalized
        instruction in the practice of yoga & also to be flexible and
        accessible, allowing you to work at your own pace.
      </p>
    </div>

    {/* <!-- side Section2 --> */}
    <section className={css["sideSec2"]}>
      <div className={css["sideSec2OuterDiv"]}>
        <h3>What Can You Expect In The Module?</h3>
        <ul>
          <li>Asana</li>
          <li>Pranayama</li>
          <li>and Mindfulness/Meditation practices</li>
        </ul>
      </div>
      <div className={css["sideSec2OuterDiv"]}>
        <img src={onlineModule} alt="" />
      </div>
    </section>

    {/* <!-- Bottom Secction --> */}
    <section className={css["bottomSec"]}>
      <div className={css["bottomSecOuterDiv"]}>
        <img src={bottomImg} alt="" />
      </div>
      <div className={css["bottomSecOuterDiv"]}>
        <h3>Private Classes</h3>
        <p>
          Yoga for complete beginners and all levels that meets your <br />
          fitness and health requirements!
        </p>
        <b>Get Personal Yoga Instructor from AYS</b>
      </div>
    </section>
    </>
  )
}

export default PrivateClass