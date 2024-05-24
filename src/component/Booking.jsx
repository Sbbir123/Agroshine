import React from 'react';
import fade from '../images/shapes/booking-shape1-1.png';
import fade1 from '../images/resources/book-image1-1.jpg';

const Booking = () => {
  return (
    <>
              <section className="free-booking-one">
            <div className="free-booking-one__bg" style={{backgroundImage: `url('../images/shapes/booking-bg1-1.jpg')`}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="free-booking-one__content">
                            <div className="free-booking-one__sctwrap wow fadeInUp" data-wow-delay="100ms">
                                <div className="sec-title">
                                    <div className="sec-title__img">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="12.000000pt" height="10.000000pt" viewBox="0 0 12.000000 10.000000" preserveAspectRatio="xMidYMid meet">
                                            <g transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)" stroke="none">
                                                <path d="M58 84 c12 -8 22 -24 22 -34 0 -10 -10 -26 -22 -34 l-22 -16 27 0
			c17 0 32 9 43 25 15 23 15 27 0 50 -11 16 -26 25 -43 25 l-27 0 22 -16z" />
                                            </g>
                                        </svg>
                                    </div>

                                    <span className="sec-title__tagline">Free Book Now</span>

                                    <h2 className="sec-title__title">Book a FREE <br/> professional gardening <br/> consultation!</h2>
                            </div>
                            </div>
                            <form className="free-booking-one__form contact-form-validated form-one wow fadeInUp" data-wow-duration="1500ms" action="https://bracketweb.com/grdeen-html/inc/sendemail.php">
                                <div className="form-one__group">
                                    <div className="form-one__control">
                                        <input type="text" name="name" placeholder="Your Name"/>
                                    </div>
                                    <div className="form-one__control">
                                        <input type="email" name="email" placeholder="Your Email"/>
                                    </div>
                                    <div className="form-one__control">
                                        <input type="text" name="tel" placeholder="Your Phone"/>
                                    </div>
                                    <div className="form-one__control">
                                        <div className="form-one__control__select">
                                            <label className="sr-only" for="language-select">Choose Services</label>
                                            <select className="selectpicker" id="language-select">
                                                <option value="Choose Services">Choose Services</option>
                                                <option value="Choose Services 01">Choose Services 01</option>
                                                <option value="Choose Services 02">Choose Services 02</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-one__control form-one__control--full d-none">
                                        <input className="grdeen-datepicker" type="text" name="date" placeholder="Select date"/>
                                        <i className="fa fa-calendar-alt form-one__control__icon"></i>
                                    </div>


                                    <div className="form-one__control form-one__control--full">
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <button type="submit" className="grdeen-btn free-booking-one__submit"><span>Submit Message</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="grdeen-stretch-element-inside-column">
                            <div className="free-booking-one__image">
                                <div className="free-booking-one__image__shape">
                                    <img src={fade} alt="grdeen"/>
                                </div>
                                <div className="free-booking-one__image__maskingimg wow fadeInLeft" data-wow-delay="300ms">
                                    <img src={fade1} alt="grdeen"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Booking;
