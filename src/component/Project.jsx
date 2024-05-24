import React from 'react'
import pr from "../images/resources/project1-1.jpg";
import pr2 from "../images/resources/project1-2.jpg";
import pr3 from "../images/resources/project1-3.jpg";


const Project = () => {
  return (
    <>
      
      <section className="project-one">
            <div className="project-one__bg" style={{backgroundImage:`url('assets/images/backgrounds/project-bg1-1.jpg')`}}></div>
            <div className="container">
                <div className="project-one__sctwrap text-center">
                    <div className="sec-title">

                        <div className="sec-title__img">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="12.000000pt" height="10.000000pt" viewBox="0 0 12.000000 10.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)" stroke="none">
                                    <path d="M58 84 c12 -8 22 -24 22 -34 0 -10 -10 -26 -22 -34 l-22 -16 27 0
			c17 0 32 9 43 25 15 23 15 27 0 50 -11 16 -26 25 -43 25 l-27 0 22 -16z" />
                                </g>
                            </svg>
                        </div>


                        <span className="sec-title__tagline">Our completed projects</span>

                        <h2 className="sec-title__title">View some of our best <br/> recent work</h2>
                    </div>
                </div>
                <div className="project-one__carousel grdeen-owl__carousel grdeen-owl__carousel--basic-nav owl-carousel owl-theme" data-owl-options='{
			"items": 1,
			"margin": 30,
			"loop": false,
			"smartSpeed": 700,
			"nav": false,
			"navText": "",
			"dots": false,
			"autoplay": false,
			"responsive": {
				"0": {
					"items": 1,
					"dots": true
				},
				"768": {
					"items": 2,
					"dots": false
				},
				"992": {
					"items": 3,
					"dots": false
				}
			}
			}'>
                    <div className="item">
                        <div className="project-one__item wow fadeInUp" data-wow-delay="00ms">
                            <div className="project-one__item__image">
                                <img src={pr} alt="project"/>
                            </div>
                            <div className="project-one__item__info">
                                <div className="project-one__item__bg">
                                    <strong className="project-one__item__tagtext">Gardening</strong>
                                    <h5 className="project-one__item__heading"><a href="project-details.html">Garden maintenance</a></h5>
                                    <a href="project-details.html" className="project-one__item__right-arrow">
                                        <i className="icon-right-arrow2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="project-one__item wow fadeInUp" data-wow-delay="100ms">
                            <div className="project-one__item__image">
                                <img src={pr2} alt="project"/>
                            </div>
                            <div className="project-one__item__info">
                                <div className="project-one__item__bg">
                                    <strong className="project-one__item__tagtext">Gardening</strong>
                                    <h5 className="project-one__item__heading"><a href="project-details.html">Lawn care & mowing</a></h5>
                                    <a href="project-details.html" className="project-one__item__right-arrow">
                                        <i className="icon-right-arrow2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="project-one__item wow fadeInUp" data-wow-delay="200ms">
                            <div className="project-one__item__image">
                                <img src={pr3} alt="project"/>
                            </div>
                            <div className="project-one__item__info">
                                <div className="project-one__item__bg">
                                    <strong className="project-one__item__tagtext">Gardening</strong>
                                    <h5 className="project-one__item__heading"><a href="project-details.html">Garden design</a></h5>
                                    <a href="project-details.html" className="project-one__item__right-arrow">
                                        <i className="icon-right-arrow2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-one__moreproject d-flex justify-content-between align-items-center wow fadeInUp" data-wow-delay="200ms">
                    <h5 className="project-one__moreproject__title">Check out our gardening portfolio </h5>
                    <a href="project.html" className="grdeen-btn project-one__moreproject__btn">
                        <span>View All Projects</span>
                    </a>
                </div>
            </div>
        </section>

    </>
  )
}

export default Project
