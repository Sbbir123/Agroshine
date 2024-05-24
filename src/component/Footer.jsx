import React from 'react';
import brand from '../images/resources/brand-logo1-1.png';
import brand1 from '../images/resources/brand-logo1-2.png';
import brand2 from '../images/resources/brand-logo1-3.png';
import brand3 from '../images/resources/brand-logo1-4.png';
import log from '../images/logo-light.png';
import gallery from '../images/resources/footer-gallery1-1.jpg';
import gallery2 from '../images/resources/footer-gallery1-2.jpg';
import gallery3 from '../images/resources/footer-gallery1-3.jpg';
import gallery4 from '../images/resources/footer-gallery1-4.jpg';
import gallery5 from '../images/resources/footer-gallery1-5.jpg';
import gallery6 from '../images/resources/footer-gallery1-6.jpg';
import footer from '../images/resources/footer-post1-1.jpg';
import footer1 from '../images/resources/footer-post1-2.jpg';
import logoi from '../images/logo-light.png';
function Footer() {
  return (
    <>


        <section className="companies-one">
            <div className="container">
                <div className="companies-one__sctwrap wow fadeInUp" data-wow-delay="100ms">
                    <div className="sec-title">


                        <h2 className="sec-title__title" style={{padding:"70px"}}>We collaborate with 20k+ leading <br/> farming companies</h2>
                    </div>
                </div>

                <div className="companies-one__carousel grdeen-owl__carousel grdeen-owl__carousel--with-shadow grdeen-owl__carousel--basic-nav owl-carousel" data-owl-options='{
			"items": 1,
			"margin": 0,
			"loop": true,
			"smartSpeed": 700,
			"nav": false,
			"navText": [""],
			"dots": true,
			"autoplay": false,
			"responsive": {
				"0": {
					"items": 1
				},
				"768": {
					"items": 2
				},
				"992": {
					"items": 3
				},
				"1367": {
					"items": 4
				}
			}
		}'>
                    <div className="item">
                        <div className="companies-one__image">
                            <div className="companies-one__inner-img">
                                <a href="#"><img src={brand} alt="grdeen"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="companies-one__image">
                            <div className="companies-one__inner-img">
                                <a href="#"><img src={brand1} alt="grdeen"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="companies-one__image">
                            <div className="companies-one__inner-img">
                                <a href="#"><img src={brand2} alt="grdeen"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="companies-one__image">
                            <div className="companies-one__inner-img">
                                <a href="#"><img src={brand3} alt="grdeen"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="great-together">
            <div className="container">
                <div className="great-together__wrapper">
                    <div className="great-together__bg" style={{backgroundImage: `url("../images/backgrounds/companies-bg1-1.jpg")`}}></div>
                    <div className="great-together__overlay"></div>
                    <div className="great-together__content text-center">
                        <h3 className="great-together__title">Let's make something great together</h3>
                        <p className="great-together__text">Tell us about your garden, and get a price with consultation</p>
                        <a href="prices.html" className="grdeen-btn great-together__btn">
                            <span>GET Our Price</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        <footer className="main-footer">
            <div className="main-footer__bg" style={{backgroundImage: `url("../images/backgrounds/footer-bg1-1.jpg")`}}></div>
            <div className="main-footer__overlay"></div>
            <div className="main-footer__top">
                <div className="container">
                    <div className="row">
                        <div className="footer-widget__col footer-widget__col__col1">
                            <div className="footer-widget footer-widget--about">
                                <a href="index.html" className="footer-widget__logo">
                                    <img src={log} width="155" alt="Agrofa HTML Template"/>
                                </a>
                                <p className="footer-widget__experience-text">Over 10 years of experience we’ll ensure you get the best guidance.</p>
                                <div className="footer-widget__newsletterwrap">
                                    <h6 className="footer-widget__title footer-widget__title--newsletter">Newsletter</h6>
                                    <form action="#" data-url="MAILCHIMP_FORM_URL" className="footer-widget__newsletter mc-form">
                                        <div className="footer-widget__mail-address">
                                            <input type="email" name="email" placeholder="Email Address"/>
                                        </div>
                                        <button type="submit" className="form-submit-btn">Submit</button>
                                    </form>
                                    <div className="mc-form__response"></div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-widget__col  footer-widget__col__col2">
                            <div className="footer-widget footer-widget--links">
                                <h6 className="footer-widget__title">Links</h6>
                                <ul className="list-unstyled footer-widget__links">
                                    <li><a href="checkout.html">Cookie Policy</a></li>
                                    <li><a href="products-right.html">Shop</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-widget__col  footer-widget__col__col3">
                            <div className="footer-widget footer-widget--gallery">
                                <h6 className="footer-widget__title">Gallery</h6>
                                <div className="footer-widget__gallerywrap d-flex flex-wrap">
                                    <div className="footer-widget__gallerywrap__img">
                                        <img src={gallery} alt="grdeen"/>
                                    </div>
                                    <div className="footer-widget__gallerywrap__img">
                                        <img src={gallery2} alt="grdeen"/>
                                    </div>
                                    <div className="footer-widget__gallerywrap__img">
                                        <img src={gallery3} alt="grdeen"/>
                                    </div>
                                    <div className="footer-widget__gallerywrap__img">
                                        <img src={gallery4} alt="grdeen"/>
                                    </div>
                                    <div className="footer-widget__gallerywrap__img">
                                        <img src={gallery5} alt="grdeen"/>
                                    </div>
                                    <div className="footer-widget__gallerywrap__img">
                                        <img src={gallery6} alt="grdeen"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-widget__col  footer-widget__col__col4">
                            <div className="footer-widget footer-widget--blog">
                                <h5 className="footer-widget__title">Popular Post</h5>

                                <div className="footer-widget__post-wrap">
                                    <div className="footer-widget__post-col">
                                        <div className="footer-widget__post-img">
                                            <img src={footer} alt="grdeen"/>
                                        </div>
                                        <div className="footer-widget__post-info">
                                            <span className="footer-widget__post-date"><i className="far fa-calendar"></i>
                                                <span> 02 Sep 2023</span>
                                            </span>
                                            <h6 className="footer-widget__post-heading"><a href="blog.html">Vegetable crops that do not need pollinators</a></h6>
                                        </div>
                                    </div>

                                    <div className="footer-widget__post-col">
                                        <div className="footer-widget__post-img">
                                            <img src={footer1} alt="grdeen"/>
                                        </div>
                                        <div className="footer-widget__post-info">
                                            <span className="footer-widget__post-date"><i className="far fa-calendar"></i>
                                                <span> 05 Sep 2023</span>
                                            </span>
                                            <h6 className="footer-widget__post-heading"><a href="blog.html">Grow your own pumpkins even in small spaces</a></h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-footer__bottom">
                <div className="container">
                    <div className="main-footer__bottom__inner">
                        <p className="main-footer__copyright"> &copy; <span className="dynamic-year"></span> Agroshine All Rights Reserved</p>
                        <div className="main-footer__social-row">
                            <p className="main-footer__social-row-text">Social</p>
                            <ul className="main-footer__social-list">
                                <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
                                <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

            <div className="logo-box">
                <a href="index.html" aria-label="logo image"><img src={logoi} width="155" alt="" /></a>
            </div>
            <div className="mobile-nav__container"></div>
            <ul className="mobile-nav__contact list-unstyled">
                <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:needhelp@grdeen.com">needhelp@grdeen.com</a>
                </li>
                <li>
                    <i className="fa fa-phone-alt"></i>
                    <a href="tel:666-888-0000">666 888 0000</a>
                </li>
            </ul>
            <div className="mobile-nav__social">
                <a href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                    <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com/">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                    <span className="sr-only">Twitter</span>
                </a>
                <a href="https://linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                    <span className="sr-only">Linkedin</span>
                </a>
                <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                    <span className="sr-only">Instagram</span>
                </a>
            </div>
        </div>
    </div>

    <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        {/* <!-- /.search-popup__overlay --> */}
        <div className="search-popup__content">
            <form role="search" method="get" className="search-popup__form" action="#">
                <input type="text" id="search" placeholder="Search Here..." />
                <button type="submit" aria-label="search submit" className="grdeen-btn">
                    <span><i className="icon-search"></i></span>
                </button>
            </form>
        </div>
        {/* <!-- /.search-popup__content --> */}
    </div>
    </>
  )
}

export default Footer;
