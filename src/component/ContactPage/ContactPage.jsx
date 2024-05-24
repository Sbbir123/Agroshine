import React from 'react';
import images1 from '../../images/shapes/contact-bg-1.png';
import images2 from '../../images/backgrounds/contact-bg-2.jpg';
import Footer from '../Footer';


const ContactPage = () => {
    const myStyle = { backgroundImage: `url(${images1})` }
    const myStyle1 = { backgroundImage: `url(${images2})` }

  return (
    <>
        <section className="page-header">
            <div className="page-header__bg"></div>
            <div className="page-header__shape wow fadeInUp" data-wow-delay="200ms"></div>
            <div className="page-header__overlay"></div>
            <div className="container">
                <h2 className="page-header__title">Contact</h2>
                <ul className="grdeen-breadcrumb list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li><span>Contact</span></li>
                </ul>
            </div>
        </section>

        <section className="contact-one">
            <div className="container">
                <h3 className="contact-one__title">
                    Do you have questions Speak<br/>?with them through message
                </h3>
                <p className="contact-one__text">You can also reach out to us by phone or email are many variations</p>
                <div className="contact-one__info-wrapper" style={myStyle}>
                    <div className="row gutter-y-30">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-one__info">
                                <div className="contact-one__info__icon">
                                    <i className="icon-location"></i>
                                </div>
                                <h4 className="contact-one__info__title">Our office</h4>
                                <p className="contact-one__info__text">New Delhi India</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-one__info">
                                <div className="contact-one__info__icon">
                                    <i className="icon-telephone-call"></i>
                                </div>
                                <h4 className="contact-one__info__title">Make a call</h4>
                                <p className="contact-one__info__text">
                                    <a href="tel:6260900760">6260900760(91+)</a>
                                    <a href="tel:6260900760">6260900760(91+)</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-one__info">
                                <div className="contact-one__info__icon">
                                    <i className="icon-help"></i>
                                </div>
                                <h4 className="contact-one__info__title">Support</h4>
                                <p className="contact-one__info__text">
                                    <a href="mailto:Info@gmail.com">InfoNawal@gmail.com</a>
                                    <a href="mailto:Grdeen@gmail.com">info@NawalSustainbility.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container contact-one__container">
                <div className="contact-one__wrapper" style={myStyle1}>
                    <form className="form-one contact-one__form contact-form-validated " action="https://bracketweb.com/grdeen-html/inc/sendemail.php">
                        <div className="form-one__group">
                        <div className="form-one__control">
                                <input type="email" name="email" placeholder="Email Address"style={{textAlign:"left"}}/>
                            </div>
                            <div className="form-one__control ">
                                <input type="text" name="name" placeholder="Your Name" style={{textAlign:"left"}}/>
                            </div>
                          
                            <div className="form-one__control">
                                <input type="text" name="tel" placeholder="Phone"style={{textAlign:"left"}}/>
                            </div>
                            <div className="form-one__control">
                            <div className="form-one__control ">
                                <input type="text" name="address" placeholder="Your Address"style={{textAlign:"left"}}/>
                            </div>
                            </div>
                            <div className="form-one__control form-one__control--full">
                                <textarea name="message" placeholder="Your Message here"style={{textAlign:"left"}}></textarea>
                            </div>
                            <div className="form-one__control form-one__control--full text-center">
                                <button type="submit" className="grdeen-btn"><span>Send a message</span></button>
                            </div>
                        </div>
                    </form>
                    <div className="result"></div>
                </div>
            </div>
        </section>
        <section className="contact-map">
            <div className="google-map google-map__contact">
                <iframe title="template google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" className="map__contact" allowfullscreen></iframe>
            </div>
        </section>
    <Footer/>
    </>
  )
}

export default ContactPage;
