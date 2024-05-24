import React from 'react';
import bgimg3 from '../images/resources/benefits-img1-1.jpg';
import bgimg4 from '../images/resources/benefits-img1-2.jpg';

const Quality = () => {
  return (
    <>
              <section className="our-benefits-one">
            <div className="container-fluid">
                <div className="row">
                    <div className="our-benefits-one__left wow fadeInRight" data-wow-delay="100ms">
                        <div className="our-benefits-one__content">
                            <div className="our-benefits-one__content__sctwap">
                                <div className="sec-title">

                                    <div className="sec-title__img">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="12.000000pt" height="10.000000pt" viewBox="0 0 12.000000 10.000000" preserveAspectRatio="xMidYMid meet">
                                            <g transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)" stroke="none">
                                                <path d="M58 84 c12 -8 22 -24 22 -34 0 -10 -10 -26 -22 -34 l-22 -16 27 0
			c17 0 32 9 43 25 15 23 15 27 0 50 -11 16 -26 25 -43 25 l-27 0 22 -16z" />
                                            </g>
                                        </svg>
                                    </div>


                                    <span className="sec-title__tagline">Our BENEFITS</span>

                                    <h2 className="sec-title__title">Why is mine different from others?</h2>
                                </div>
                            </div>

                            <p className="our-benefits-one__content__text">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra </p>

                            <div className="our-benefits-one__content__qualitwrap d-flex flex-wrap">
                                <div className="our-benefits-one__content__qualitwrap__col d-flex flex-wrap">
                                    <div className="our-benefits-one__content__qualitwrap__icon">
                                        <i className="icon-gardening-1"></i>
                                    </div>
                                    <h4 className="our-benefits-one__content__qualitwrap__title">Quality <br/> services</h4>
                                </div>

                                <div className="our-benefits-one__content__qualitwrap__col d-flex flex-wrap">
                                    <div className="our-benefits-one__content__qualitwrap__icon our-benefits-one__content__qualitwrap__icon--groupicon">
                                        <i className="icon-group"></i>
                                    </div>
                                    <h4 className="our-benefits-one__content__qualitwrap__title">Skilled
                                        <br/> Team
                                    </h4>
                                </div>
                            </div>

                            <p className="our-benefits-one__content__text">Quis ipsum suspendisse ultrices gravida nor again is there anyone who loves or pursues or desires to obtain pain </p>

                            <div className="our-benefits-one__content__listwrap d-flex justify-content-between">
                                <ul className="list-unstyled our-benefits-one__content__list">
                                    <li><i className="icon-check-solid"></i>Expert team members</li>
                                    <li><i className="icon-check-solid"></i>Afordable quality services</li>
                                    <li><i className="icon-check-solid"></i>Professional Gardening Services </li>
                                </ul>
                                <a href="about.html" className="grdeen-btn our-benefits-one__btn">
                                    <span>Find out more</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="our-benefits-one__right">
                        <div className="our-benefits-one__image wow fadeInLeft" data-wow-delay="100ms">
                            <div className="our-benefits-one__shapetop"></div>
                            <img className="our-benefits-one__bigimage" src={bgimg3} alt="grdeen"/>
                            <div className="our-benefits-one__smimage">
                                <img src={bgimg4} alt="grdeen"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Quality
