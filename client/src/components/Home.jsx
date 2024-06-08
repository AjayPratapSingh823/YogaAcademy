import React from "react";
import css from "../css/home.module.css"
import crImg1 from "../../assets/Home assets/carouselImg1.jpg"
import crImg2 from "../../assets/Home assets/carouselImg2.jpg"
import crImg3 from "../../assets/Home assets/carouselImg3.jpg"
import cImg1 from "../../assets/Home assets/clientImg1.png"
import cImg2 from "../../assets/Home assets/clientImg2.png"
import eImg1 from "../../assets/Home assets/expertImg1.png"
import eImg2 from "../../assets/Home assets/expertImg2.png"
import eImg3 from "../../assets/Home assets/expertImg3.png"
import eImg4 from "../../assets/Home assets/expertImg4.png"
import fImg1 from "../../assets/Home assets/factImg1.png"
import fImg2 from "../../assets/Home assets/factImg2.png"
import fImg3 from "../../assets/Home assets/factImg3.png"
import fImg4 from "../../assets/Home assets/factImg4.png"
import lImg1 from "../../assets/Home assets/lapingImg1.png"
import lImg2 from "../../assets/Home assets/lapingImg2.png"
import lImg3 from "../../assets/Home assets/lapingImg3.png"
import lImg4 from "../../assets/Home assets/lapingImg4.png"
import pImg1 from "../../assets/Home assets/portpolioImg1.png"
import pImg2 from "../../assets/Home assets/portpolioImg2.png"
import pImg3 from "../../assets/Home assets/portpolioImg3.png"
import pImg4 from "../../assets/Home assets/portpolioImg4.png"
import pImg5 from "../../assets/Home assets/portpolioImg5.jpg"
import sImg1 from "../../assets/Home assets/sideImg1.png"
import sImg2 from "../../assets/Home assets/sideImg2.png"
import sImg3 from "../../assets/Home assets/sideImg3.png"
import sImg4 from "../../assets/Home assets/sideImg4.png"
import topMainImg from "../../assets/Home assets/topMainImg.png"
import yogaLeftImg from "../../assets/Home assets/yogaLeftImg.png"

