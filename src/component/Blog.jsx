import React from 'react';
import blog from '../images/blog/blog-post1-1.jpg';
import blog2 from '../images/blog/blog-post1-2.jpg';
import blog3 from '../images/blog/blog-post1-3.jpg';
import blog4 from '../images/blog/blog-post1-1.jpg';
import blog5 from '../images/blog/blog-post1-2.jpg';
import blog6 from '../images/blog/blog-post1-3.jpg';

const Blog = () => {
  return (
    <>
            <section className="blog-one blog-one--home">
            <div className="container">
                <div className="blog-one__sctwrap wow fadeInUp" data-wow-delay="100ms">
                    <div className="sec-title">

                        <div className="sec-title__img">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="12.000000pt" height="10.000000pt" viewBox="0 0 12.000000 10.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)" stroke="none">
                                    <path d="M58 84 c12 -8 22 -24 22 -34 0 -10 -10 -26 -22 -34 l-22 -16 27 0
			c17 0 32 9 43 25 15 23 15 27 0 50 -11 16 -26 25 -43 25 l-27 0 22 -16z" />
                                </g>
                            </svg>
                        </div>


                        <span className="sec-title__tagline">Our Blog post</span>

                        <h2 className="sec-title__title">Read our latest articles <br/> post from blog</h2>
                    </div>
                </div>
                <div className="blog-one__carousel grdeen-owl__carousel grdeen-owl__carousel--with-shadow grdeen-owl__carousel--basic-nav owl-carousel owl-theme" data-owl-options='{
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
                        <div className="blog-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='00ms'>
                            <div className="blog-card__image">
                                <div className="blog-card__image__inner">
                                    <img src={blog} alt="In our gardens  plants for the shade garden"/>
                                    <a href="blog-details.html" className="blog-card__image__link"><span className="sr-only">In our gardens plants for the shade garden</span></a>
                                </div>
                                <div className="blog-card__date"><span className="blog-card__date__num">03</span> <span className="blog-card__date__month">Sep</span></div>
                            </div>
                            <div className="blog-card__content">
                                <ul className="list-unstyled blog-card__meta">
                                    <li>
                                        <a href="blog-grid-right.html">
                                            <span><i className="fas fa-user"></i></span>
                                            By Admin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">
                                            <span><i className="icon-comment"></i></span>
                                            10 Comments
                                        </a>
                                    </li>
                                </ul>
                                <h4 className="blog-card__title"><a href="blog-details.html">In our gardens plants for the shade garden</a></h4>
                                <a href="blog-details.html" className="blog-card__link">
                                    <span>Read more</span>
                                    <span className="blog-card__link__rightarrow"><i className="icon-left-arrow2"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='100ms'>
                            <div className="blog-card__image">
                                <div className="blog-card__image__inner">
                                    <img src={blog2} alt="Choosing the right variety of potato to grow at home"/>
                                    <a href="blog-details.html" className="blog-card__image__link"><span className="sr-only">Choosing the right variety of potato to grow at home</span></a>
                                </div>
                                <div className="blog-card__date"><span className="blog-card__date__num">03</span> <span className="blog-card__date__month">Sep</span></div>
                            </div>
                            <div className="blog-card__content">
                                <ul className="list-unstyled blog-card__meta">
                                    <li>
                                        <a href="blog-grid-right.html">
                                            <span><i className="fas fa-user"></i></span>
                                            By Admin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">
                                            <span><i className="icon-comment"></i></span>
                                            10 Comments
                                        </a>
                                    </li>
                                </ul>
                                <h4 className="blog-card__title"><a href="blog-details.html">Choosing the right variety of potato to grow at home</a></h4>
                                <a href="blog-details.html" className="blog-card__link">
                                    <span>Read more</span>
                                    <span className="blog-card__link__rightarrow"><i className="icon-left-arrow2"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
                            <div className="blog-card__image">
                                <div className="blog-card__image__inner">
                                    <img src={blog3} alt="The right way to grow the three sisters of the field"/>
                                    <a href="blog-details.html" className="blog-card__image__link"><span className="sr-only">The right way to grow the three sisters of the field</span></a>
                                </div>
                                <div className="blog-card__date"><span className="blog-card__date__num">03</span> <span className="blog-card__date__month">Sep</span></div>
                            </div>
                            <div className="blog-card__content">
                                <ul className="list-unstyled blog-card__meta">
                                    <li>
                                        <a href="blog-grid-right.html">
                                            <span><i className="fas fa-user"></i></span>
                                            By Admin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">
                                            <span><i className="icon-comment"></i></span>
                                            10 Comments
                                        </a>
                                    </li>
                                </ul>
                                <h4 className="blog-card__title"><a href="blog-details.html">The right way to grow the three sisters of the field</a></h4>
                                <a href="blog-details.html" className="blog-card__link">
                                    <span>Read more</span>
                                    <span className="blog-card__link__rightarrow"><i className="icon-left-arrow2"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                            <div className="blog-card__image">
                                <div className="blog-card__image__inner">
                                    <img src={blog4} alt="In our gardens  plants for the shade garden"/>
                                    <a href="blog-details.html" className="blog-card__image__link"><span className="sr-only">In our gardens plants for the shade garden</span></a>
                                </div>
                                <div className="blog-card__date"><span className="blog-card__date__num">03</span> <span className="blog-card__date__month">Sep</span></div>
                            </div>
                            <div className="blog-card__content">
                                <ul className="list-unstyled blog-card__meta">
                                    <li>
                                        <a href="blog-grid-right.html">
                                            <span><i className="fas fa-user"></i></span>
                                            By Admin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">
                                            <span><i className="icon-comment"></i></span>
                                            10 Comments
                                        </a>
                                    </li>
                                </ul>
                                <h4 className="blog-card__title"><a href="blog-details.html">In our gardens plants for the shade garden</a></h4>
                                <a href="blog-details.html" className="blog-card__link">
                                    <span>Read more</span>
                                    <span className="blog-card__link__rightarrow"><i className="icon-left-arrow2"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='400ms'>
                            <div className="blog-card__image">
                                <div className="blog-card__image__inner">
                                    <img src={blog5} alt="Choosing the right variety of potato to grow at home"/>
                                    <a href="blog-details.html" className="blog-card__image__link"><span className="sr-only">Choosing the right variety of potato to grow at home</span></a>
                                </div>
                                <div className="blog-card__date"><span className="blog-card__date__num">03</span> <span className="blog-card__date__month">Sep</span></div>
                            </div>
                            <div className="blog-card__content">
                                <ul className="list-unstyled blog-card__meta">
                                    <li>
                                        <a href="blog-grid-right.html">
                                            <span><i className="fas fa-user"></i></span>
                                            By Admin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">
                                            <span><i className="icon-comment"></i></span>
                                            10 Comments
                                        </a>
                                    </li>
                                </ul>
                                <h4 className="blog-card__title"><a href="blog-details.html">Choosing the right variety of potato to grow at home</a></h4>
                                <a href="blog-details.html" className="blog-card__link">
                                    <span>Read more</span>
                                    <span className="blog-card__link__rightarrow"><i className="icon-left-arrow2"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='500ms'>
                            <div className="blog-card__image">
                                <div className="blog-card__image__inner">
                                    <img src={blog6} alt="The right way to grow the three sisters of the field"/>
                                    <a href="blog-details.html" className="blog-card__image__link"><span className="sr-only">The right way to grow the three sisters of the field</span></a>
                                </div>
                                <div className="blog-card__date"><span className="blog-card__date__num">03</span> <span className="blog-card__date__month">Sep</span></div>
                            </div>
                            <div className="blog-card__content">
                                <ul className="list-unstyled blog-card__meta">
                                    <li>
                                        <a href="blog-grid-right.html">
                                            <span><i className="fas fa-user"></i></span>
                                            By Admin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">
                                            <span><i className="icon-comment"></i></span>
                                            10 Comments
                                        </a>
                                    </li>
                                </ul>
                                <h4 className="blog-card__title"><a href="blog-details.html">The right way to grow the three sisters of the field</a></h4>
                                <a href="blog-details.html" className="blog-card__link">
                                    <span>Read more</span>
                                    <span className="blog-card__link__rightarrow"><i className="icon-left-arrow2"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default Blog
