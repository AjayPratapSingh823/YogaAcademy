import React from "react";
import css from "../css/home.module.css"

const Home = () => {

  
  return (
    <div>
      {/* First Section */}
      <section class={css["mainSec"]}>
        <div class={css["outerDiv"]}>
          <div class={css["innerDiv1"]}>
            <img src="/images/topMainImg.png" alt="" />
          </div>
          <div class={css["innerDiv2"]}>
            <b>WELCOME TO FOSIAL</b>
            <h1>
              Yoga Is The <br /> Best Journey <br /> To Self
            </h1>
            <p>
              Maecenas vitae mauris rutrum, semper elit vel, tempus lacus.
              <br /> Donec id hendrerit nibh dapibus ante et commodo suscipit.
            </p>
            <div>
              <button class={css["btn1"]}>DISCOVER NOW</button>
              <a href="">
                <i class={css["fas fa-play"]}></i>Watch video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
    <section class={css["lapingSection"]}>
        <div class={css["lapingDiv"]}>
            <div><img src="/images/lapingImg1.png" alt=""/></div>
            <div>
                <h2>Power Vinyasa</h2>
                <p>Integer venenatis tellu nullam vehicula magna id tellus accumsan blandit.</p>
            </div>
        </div>
        <div class={css["lapingDiv"]}>
            <div><img src="/images/lapingImg2.png" alt=""/></div>
            <div>
                <h2>Flax Yoga</h2>
                <p>Integer venenatis tellu nullam vehicula magna id tellus accumsan blandit.</p>
            </div>
        </div>
        <div class={css["lapingDiv"]}>
            <div><img src="/images/lapingImg3.png" alt=""/></div>
            <div>
                <h2>Relax Yoga</h2>
                <p>Integer venenatis tellu nullam vehicula magna id tellus accumsan blandit.</p>
            </div>
        </div>
        <div class={css["lapingDiv"]}>
            <div><img src="/images/lapingImg4.png" alt=""/></div>
            <div>
                <h2>Fitness Yoga</h2>
                <p>Integer venenatis tellu nullam vehicula magna id tellus accumsan blandit.</p>
            </div>
        </div>
    </section>

    {/* Third Section */}
    <section class={css["thirdSection"]}>
      <div class={css["thirdOuter1"]}>
        <img src="/images/yogaLeftImg.png" alt="" />
      </div>
      <div class={css["thirdOuter2"]}>
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
        <div class={css["thirdSecVideo"]}>
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
    <section class={css["forthSec"]}>
      <h2>Our Fun Facts</h2>
      <div class={css["forthOuterDiv"]}>
        <div class={css["forthInnerDiv"]}>
          <img src="/images/factImg1.png" alt="" />
          <h4>8745</h4>
          <h5>Our Clients</h5>
        </div>
        <div class={css["forthInnerDiv"]}>
          <img src="/images/factImg2.png" alt="" />
          <h4>7845</h4>
          <h5>Relax Yoga Done</h5>
        </div>
        <div class={css["forthInnerDiv"]}>
          <img src="/images/factImg3.png" alt="" />
          <h4>6874</h4>
          <h5>Happy Clients</h5>
        </div>
        <div class={css["forthInnerDiv"]}>
          <img src="/images/factImg4.png" alt="" />
          <h4>5987</h4>
          <h5>Cup Of Coffee</h5>
        </div>
      </div>
    </section>

    {/* carousel section */}
    <section class={css["fifthSec"]}>
      <h4 class={css["carouselHeading"]}>Our Best Classes</h4>
      <div id="container">
        <div id="slider-container">
          <span onclick="slideRight()" class={css["btn"]}></span>
          <div id="slider">
            <div class={css["slide"]}>
              <div><img src="/images/carouselImg1.jpg" alt="" /></div>
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
            <div class={css["slide"]}>
              <div><img src="/images/carouselImg2.jpg" alt="" /></div>
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
            <div class={css["slide"]}>
              <div><img src="/images/carouselImg3.jpg" alt="" /></div>
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
            <div class={css["slide"]}>
              <div><img src="/images/carouselImg1.jpg" alt="" /></div>
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
            <div class={css["slide"]}>
              <div><img src="/images/carouselImg2.jpg" alt="" /></div>
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
          </div>
          <span onclick="slideLeft()" class={css["btn"]}></span>
        </div>
      </div>
    </section>

    {/* Our Portfolio section */}
    <section class={css["portFolioSec"]}>
      <h2>Our Portfolio</h2>
      <div class={css["portfolioImgs"]}>
        <div class={css["PortfolioOuter"]}>
          <img src="/images/portpolioImg1.png" alt="" />
        </div>
        <div class={css["PortfolioOuter"]}>
          <div><img src="/images/portpolioImg2.png" alt="" /></div>
          <div><img src="/images/portpolioImg3.png" alt="" /></div>
        </div>
        <div class={css["PortfolioOuter"]}>
          <img src="/images/portpolioImg4.png" alt="" />
        </div>
      </div>
    </section>

    {/* Plans Section */}
    <div style={{textAlign: "center", backgroundColor: "#f6f8fc"}} >
      <h3 style={{fontSize: "3.5rem", padding: "30px 0"}}>Choose Your Plan</h3>
    </div>
    <section class={css["plans"]}>
      <div class={css["planBox"]}>
        <div class={css["planPricing"]}>
          <h3>Basic Plan</h3>
          <b><i class="fa-solid fa-dollar-sign"></i>19.99</b>
          <p>Per Month</p>
        </div>
        <div class={css["planFeatures"]}>
          <div>
            <p>60-day chat history</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Data security</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>100 GB cloud storage</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Best class design</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>24/7 Support</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <button>CHOOSE PLANE</button>
        </div>
      </div>
      <div class={css["planBox"]}>
        <div class={css["planPricing"]}>
          <h3>Standard Plan</h3>
          <b><i class="fa-solid fa-dollar-sign"></i>29.99</b>
          <p>Per Month</p>
        </div>
        <div class={css["planFeatures"]}>
          <div>
            <p>60-day chat history</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Data security</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>100 GB cloud storage</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Best class design</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>24/7 Support</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <button>CHOOSE PLANE</button>
        </div>
      </div>
      <div class={css["planBox"]}>
        <div class={css["planPricing"]}>
          <h3>Premium Plan</h3>
          <b><i class="fa-solid fa-dollar-sign"></i>39.99</b>
          <p>Per Month</p>
        </div>
        <div class={css["planFeatures"]}>
          <div>
            <p>60-day chat history</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Data security</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>100 GB cloud storage</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>Best class design</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <div>
            <p>24/7 Support</p>
            <i class="fa-solid fa-check"></i>
          </div>
          <button>CHOOSE PLANE</button>
        </div>
      </div>
    </section>

    {/* Experts Section */}
    <div style={{textAlign: "center"}}>
      <h3 style={{fontSize: "3.5rem", padding: "30px 0"}}>Our Expert Team</h3>
    </div>
    <section class={css["experts"]}>
      <div class={css["expertOuter"]}>
        <div class={css["expertInner"]}>
          <img src="/images/expertImg1.png" alt="" />
        </div>
        <div class={css["expertInner"]}>
          <h4>Bableo Dablo</h4>
          <p>Yoga Teacher</p>
        </div>
      </div>
      <div class={css["expertOuter"]}>
        <div class={css["expertInner"]}>
          <img src="/images/expertImg2.png" alt="" />
        </div>
        <div class={css["expertInner"]}>
          <h4>Dawon Crisen</h4>
          <p>Yoga Teacher</p>
        </div>
      </div>
      <div class={css["expertOuter"]}>
        <div class={css["expertInner"]}>
          <img src="/images/expertImg3.png" alt="" />
        </div>
        <div class={css["expertInner"]}>
          <h4>David Suarez</h4>
          <p>Yoga Teacher</p>
        </div>
      </div>
      <div class={css["expertOuter"]}>
        <div class={css["expertInner"]}>
          <img src="/images/expertImg4.png" alt="" />
        </div>
        <div class={css["expertInner"]}>
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
    <section class={css["client"]}>
      <div class={css["clientDiv"]}>
        <div class={css["clientInfo"]}>
          <div class={css["clientImg"]}>
            <img src="/images/clientImg1.png" alt="" />
          </div>
          <div class={css["clientData"]}>
            <h3>Margie Dosa</h3>
            <p>Web Developer</p>
          </div>
        </div>
        <div class={css["clientFeedback"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cumque
            commodi vitae expedita vel repudiandae delectus dicta ad quas
            mollitia alias, impedit enim dignissimos quia accusantium corrupti?
            Nisi, animi laborum.
          </p>
        </div>
      </div>
      <div class={css["clientDiv"]}>
        <div class={css["clientInfo"]}>
          <div class={css["clientImg"]}>
            <img src="/images/clientImg2.png" alt="" />
          </div>
          <div class={css["clientData"]}>
            <h3>Margie Dosa</h3>
            <p>Web Developer</p>
          </div>
        </div>
        <div class={css["clientFeedback"]}>
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