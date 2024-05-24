import React from "react";
import slide from "../images/shapes/slider-shape1-1-rtl.png";
import slide2 from "../images/shapes/slider-shape1-1-rtl.png";
import sliderImg from "../images/shapes/slider-shape1-2.png";
import slider2 from "../images/shapes/slider-shape1-2.png";
import slider3 from "../images/shapes/slider-shape1-2.png";
import sliderBg from "../images/backgrounds/slider-1-1.jpg";
import sliderBg1 from "../images/backgrounds/slider-1-2.jpg";
import sliderBg2 from "../images/backgrounds/slider-1-3.jpg";
import rtl from "../images/shapes/slider-shape1-1-rtl.png";
// import Header from "./Header";
import Project from "./Project";
import Quality from "./Quality";
import About from "./About";
import Work from "./Work";
import Testimonal from "./Testimonal";
import Blog from "./Blog";
import Booking from "./Booking";
import Footer from "./Footer";

const Home = () => {
  const myStyle = { backgroundImage: `url(${sliderBg})` };
  const myStyle1 = { backgroundImage: `url(${sliderBg1})` };
  const myStyle2 = { backgroundImage: `url(${sliderBg2})` };

  return (
    <>


    <div className="page-wrapper">
    <section class="main-slider-two">
            <div class="main-slider-two__carousel grdeen-owl__carousel owl-carousel" data-owl-options='{
		"loop": true,
		"animateOut": "fadeOut",
		"animateIn": "fadeIn",
		"items": 1,
		"autoplay": true,
		"autoplayTimeout": 7000,
		"smartSpeed": 1000,
		"nav": true,
        "navText": ["<span class=\"icon-left-arrow11\"></span>","<span class=\"icon-right-arrow1\"></span>"],
		"dots": false,
		"margin": 0
		}'>
                <div class="item">
                    <div class="main-slider-two__item">
                        <div class="main-slider-two__shape"></div>
                        <div class="main-slider-two__bg" style={myStyle}>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                        </div>
                        <div class="main-slider-two__overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div class="main-slider-two__content">
                                        <h5 class="main-slider-two__sub-title"><img src={sliderImg} alt="grdeen" /> Welcome To Agoshine</h5>
                                      
                                        <h2 class="main-slider-two__title">Be proud of your <br/> Farming design</h2>
                                        <h6 class="main-slider-two__subtext">Get your outdoor space looking its best with professional gardening <br/> .and landscaping services</h6>
                                        <div class="main-slider-two__btn">
                                            <a href="services.html" class="grdeen-btn grdeen-btn--base"><span>Our Services</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="main-slider-two__item">
                        <div class="main-slider-two__shape">
                         </div>
                        <div class="main-slider-two__bg"style={myStyle1}>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                        </div>
                        <div class="main-slider-two__overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div class="main-slider-two__content">
                                        <h5 class="main-slider-two__sub-title">
                                          <img src={sliderImg} alt="grdeen" /> Welcome To Agroshine</h5>
                                      
                                        <h2 class="main-slider-two__title">Be proud of your <br/> landscape design</h2>
                                        <h6 class="main-slider-two__subtext">Get your outdoor space looking its best with professional gardening <br/> .and landscaping services</h6>
                                        <div class="main-slider-two__btn">
                                            <a href="services.html" class="grdeen-btn grdeen-btn--base"><span>Our Services</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="main-slider-two__item">
                        <div class="main-slider-two__shape"></div>
                        <div class="main-slider-two__bg"style={myStyle2}>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                            <div class="main-slider-two__bg__color"></div>
                        </div>
                        <div class="main-slider-two__overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div class="main-slider-two__content">
                                        <h5 class="main-slider-two__sub-title"><img src={sliderImg} alt="grdeen" /> Welcome To Agroshine</h5>
                                      
                                        <h2 class="main-slider-two__title">Be proud of your <br/> Farming design</h2>
                                        <h6 class="main-slider-two__subtext">Get your outdoor space looking its best with professional gardening <br/> .and landscaping services</h6>
                                        <div class="main-slider-two__btn">
                                            <a href="services.html" class="grdeen-btn grdeen-btn--base"><span>Our Services</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className="main-slider-one">
          <div
            className="main-slider-one__carousel grdeen-owl__carousel owl-carousel"
            data-owl-options='{
		"loop": true,
		"animateOut": "fadeOut",
		"animateIn": "fadeIn",
		"items": 1,
		"autoplay": true,
		"autoplayTimeout": 7000,
		"smartSpeed": 1000,
		"nav": true,
        "navText": ["<span className=\"icon-left-arrow11\"></span>","<span className=\"icon-right-arrow1"></span>"],
		"dots": false,
		"margin": 0
		}'
          >
            <div className="item">
              <div className="main-slider-one__item">
                <div className="main-slider-one__shape">
                  <img src={slide} alt="grdeen" />
                </div>
                <div className="main-slider-one__bg" style={myStyle}></div>
                <div className="main-slider-one__overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="main-slider-one__content">
                        <h5 className="main-slider-one__sub-title">
                          <img src={sliderImg} alt="grdeen" /> WELCOME TO
                          Farming
                        </h5>
                        <h2 className="main-slider-one__title">
                          Farming <br />
                          & landscape <br />
                          services
                        </h2>
                        <div className="main-slider-one__btn">
                          <a
                            href="services.html"
                            className="grdeen-btn grdeen-btn--base"
                          >
                            <span>Our Services</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="main-slider-one__item">
                <div className="main-slider-one__shape">
                  <img src={slide2} />
                </div>
                <div className="main-slider-one__bg" style={myStyle1}></div>
                <div className="main-slider-one__overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="main-slider-one__content">
                        <h5 className="main-slider-one__sub-title">
                          <img src={slider2} alt="grdeen" /> WELCOME TO Farming
                        </h5>
                        <h2 className="main-slider-one__title">
                          Farming <br />
                          & landscape <br />
                          services
                        </h2>
                        <div className="main-slider-one__btn">
                          <a
                            href="services.html"
                            className="grdeen-btn grdeen-btn--base"
                          >
                            <span>Our Services</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="main-slider-one__item">
                <div className="main-slider-one__shape">
                  <img src={rtl} alt="grdeen" />
                </div>
                <div className="main-slider-one__bg" style={myStyle2}></div>
                <div className="main-slider-one__overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="main-slider-one__content">
                        <h5 className="main-slider-one__sub-title">
                          <img src={slider3} alt="grdeen" /> WELCOME TO Grdeen
                        </h5>
                        <h2 className="main-slider-one__title">
                          Gardening <br />
                          & landscape <br />
                          services
                        </h2>
                        <div className="main-slider-one__btn">
                          <a
                            href="services.html"
                            className="grdeen-btn grdeen-btn--base"
                          >
                            <span>Our Services</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="feature-one">
          <div className="container-fluid">
            <div className="row gutter-y-30 feature-one__row">
              <div
                className="col-xxl-3 col-xl-6 col-md-6 wow fadeInUp"
                data-wow-delay="00ms"
              >
                <div className="feature-one__item">
                  <div className="feature-one__item__content">
                    <h4 className="feature-one__item__title">
                      Quality services
                    </h4>
                    <p className="feature-one__item__text">
                      Lorem ipsum dolor sit amet ultrices gravida risus commodo
                      viverra
                    </p>
                  </div>

                  <div className="feature-one__item__iconwrap">
                    <div className="feature-one__item__icon">
                      <i className="icon-guaranteed"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xxl-3 col-xl-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="feature-one__item">
                  <div className="feature-one__item__content">
                    <h4 className="feature-one__item__title">
                      Professional team
                    </h4>
                    <p className="feature-one__item__text">
                      Lorem ipsum dolor sit amet ultrices gravida risus commodo
                      viverra
                    </p>
                  </div>

                  <div className="feature-one__item__iconwrap">
                    <div className="feature-one__item__icon">
                      <i className="icon-gardening-1"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xxl-3 col-xl-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="feature-one__item">
                  <div className="feature-one__item__content">
                    <h4 className="feature-one__item__title">
                      Best Product Award
                    </h4>
                    <p className="feature-one__item__text">
                      Lorem ipsum dolor sit amet ultrices gravida risus commodo
                      viverra
                    </p>
                  </div>

                  <div className="feature-one__item__iconwrap">
                    <div className="feature-one__item__icon">
                      <i className="icon-trophy"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xxl-3 col-xl-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="feature-one__item">
                  <div className="feature-one__item__content">
                    <h4 className="feature-one__item__title">
                      Quality products
                    </h4>
                    <p className="feature-one__item__text">
                      Lorem ipsum dolor sit amet ultrices gravida risus commodo
                      viverra
                    </p>
                  </div>

                  <div className="feature-one__item__iconwrap">
                    <div className="feature-one__item__icon">
                      <i className="icon-plant-a-tree"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> 
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__text">back top</span>
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner"></span>
        </span>
      </a>
      <Project />
      <Quality />
      <About />
      <Work />
      <Testimonal />
      <Blog />
      <Booking />
      <Footer />
    </>
  );
};

export default Home;
