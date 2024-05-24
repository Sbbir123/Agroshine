import React from 'react';
import man1 from '../images/resources/testimonial-man1-1.jpg';
import man2 from '../images/resources/testimonial-man1-2.jpg';
import man3 from '../images/resources/testimonial-man1-3.jpg';
import man5 from '../images/resources/testimonial-man1-4.jpg';

const Testimonal = () => {
  return (
    <>
            <section className="testimonials-one">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sec-title">

                            <div className="sec-title__img">
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="12.000000pt" height="10.000000pt" viewBox="0 0 12.000000 10.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)" stroke="none">
                                        <path d="M58 84 c12 -8 22 -24 22 -34 0 -10 -10 -26 -22 -34 l-22 -16 27 0
			c17 0 32 9 43 25 15 23 15 27 0 50 -11 16 -26 25 -43 25 l-27 0 22 -16z" />
                                    </g>
                                </svg>
                            </div>


                            <span className="sec-title__tagline">OUR TESTIMONIALS</span>

                            <h2 className="sec-title__title">Hear from our happy <br/> customers review</h2>
                        </div>
                    </div>
                </div>

                <div className="testimonials-one__carousel grdeen-owl__carousel grdeen-owl__carousel--with-shadow grdeen-owl__carousel--basic-nav owl-carousel" data-owl-options='{
			"items": 1,
			"margin": 0,
			"loop": false,
			"smartSpeed": 700,
			"nav": false,
			"navText": "",
			"dots": true,
			"autoplay": false,
			"responsive": {
				"0": {
					"items": 1
				},
				"767": {
					"items": 2,
					"margin": 30
				}
			}
		}'>
                    <div className="item">
                        <div className="testimonials-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='00ms'>
                            <div className="testimonials-card__inner">
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                        <img src={man1} alt="Alen Martin"/>
                                    </div>
                                    <div className="testimonials-card__top__left">
                                        <div className="testimonials-card__rating">
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                        </div>

                                        <h4 className="testimonials-card__name">
                                            Amit Yadav
                                        </h4>
                                        <p className="testimonials-card__designation">Founder</p>
                                    </div>
                                </div>
                                <div className="testimonials-card__quote"><i className="icon-quote"></i></div>
                                <div className="testimonials-card__contentwrap">
                                    <div className="testimonials-card__masking"></div>
                                    <div className="testimonials-card__content">
                                        As a result of the garden build service provided by dimo and his company, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua laboris nisi ut aliquip ex ea commodo
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonials-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='100ms'>
                            <div className="testimonials-card__inner">
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                        <img src={man2} alt="Paul J. Florez"/>
                                    </div>
                                    <div className="testimonials-card__top__left">
                                        <div className="testimonials-card__rating">
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                        </div>

                                        <h4 className="testimonials-card__name">
                                            Paul
                                        </h4>
                                        <p className="testimonials-card__designation">Founder</p>
                                    </div>
                                </div>
                                <div className="testimonials-card__quote"><i className="icon-quote"></i></div>
                                <div className="testimonials-card__contentwrap">
                                    <div className="testimonials-card__masking"></div>
                                    <div className="testimonials-card__content">
                                        As a result of the garden build service provided by dimo and his company, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua laboris nisi ut aliquip ex ea commodo
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonials-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
                            <div className="testimonials-card__inner">
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                        <img src={man3} alt="Laverne C. McArthur"/>
                                    </div>
                                    <div className="testimonials-card__top__left">
                                        <div className="testimonials-card__rating">
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                        </div>

                                        <h4 className="testimonials-card__name">
                                            Laverne C. McArthur
                                        </h4>
                                        <p className="testimonials-card__designation">Founder</p>
                                    </div>
                                </div>
                                <div className="testimonials-card__quote"><i className="icon-quote"></i></div>
                                <div className="testimonials-card__contentwrap">
                                    <div className="testimonials-card__masking"></div>
                                    <div className="testimonials-card__content">
                                        As a result of the garden build service provided by dimo and his company, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua laboris nisi ut aliquip ex ea commodo
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                            <div className="testimonials-card__inner">
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                        <img src={man5} alt="Larry M. Casillas"/>
                                    </div>
                                    <div className="testimonials-card__top__left">
                                        <div className="testimonials-card__rating">
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                            <span className="testimonials-card__rating__start"><i className="fa fa-star"></i></span>
                                        </div>

                                        <h4 className="testimonials-card__name">
                                            Larry M. Casillas
                                        </h4>
                                        <p className="testimonials-card__designation">Founder</p>
                                    </div>
                                </div>
                                <div className="testimonials-card__quote"><i className="icon-quote"></i></div>
                                <div className="testimonials-card__contentwrap">
                                    <div className="testimonials-card__masking"></div>
                                    <div className="testimonials-card__content">
                                        As a result of the garden build service provided by dimo and his company, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua laboris nisi ut aliquip ex ea commodo
                                    </div>
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

export default Testimonal