const Home = () => {

  
  return (
    <div>
      {/* First Section */}
      <section className={css["mainSec"]}>
        <div className={css["outerDiv"]}>
          <div className={css["innerDiv1"]}>
            <img src={topMainImg} alt="" />
          </div>
          <div className={css["innerDiv2"]}>
            <b>WELCOME TO FOSIAL</b>
            <h1>
              Yoga Is The <br /> Best Journey <br /> To Self
            </h1>
            <p>
              Maecenas vitae mauris rutrum, semper elit vel, tempus lacus.
              <br /> Donec id hendrerit nibh dapibus ante et commodo suscipit.
            </p>
            <div>
              <button className={css["btn1"]}>DISCOVER NOW</button>
              <a href="">
                <i className="fas fa-play"></i>Watch video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
    <section className={css["lapingSection"]}>
        <div className={css["lapingDiv"]}>
            <div><img src={lImg1} alt=""/></div>
            <div>
                <h2>Power Vinyasa</h2>
                <p>Integer venenatis tellu nullam vehicula magna id tellus accumsan blandit.</p>
            </div>
        </div>
        <div className={css["lapingDiv"]}>
            <div><img src={lImg2} alt=""/></div>
            <div>
                <h2>Flax Yoga</h2>
                <p>Integer venenatis tellu nullam vehicula magna id tellus accumsan blandit.</p>
            </div>
        </div>
        <div className={css["lapingDiv"]}>
            <div><img src={lImg3} alt=""/></div>
            <div>
                <h2>Relax Yoga</h2>
                <p>Integer venenatis tellu nullam vehicula magna id tellus accumsan blandit.</p>
            </div>
        </div>
        <div className={css["lapingDiv"]}>
            <div><img src={lImg4} alt=""/></div>
            <div>
                <h2>Fitness Yoga</h2>
                <p>Integer venenatis tellu nullam vehicula magna id tellus accumsan blandit.</p>
            </div>
        </div>
    </section>

    {/* Third Section */}
    <section className={css["thirdSection"]}>
      <div className={css["thirdOuter1"]}>
        <img src={yogaLeftImg} alt="" />
      </div>
      <div className={css["thirdOuter2"]}>
        <h2>
          Make Balance <br />
          Body & Mind
        </h2>
        <p>
          Curabitur sodales commodo orci nec fermentum. Nam lacus ex, efficitur
          a <br />
          fermentum a, auctor in ipsum. Pellentesque iaculis ultricies odio, in
          gravida <br />
          magna feugiat bibendum. Vestibulum vel tempor dolor. <br /><br />
          Sed sed sem diam. Cras quis mattis ex, ac maximus ante. Quisque sed
          suscipit <br />sem, id pretium diam. Maecenas consectetur eros eget
          libero scelerisque finibus.
        </p>
        <div className={css["thirdSecVideo"]}>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7e90gBu4pas?si=Ldj2J5LBtUspZOFK"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h3>
              Click On This Video To Check <br />
              How Work With Our Clients
            </h3>
          </div>
        </div>
      </div>
    </section>

    {/* forth Section */}
    <section className={css["forthSec"]}>
      <h2>Our Fun Facts</h2>
      <div className={css["forthOuterDiv"]}>
        <div className={css["forthInnerDiv"]}>
          <img src={fImg1} alt="" />
          <h4>8745</h4>
          <h5>Our Clients</h5>
        </div>
        <div className={css["forthInnerDiv"]}>
          <img src={fImg2} alt="" />
          <h4>7845</h4>
          <h5>Relax Yoga Done</h5>
        </div>
        <div className={css["forthInnerDiv"]}>
          <img src={fImg3} alt="" />
          <h4>6874</h4>
          <h5>Happy Clients</h5>
        </div>
        <div className={css["forthInnerDiv"]}>
          <img src={fImg4} alt="" />
          <h4>5987</h4>
          <h5>Cup Of Coffee</h5>
        </div>
      </div>
    </section>

    {/* carousel section */}
    <section className={css["fifthSec"]}>
      <h4 className={css["carouselHeading"]}>Our Best Classes</h4>
      <div id="container">
        <div id="slider-container">
          <div id="slider">
            <div className={css["slide"]}>
              <div><img src={crImg1} alt="" /></div>
              <div>
                <h5>
                  Progressive Power <br />
                  Flow Yoga
                </h5>
                <p>
                  Teger eu venenatis tellus. Nullam vehicula magna id tellus
                  accumsan blandit. Vivamus vehicula vel lorem vel dignissim.
                </p>
              </div>
            </div>
            <div className={css["slide"]}>
              <div><img src={crImg2} alt="" /></div>
              <div>
                <h5>
                  Mind Balance & Relax <br />
                  Flow Yoga
                </h5>
                <p>
                  Teger eu venenatis tellus. Nullam vehicula magna id tellus
                  accumsan blandit. Vivamus vehicula vel lorem vel dignissim.
                </p>
              </div>
            </div>
            <div className={css["slide"]}>
              <div><img src={crImg3} alt="" /></div>
              <div>
                <h5>
                  Natural Beauty Relax <br />
                  Flow Yoga
                </h5>
                <p>
                  Teger eu venenatis tellus. Nullam vehicula magna id tellus
                  accumsan blandit. Vivamus vehicula vel lorem vel dignissim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Portfolio section */}
    <section className={css["portFolioSec"]}>
      <h2>Our Portfolio</h2>
      <div className={css["portfolioImgs"]}>
        <div className={css["PortfolioOuter"]}>
          <img src={pImg1} alt="" />
        </div>
        <div className={css["PortfolioOuter"]}>
          <div><img src={pImg2} alt="" /></div>
          <div><img src={pImg3} alt="" /></div>
        </div>
        <div className={css["PortfolioOuter"]}>
          <img src={pImg4} alt="" />
        </div>
      </div>
    </section>

    {/* Plans Section */}
    <div style={{textAlign: "center", backgroundColor: "#f6f8fc"}} >
      <h3 style={{fontSize: "3.5rem", padding: "30px 0"}}>Choose Your Plan</h3>
    </div>
    <section className={css["plans"]}>
      <div className={css["planBox"]}>
        <div className={css["planPricing"]}>
          <h3>Basic Plan</h3>
          <b><i className="fa-solid fa-dollar-sign"></i>19.99</b>
          <p>Per Month</p>
        </div>
        <div className={css["planFeatures"]}>
          <div>
            <p>60-day chat history</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Data security</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>100 GB cloud storage</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Best className design</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>24/7 Support</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <button>CHOOSE PLANE</button>
        </div>
      </div>
      <div className={css["planBox"]}>
        <div className={css["planPricing"]}>
          <h3>Standard Plan</h3>
          <b><i className="fa-solid fa-dollar-sign"></i>29.99</b>
          <p>Per Month</p>
        </div>
        <div className={css["planFeatures"]}>
          <div>
            <p>60-day chat history</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Data security</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>100 GB cloud storage</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Best className design</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>24/7 Support</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <button>CHOOSE PLANE</button>
        </div>
      </div>
      <div className={css["planBox"]}>
        <div className={css["planPricing"]}>
          <h3>Premium Plan</h3>
          <b><i className="fa-solid fa-dollar-sign"></i>39.99</b>
          <p>Per Month</p>
        </div>
        <div className={css["planFeatures"]}>
          <div>
            <p>60-day chat history</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Data security</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>100 GB cloud storage</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Best className design</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <p>24/7 Support</p>
            <i className="fa-solid fa-check"></i>
          </div>
          <button>CHOOSE PLANE</button>
        </div>
      </div>
    </section>

    {/* Experts Section */}
    <div style={{textAlign: "center"}}>
      <h3 style={{fontSize: "3.5rem", padding: "30px 0"}}>Our Expert Team</h3>
    </div>
    <section className={css["experts"]}>
      <div className={css["expertOuter"]}>
        <div className={css["expertInner"]}>
          <img src={eImg1} alt="" />
        </div>
        <div className={css["expertInner"]}>
          <h4>Bableo Dablo</h4>
          <p>Yoga Teacher</p>
        </div>
      </div>
      <div className={css["expertOuter"]}>
        <div className={css["expertInner"]}>
          <img src={eImg2} alt="" />
        </div>
        <div className={css["expertInner"]}>
          <h4>Dawon Crisen</h4>
          <p>Yoga Teacher</p>
        </div>
      </div>
      <div className={css["expertOuter"]}>
        <div className={css["expertInner"]}>
          <img src={eImg3} alt="" />
        </div>
        <div className={css["expertInner"]}>
          <h4>David Suarez</h4>
          <p>Yoga Teacher</p>
        </div>
      </div>
      <div className={css["expertOuter"]}>
        <div className={css["expertInner"]}>
          <img src={eImg4} alt="" />
        </div>
        <div className={css["expertInner"]}>
          <h4>Gerard Peano</h4>
          <p>Yoga Teacher</p>
        </div>
      </div>
    </section>

    {/* Clients Section */}
    <div style={{textAlign: "center", backgroundColor: "#f6f8fc"}}>
      <h3 style={{fontSize: "3.5rem", padding: "30px 0; margin: 0"}}>
        What Our Clients Says
      </h3>
    </div>
    <section className={css["client"]}>
      <div className={css["clientDiv"]}>
        <div className={css["clientInfo"]}>
          <div className={css["clientImg"]}>
            <img src={cImg1} alt="" />
          </div>
          <div className={css["clientData"]}>
            <h3>Margie Dosa</h3>
            <p>Web Developer</p>
          </div>
        </div>
        <div className={css["clientFeedback"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cumque
            commodi vitae expedita vel repudiandae delectus dicta ad quas
            mollitia alias, impedit enim dignissimos quia accusantium corrupti?
            Nisi, animi laborum.
          </p>
        </div>
      </div>
      <div className={css["clientDiv"]}>
        <div className={css["clientInfo"]}>
          <div className={css["clientImg"]}>
            <img src={cImg2} alt="" />
          </div>
          <div className={css["clientData"]}>
            <h3>Margie Dosa</h3>
            <p>Web Developer</p>
          </div>
        </div>
        <div className={css["clientFeedback"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cumque
            commodi vitae expedita vel repudiandae delectus dicta ad quas
            mollitia alias, impedit enim dignissimos quia accusantium corrupti?
            Nisi, animi laborum.
          </p>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Home;