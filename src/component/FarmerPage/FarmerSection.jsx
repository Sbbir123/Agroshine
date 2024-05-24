import React from 'react';
import Footer from '../Footer';
import project from '../../images/resources/project1-1.jpg';
import project2 from '../../images/resources/project1-2.jpg';
import project3 from '../../images/resources/project1-3.jpg';
import project4 from '../../images/resources/project1-4.jpg';
import project5 from '../../images/resources/project1-5.jpg';
import project6 from '../../images/resources/project1-6.jpg';
import high from '../../images/backgrounds/to.jpg';
import about1 from '../../images/about/about1.jpg';
import about2 from '../../images/about/about2.jpg';
import about3 from '../../images/about/about3.jpg';
import member from '../../images/icon/member.png';
import card1 from '../../images/card/card1.png';
import card2 from '../../images/card/card2.png';



const FarmerSection = () => {
  return (

    <>
    <div className="img"> <img src={high}></img></div>


    <section class="about-sec section-padding " style={{background: "radial-gradient(circle, rgba(63,94,251,0) 0%, rgb(83 252 70 / 18%) 100%)"}}>
        <div class="container">
            <div class="row">
                <div class="col-md-12 align-self-center">
                    <div class="about-content">
                        <p class="wow fadeInLeft justify" style={{visibility: "visible", animationName: "fadeInLeft"}}>
                            <b> Agroshine is committed to the growth and self-reliance of the farmers! We are constantly
                                working to
                                break archaic agricultural practices, make agriculture quality-focused & more profitable
                                for the
                                farmers, and enhance the soil fertility for long-term sustainable agriculture
                                output.</b> Agroshine -
                            Kisan ki Dukan was created to help farmers derive better outcomes from their farming
                            efforts. Better
                            quality and nutrient-rich agriculture produce, better farming practices and better profits
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about-sec" style={{marginTop:"44px"}}>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title-item section-title-v2-item section-padding" style={{paddingBottom: "0px", paddingTop: "20px"}}>
                        <h2 class="section-title one"> <span class="red">Why Should Farmers choose </span> Agroshine -
                            Kisan ki Dukan
                            over other Retailers</h2>
                    </div>
                </div>
                <div class="col-md-12 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms" style={{visibility: "visible", animationDuration: "1.5s", animationDelay: "400ms", animationName: "fadeInUp"}}>
                    <section class="service-sec section-padding">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="500ms" style={{visibility: "visible", animationDuration: "1.5s", animationDelay: "500ms",animationName: "fadeInLeft"}}>
                                    <div class="single-service">
                                        <div class="service-img">
                                            <img src={about1} alt=""/>

                                        </div>
                                        <p class="justify">
                                            Greenday is committed to helping farmers enhance their farming income and
                                            provide premium quality
                                            nutrition - rich food for the nation! To begin with, Greenday store owners
                                            are agriculture
                                            graduates who understand farming way better than conventional retail
                                            business owners.
                                            Additionally, they are well-trained by Greenday to provide unbiased and
                                            accurate advice to the
                                            farmers.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-4 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="600ms" style={{visibility: "visible", animationDuration: "1.5s", animationDelay: "600ms", animationName: "fadeInRight"}}>
                                    <div class="single-service">
                                        <div class="service-img">
                                            <img src={about2} alt=""/>

                                        </div>
                                        <p class="justify">
                                            Greenday is constantly investing in R&amp;D to produce high-quality,
                                            biofortified seeds for
                                            nutrient enriched output and chemical-free fertilizers and pesticides to
                                            protect the crops. Good
                                            quality agri-input is backed by soil testing and scientific agriculture
                                            practices to grow better
                                            quality agri-output and increase net-farming income. Greenday agriculture
                                            experts are available
                                            24x7 to help farmers with all their queries.
                                        </p>

                                    </div>
                                </div>
                                <div class="col-md-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms" style={{visibility: "visible", animationDuration: "1.5s", animationDelay: "400ms", animatioName: "fadeInUp"}}>
                                    <div class="single-service">
                                        <div class="service-img">
                                            <img src={about3} alt=""/>
                                        </div>
                                        <p class="justify">
                                            To operate an effective closed-loop mechanism, Greenday buy-backs the
                                            premium agriculture output
                                            through the Greenday stores and pays the premium price to farmers’ basis the
                                            quality of the
                                            produce. This is done to ensure that farmers reap the maximum benefit for
                                            the value-added crops
                                            they have grown and they do not have to hassle through the task of finding
                                            the right buyers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    </section>

    <section class="xs-get-in-touch" style={{paddingBottom: "0px", paddingTop: "20px"}}>
            <div class="container">
                <div class="col-md-12">
                    <div class="section-title-item section-title-v2-item">
                        <h3 class="section-title" style={{textAlign: "center"}}><strong style={{color: "#552505",fontSize: "20px"}}>Agroshine
                                Kisan Power Club <span class="red" style={{color:"#79bf37"}}> Membership </span></strong> </h3>

                        <div class="row rows" style={{background: "radial-gradient(circle, rgba(63, 94, 251, 0) 0%, rgba(83, 252, 70, 0.18) 100%)"}}>
                            <div class="col-md-8 align-self-center">
                                <p class="justify" style={{paddingTop: "0px",textAlign:"center",lineHeight:"1.42857143rem",fontSize:"15px",fontFamily: "system-ui"}}>Agroshine Kisan Power Club membership is a
                                    unique offering that provides
                                    multiple benefits to the farmers at a nominal fee, empowering them with value-added
                                    services that help
                                    them derive the maximum benefits from their agriculture practices</p>
                            </div>
                              <div class="col-md-4">
                                <img src={member}/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>

    <section class="single-service-inner-v2-sec service-inner-sec">
            <div class="container">
                <div class="main-single-service-v2">
                    <div class="row key-benifits-item xs-mb-100">

                    <div class="col-md-5 offset-md-2 align-self-center wow fadeInLeft"
                            style={{visibility: "visible", animationName: "fadeInLeft",textAlign:"left"}}>
                            <div class="key-benifits-img membership">
                                <img src={card2}/>
                            </div>
                            <h3 class="section-title card-heading"> <strong>Kisan Power Club <span class="red">Gold
                                        Card</span></strong> </h3>
                            <div class="key-benifits-content">
                                <ul>
                                    <li>-/Yearly membership fees: <b class="red">Rs. 500</b>
                                    <i class="fa fa-angle-double-right" aria-hidden="true"style={{color: "#80c244"}}></i>
                                   </li>
                                  
                                    <li>One soiltesting free per year  
                                        <i class="fa fa-angle-double-right" aria-hidden="true"style={{color: "#80c244"}}></i>
                                    </li>

                                    <li>Guaranteed cash back every month  
                                        <i class="fa fa-angle-double-right" aria-hidden="true"style={{color: "#80c244"}}></i>
                                    </li>

                                    <li>Discounton all purchases
                                        <i class="fa fa-angle-double-right" aria-hidden="true"style={{color: "#80c244"}}></i>
                                    </li>

                                    <li>Free product delivery
                                        <i class="fa fa-angle-double-right" aria-hidden="true"style={{color: "#80c244"}}></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-5  align-self-center wow fadeInLeft"
                            style={{visibility: "visible", animationName: "fadeInLeft",textAlign:"left"}}>
                            <div class="key-benifits-img">
                                <img src={card1}/>
                            </div>
                            <h3 class="section-title card-heading"> <strong>Kisan Power Club <span class="red">Platinum
                                        Card</span></strong> </h3>
                            <div class="key-benifits-content">
                                <ul>
                                    <li>-/Yearlymembership fees <b class="red"> Rs. 1000</b>
                                        <i class="fa fa-angle-double-right" aria-hidden="true" style={{color: "#80c244"}}></i>
                                    </li>
                                    <li>Freeaccidental and health insurance
                                        <i class="fa fa-angle-double-right" aria-hidden="true"style={{color: "#80c244"}}></i>
                                    </li>
                                    <li>Two soiltesting free per year <i class="fa fa-angle-double-right" aria-hidden="true" style={{color: "#80c244"}}></i>
                                    </li>
                                    <li>Guaranteed cash back every month
                                    <i class="fa fa-angle-double-right" aria-hidden="true"style={{color: "#80c244"}}></i>
                                    </li>
                                    <li>Discount on all purchases <i class="fa fa-angle-double-right" aria-hidden="true" style={{color: "#80c244"}}></i>
                                    </li>
                                    <li>Freeproduct delivery  <i class="fa fa-angle-double-right" aria-hidden="true" style={{color: "#80c244"}}></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 col-md-12  col-sm-12">
                    <div class="load-more-btn-1">
                        <button type="button" class="btn btn-success"><span class="red"><i class="fa fa-hand-o-right"
                                    aria-hidden="true" style={{color: "#fff"}}></i></span><a
                                href="https://www.onlinegreenday.com/pages/kpc-kissan-power-club" target="_blank"
                                style={{color: "#fff"}}>&nbsp; Know more about Kisan Power Club here </a></button>
                    </div>
                </div>
            </div>
        </section>

{/* 
    <section className="project-one project-one--page">
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-lg-4 col-md-6">
                        <div className="project-one__item wow fadeInUp" data-wow-delay="00ms">
                            <div className="project-one__item__image">
                                <img src={project} alt="project"/>
                            </div>
                            <div className="project-one__item__info">
                                <div className="project-one__item__bg">
                                    <strong className="project-one__item__tagtext">Farming</strong>
                                    <h5 className="project-one__item__heading"><a href="project-details.html">Farming maintenance</a></h5>
                                    <a href="project-details.html" className="project-one__item__right-arrow">
                                        <i className="icon-right-arrow2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="project-one__item wow fadeInUp" data-wow-delay="100ms">
                            <div className="project-one__item__image">
                                <img src={project2} alt="project"/>
                            </div>
                            <div className="project-one__item__info">
                                <div className="project-one__item__bg">
                                    <strong className="project-one__item__tagtext">Farming</strong>
                                    <h5 className="project-one__item__heading"><a href="project-details.html">Lawn care & mowing</a></h5>
                                    <a href="project-details.html" className="project-one__item__right-arrow">
                                        <i className="icon-right-arrow2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="project-one__item wow fadeInUp" data-wow-delay="200ms">
                            <div className="project-one__item__image">
                                <img src={project3} alt="project"/>
                            </div>
                            <div className="project-one__item__info">
                                <div className="project-one__item__bg">
                                    <strong className="project-one__item__tagtext">Farming</strong>
                                    <h5 className="project-one__item__heading"><a href="project-details.html">Farming design</a></h5>
                                    <a href="project-details.html" className="project-one__item__right-arrow">
                                        <i className="icon-right-arrow2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="project-one__item wow fadeInUp" data-wow-delay="300ms">
                            <div className="project-one__item__image">
                                <img src={project4} alt="project"/>
                            </div>
                            <div className="project-one__item__info">
                                <div className="project-one__item__bg">
                                    <strong className="project-one__item__tagtext">Farming</strong>
                                    <h5 className="project-one__item__heading"><a href="project-details.html">Farming landscaping</a></h5>
                                    <a href="project-details.html" className="project-one__item__right-arrow">
                                        <i className="icon-right-arrow2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="project-one__item wow fadeInUp" data-wow-delay="400ms">
                            <div className="project-one__item__image">
                                <img src={project5} alt="project"/>
                            </div>
                            <div className="project-one__item__info">
                                <div className="project-one__item__bg">
                                    <strong className="project-one__item__tagtext">Farming</strong>
                                    <h5 className="project-one__item__heading"><a href="project-details.html">Turf or grass laying</a></h5>
                                    <a href="project-details.html" className="project-one__item__right-arrow">
                                        <i className="icon-right-arrow2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="project-one__item wow fadeInUp" data-wow-delay="500ms">
                            <div className="project-one__item__image">
                                <img src={project6} alt="project"/>
                            </div>
                            <div className="project-one__item__info">
                                <div className="project-one__item__bg">
                                    <strong className="project-one__item__tagtext">Farming</strong>
                                    <h5 className="project-one__item__heading"><a href="project-details.html">Tree felling</a></h5>
                                    <a href="project-details.html" className="project-one__item__right-arrow">
                                        <i className="icon-right-arrow2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section> */}

        <Footer/>
    </>
  )
}

export default FarmerSection;
