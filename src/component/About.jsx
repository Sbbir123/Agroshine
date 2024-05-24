import React from 'react';
import bgimg from '../images/resources/about-image1-1.jpg';
import bgimg2 from '../images/resources/about-image1-2.jpg';

const About = () => {
  return (
    <>
      
      <section className="about-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-one__image wow fadeInRight" data-wow-delay="100ms">
                            <div className="about-one__shapetop"></div>
                            <img className="about-one__bigimage" src={bgimg} alt="grdeen"/>
                            <div className="about-one__smimage">
                                <img src={bgimg2} alt="grdeen"/>
                            </div>

                            <div className="about-one__shapebottom"></div>
                        </div>
                    </div>

                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="about-one__content">
                            <div className="sec-title">

                                <div className="sec-title__img">
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="12.000000pt" height="10.000000pt" viewBox="0 0 12.000000 10.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)" stroke="none">
                                            <path d="M58 84 c12 -8 22 -24 22 -34 0 -10 -10 -26 -22 -34 l-22 -16 27 0
			c17 0 32 9 43 25 15 23 15 27 0 50 -11 16 -26 25 -43 25 l-27 0 22 -16z" />
                                        </g>
                                    </svg>
                                </div>


                                <span className="sec-title__tagline">Introduce Our Company</span>

                                <h2 className="sec-title__title">Brings your dream Farm to life</h2>
                            </div>
                            <p className="about-one__content__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                            </p>
                            <div className="about-one__content__qualitwrap">
                                <h4 className="about-one__content__qualitwrap__title">Quality <br/> gardening services</h4>
                                <p className="about-one__content__text qualit-text">Lorem ipsum dolor sit amet ultrices <br/> gravida risus commodo viverra</p>
                                <div className="about-one__content__qualitwrap__pricesbox text-center">
                                    <strong className="about-one__content__qualitwrap__price">70K</strong>
                                    <span className="about-one__content__qualitwrap__text">Satisfied customers</span>
                                </div>
                            </div>
                            <p className="about-one__content__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul className="list-unstyled about-one__content__list">
                                <li><i className="icon-check-solid"></i>Lorem ipsum or lipsum as it is sometimes known</li>
                                <li><i className="icon-check-solid"></i>Professional gardening service for all your home</li>
                                <li><i className="icon-check-solid"></i>There are many variations of passages of Lorem Ipsum available</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About;
