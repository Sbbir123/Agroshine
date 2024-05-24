import React from 'react';
import Footer from '../Footer';
import aboutimg from '../../images/resources/about-image2-1.jpg';
import aboutimg2 from '../../images/resources/about-image2-2.jpg';
import Imageone from '../../images/shapes/feature-bg-2-1.png';
import Imagetwo from '../../images/shapes/feature-bg-2-1.png';
import Imagethree from '../../images/shapes/feature-bg-2-1.png';
import Imagefour from '../../images/shapes/feature-bg-2-1.png';
import test1 from '../../images/shapes/funfact-icon2-1.png';
import test2 from '../../images/resources/testimonial-man1-1.jpg';
import test3 from '../../images/shapes/testimonial-shape2-1.png';
import test4 from '../../images/shapes/funfact-icon2-1.png';
import test5 from '../../images/resources/testimonial-man1-2.jpg';
import test6 from '../../images/shapes/testimonial-shape2-1.png';
import test7 from '../../images/shapes/funfact-icon2-1.png';
import test8 from '../../images/resources/testimonial-man1-3.jpg';
import test9 from '../../images/shapes/testimonial-shape2-1.png';
import test10 from '../../images/shapes/funfact-icon2-1.png';
import test11 from '../../images/resources/testimonial-man1-2.jpg';
import test12 from '../../images/shapes/testimonial-shape2-1.png';
import test13 from '../../images/shapes/funfact-icon2-1.png';
import test14 from '../../images/shapes/funfact-icon2-1.png';
import test15 from '../../images/shapes/testimonial-shape2-1.png';
import test16 from '../../images/shapes/funfact-icon2-1.png';
import test17 from '../../images/resources/testimonial-man1-2.jpg';
import test18 from '../../images/shapes/testimonial-shape2-1.png';
import test19 from '../../images/shapes/funfact-icon2-1.png';
import test20 from '../../images/resources/testimonial-man1-3.jpg';
import test21 from '../../images/shapes/testimonial-shape2-1.png';
import team1 from '../../images/team/team-img1-1.jpg';
import team2 from '../../images/team/team-img1-2.jpg';
import team3 from '../../images/team/team-img1-3.jpg';
import about1 from '../../images/about1.avif';

const AboutSection = () => {

	const myStyle3 = { backgroundImage: `url(${Imageone})` }
	const myStyle4 = { backgroundImage: `url(${Imagetwo})` }
	const myStyle5 = { backgroundImage: `url(${Imagethree})` }
	const myStyle6 = { backgroundImage: `url(${Imagefour})` }
	

  return (
    <>

	<img src={about1} alt="" style={{width:"100%",height:"35%"}}/>
{/* 
      <section className="page-header">
    <div className="page-header__bg"></div>
    <div className="page-header__shape wow fadeInUp" data-wow-delay="200ms"></div>
    <div className="page-header__overlay"></div>

    <div className="container">
        <h2 className="page-header__title">Know About Our Services</h2>
        <ul className="grdeen-breadcrumb list-unstyled">
            <li><a href="index.html">Home</a></li>
            <li><span>About</span></li>
        </ul>
    </div>
</section> */}

{/* <section className="about-one about-one--two about-one--two--about">
	<div className="container">
		<div className="row">
			<div className="col-lg-6">
				<div className="about-one__image wow fadeInLeft" data-wow-delay="100ms">
					<div className="about-one__shapetop"></div>
					<img className="about-one__bigimage" src={aboutimg} alt="grdeen"/>
					<div className="about-one__smimage">
						<img src={aboutimg2} alt="grdeen"/>
					</div>

					<div className="about-one__shapebottom"></div>
				</div>
			</div>

			<div className="col-lg-6 wow fadeInRight" data-wow-delay="100ms">
				<div className="about-one__content">
					<div className="about-one__content__sctwap">
						<div className="sec-title">
	
	<div className="sec-title__img">
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
		width="12.000000pt" height="10.000000pt" viewBox="0 0 12.000000 10.000000"
		preserveAspectRatio="xMidYMid meet">
		<g transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)" stroke="none">
			<path d="M58 84 c12 -8 22 -24 22 -34 0 -10 -10 -26 -22 -34 l-22 -16 27 0
			c17 0 32 9 43 25 15 23 15 27 0 50 -11 16 -26 25 -43 25 l-27 0 22 -16z"/>
		</g>
	</svg>
</div>
	
	
	<span className="sec-title__tagline">Introduce Our Company</span>
	
	<h2 className="sec-title__title">We offer expert farming services</h2>
</div>
					</div>
					<p className="about-one__content__text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
					</p>
					<div className="about-one__content__qualitwrap">
						<div className="about-one__content__qualitwrap__col">
							<div className="about-one__content__qualitwrap__icon">
								<i className="icon-high-quality"></i>
							</div>
							<h4 className="about-one__content__qualitwrap__title">Quality <br/> gardening services</h4>
						</div>
						<div className="about-one__content__qualitwrap__col mb-0">
							<div className="about-one__content__qualitwrap__icon">
								<i className="icon-plant"></i>
							</div>
							<h4 className="about-one__content__qualitwrap__title">We're experienced <br/> gardeners</h4>
						</div>
						<div className="about-one__content__qualitwrap__pricesbox text-center">
							<div className="about-one__content__qualitwrap__tpright">
								<i className="icon-pot"></i>
							</div>
							<div className="about-one__content__qualitwrap__btmleft">
								<i className="icon-pot"></i>
							</div>
							<strong className="about-one__content__qualitwrap__price">20+</strong>
							<span className="about-one__content__qualitwrap__text">Years Of Experience</span>
						</div>
					</div>
					<ul className="list-unstyled about-one__content__list">
						<li><i className="icon-check-solid"></i>Lorem ipsum or lipsum as it is sometimes known</li>
						<li><i className="icon-check-solid"></i>Professional gardening service for all your home</li>
						<li><i className="icon-check-solid"></i>There are many variations of passages of Lorem Ipsum available</li>
					</ul>
					<a href="about.html" className="grdeen-btn">
						<span>Find out more</span>
					</a>
                    
				</div>
			</div>
		</div>
	</div>
</section> */}
<section class="about-sec wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="400ms" style={{visibility: "visible", animationDuration: "1.5s", animationDelay: "400ms", animationName: "fadeInRight", paddingTop: "10px", background: "radial-gradient(circle, rgba(63, 94, 251, 0) 0%, rgba(83, 252, 70, 0.18) 100%)"}}>
        <div class="container">
            <div class="section-title-item section-title-v2-item">
                <h2 class="section-title one ac" style={{marginTop:"40px"}}><span class="red">Agroshine ‘Kisan ki Dukan’ is not only building a
                        business;</span> we have devoted ourselves to the cause of nutrition equality for all!</h2>
            </div>
        </div>
        <img src="https://cdn.shopify.com/s/files/1/0661/7740/1082/files/meal-2.png?v=1677583130" alt="Greenday ‘Kisan ki Dukan’"/>
    </section>

<section className="feature-one feature-one--two">
	<div className="container">
		<div className="row gutter-y-30 feature-one__row">
			<div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="00ms">
				<div className="feature-one__item">
					<div className="feature-one__item__bg" style={myStyle3}></div>
					<div className="feature-one__item__content">
						<h4 className="feature-one__item__title">Quality services</h4>
						<p className="feature-one__item__text">Lorem ipsum dolor sit amet ultrices gravida risus commodo viverra</p>
					</div>

					<div className="feature-one__item__iconwrap">
						<div className="feature-one__item__icon">
							<i className="icon-guaranteed"></i>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="100ms">
				<div className="feature-one__item">
					<div className="feature-one__item__bg" style={myStyle4}></div>
					<div className="feature-one__item__content">
						<h4 className="feature-one__item__title">Professional team</h4>
						<p className="feature-one__item__text">Lorem ipsum dolor sit amet ultrices gravida risus commodo viverra</p>
					</div>

					<div className="feature-one__item__iconwrap">
						<div className="feature-one__item__icon">
							<i className="icon-gardening-1"></i>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="200ms">
				<div className="feature-one__item">
					<div className="feature-one__item__bg" style={myStyle5}></div>
					<div className="feature-one__item__content">
						<h4 className="feature-one__item__title">Guaranteed results</h4>
						<p className="feature-one__item__text">Lorem ipsum dolor sit amet ultrices gravida risus commodo viverra</p>
					</div>

					<div className="feature-one__item__iconwrap">
						<div className="feature-one__item__icon">
							<i className="icon-guarantee"></i>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
				<div className="feature-one__item">
					<div className="feature-one__item__bg" style={myStyle6}></div>
					<div className="feature-one__item__content">
						<h4 className="feature-one__item__title">Happy customers</h4>
						<p className="feature-one__item__text">Lorem ipsum dolor sit amet ultrices gravida risus commodo viverra</p>
					</div>

					<div className="feature-one__item__iconwrap">
						<div className="feature-one__item__icon">
							<i className="icon-rating"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="testimonials-one testimonials-one--two">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="sec-title">
	
	<div class="sec-title__img">
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
		width="12.000000pt" height="10.000000pt" viewBox="0 0 12.000000 10.000000"
		preserveAspectRatio="xMidYMid meet">
		<g transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)" stroke="none">
			<path d="M58 84 c12 -8 22 -24 22 -34 0 -10 -10 -26 -22 -34 l-22 -16 27 0
			c17 0 32 9 43 25 15 23 15 27 0 50 -11 16 -26 25 -43 25 l-27 0 22 -16z"/>
		</g>
	</svg>
</div>
	
	
	<span class="sec-title__tagline">OUR TESTIMONIALS</span>
	
	<h2 class="sec-title__title">Hear from our happy <br/> customers review</h2>
</div>
			</div>
		</div>
		<div class="testimonials-one__carousel grdeen-owl__carousel grdeen-owl__carousel--with-shadow grdeen-owl__carousel--basic-nav owl-carousel"
			data-owl-options='{
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
				},
				"992": {
					"items": 3,
					"margin": 30
				}
			}
		}'>
			<div class="item">
				<div class="testimonials-card testimonials-dark-card  wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='00ms'>
	<div class="testimonials-card__inner">
		<div class="testimonials-card__ratingwrap d-flex align-items-center justify-content-between">
			<div class="testimonials-card__rating">
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
			</div>
			<div class="testimonials-card__icon">
				<img src={test1} alt=""/>
			</div>
		</div>

		<div class="testimonials-card__content">
			As a result of the garden build service provided by dimo and his company sed do eiusmod tempor incididunt ut labore et dolor magna aliqua 
		</div>
		<div class="testimonials-card__top">
			<div class="testimonials-card__image">
				<img src={test2} alt="Alen Martin"/>
			</div>

			<div class="testimonials-card__top__left">
				<h3 class="testimonials-card__name">
					Alen Martin
				</h3>
				<p class="testimonials-card__designation">Founder</p>

				<div class="testimonials-card__quote">
					<i class="icon-quote"></i>
				</div>
			</div>
		</div>
		<div class="testimonials-card__shape2">
			<img src={test3} alt=""/>
		</div>
	</div>
</div>
			</div>

			<div class="item">
				<div class="testimonials-card testimonials-dark-card  wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='100ms'>
	<div class="testimonials-card__inner">
		<div class="testimonials-card__ratingwrap d-flex align-items-center justify-content-between">
			<div class="testimonials-card__rating">
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
			</div>
			<div class="testimonials-card__icon">
				<img src={test4} alt=""/>
			</div>
		</div>

		<div class="testimonials-card__content">
			As a result of the garden build service provided by dimo and his company sed do eiusmod tempor incididunt ut labore et dolor magna aliqua 
		</div>
		<div class="testimonials-card__top">
			<div class="testimonials-card__image">
				<img src={test5} alt="Goblin Lion"/>
			</div>

			<div class="testimonials-card__top__left">
				<h3 class="testimonials-card__name">
					Goblin Lion
				</h3>
				<p class="testimonials-card__designation">Founder</p>

				<div class="testimonials-card__quote">
					<i class="icon-quote"></i>
				</div>
			</div>
		</div>
		<div class="testimonials-card__shape2">
			<img src={test6} alt=""/>
		</div>
	</div>
</div>
			</div>

			<div class="item">
				<div class="testimonials-card testimonials-dark-card  wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
	<div class="testimonials-card__inner">
		<div class="testimonials-card__ratingwrap d-flex align-items-center justify-content-between">
			<div class="testimonials-card__rating">
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
			</div>
			<div class="testimonials-card__icon">
				<img src={test7} alt=""/>
			</div>
		</div>

		<div class="testimonials-card__content">
			As a result of the garden build service provided by dimo and his company sed do eiusmod tempor incididunt ut labore et dolor magna aliqua 
		</div>
		<div class="testimonials-card__top">
			<div class="testimonials-card__image">
				<img src={test8} alt="Man Hanson"/>
			</div>

			<div class="testimonials-card__top__left">
				<h3 class="testimonials-card__name">
					Man Hanson
				</h3>
				<p class="testimonials-card__designation">Founder</p>

				<div class="testimonials-card__quote">
					<i class="icon-quote"></i>
				</div>
			</div>
		</div>
		<div class="testimonials-card__shape2">
			<img src={test9} alt=""/>
		</div>
	</div>
</div>
			</div>

			<div class="item">
				<div class="testimonials-card testimonials-dark-card  wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
	<div class="testimonials-card__inner">
		<div class="testimonials-card__ratingwrap d-flex align-items-center justify-content-between">
			<div class="testimonials-card__rating">
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
			</div>
			<div class="testimonials-card__icon">
				<img src={test10} alt=""/>
			</div>
		</div>

		<div class="testimonials-card__content">
			As a result of the garden build service provided by dimo and his company sed do eiusmod tempor incididunt ut labore et dolor magna aliqua 
		</div>
		<div class="testimonials-card__top">
			<div class="testimonials-card__image">
				<img src={test11} alt="Goblin Lion"/>
			</div>

			<div class="testimonials-card__top__left">
				<h3 class="testimonials-card__name">
					Goblin Lion
				</h3>
				<p class="testimonials-card__designation">Founder</p>

				<div class="testimonials-card__quote">
					<i class="icon-quote"></i>
				</div>
			</div>
		</div>
		<div class="testimonials-card__shape2">
			<img src={test12} alt=""/>
		</div>
	</div>
</div>
			</div>

			<div class="item">
				<div class="testimonials-card testimonials-dark-card  wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='400ms'>
	<div class="testimonials-card__inner">
		<div class="testimonials-card__ratingwrap d-flex align-items-center justify-content-between">
			<div class="testimonials-card__rating">
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
			</div>
			<div class="testimonials-card__icon">
				<img src={test13} alt=""/>
			</div>
		</div>

		<div class="testimonials-card__content">
			As a result of the garden build service provided by dimo and his company sed do eiusmod tempor incididunt ut labore et dolor magna aliqua 
		</div>
		<div class="testimonials-card__top">
			<div class="testimonials-card__image">
				<img src={test14} alt="Alen Martin"/>
			</div>

			<div class="testimonials-card__top__left">
				<h3 class="testimonials-card__name">
					Alen Martin
				</h3>
				<p class="testimonials-card__designation">Founder</p>

				<div class="testimonials-card__quote">
					<i class="icon-quote"></i>
				</div>
			</div>
		</div>
		<div class="testimonials-card__shape2">
			<img src={test15} alt=""/>
		</div>
	</div>
</div>
			</div>

			<div class="item">
				<div class="testimonials-card testimonials-dark-card  wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='500ms'>
	<div class="testimonials-card__inner">
		<div class="testimonials-card__ratingwrap d-flex align-items-center justify-content-between">
			<div class="testimonials-card__rating">
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
			</div>
			<div class="testimonials-card__icon">
				<img src={test16} alt=""/>
			</div>
		</div>

		<div class="testimonials-card__content">
			As a result of the garden build service provided by dimo and his company sed do eiusmod tempor incididunt ut labore et dolor magna aliqua 
		</div>
		<div class="testimonials-card__top">
			<div class="testimonials-card__image">
				<img src={test17} alt="Goblin Lion"/>
			</div>

			<div class="testimonials-card__top__left">
				<h3 class="testimonials-card__name">
					Goblin Lion
				</h3>
				<p class="testimonials-card__designation">Founder</p>
				<div class="testimonials-card__quote">
					<i class="icon-quote"></i>
				</div>
			</div>
		</div>
		<div class="testimonials-card__shape2">
			<img src={test18} alt=""/>
		</div>
	</div>
</div>
			</div>

			<div class="item">
				<div class="testimonials-card testimonials-dark-card  wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='600ms'>
	<div class="testimonials-card__inner">
		<div class="testimonials-card__ratingwrap d-flex align-items-center justify-content-between">
			<div class="testimonials-card__rating">
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
				<span class="testimonials-card__rating__start"><i class="fa fa-star"></i></span>
			</div>
			<div class="testimonials-card__icon">
				<img src={test19} alt=""/>
			</div>
		</div>

		<div class="testimonials-card__content">
			As a result of the garden build service provided by dimo and his company sed do eiusmod tempor incididunt ut labore et dolor magna aliqua 
		</div>
		<div class="testimonials-card__top">
			<div class="testimonials-card__image">
				<img src={test20} alt="Man Hanson"/>
			</div>

			<div class="testimonials-card__top__left">
				<h3 class="testimonials-card__name">
					Man Hanson
				</h3>
				<p class="testimonials-card__designation">Founder</p>

				<div class="testimonials-card__quote">
					<i class="icon-quote"></i>
				</div>
			</div>
		</div>
		<div class="testimonials-card__shape2">
			<img src={test21} alt=""/>
		</div>
	</div>
</div>
			</div>
		</div>
	</div>
</section>

<section class="team-one team-one--about">
	<div class="container">
		<div class="row">
			<div class="col-md-12 wow fadeInUp" data-wow-delay="100ms">
				<div class="project-one__sctwrap text-center">
					<div class="sec-title">
	
	<div class="sec-title__img">
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
		width="12.000000pt" height="10.000000pt" viewBox="0 0 12.000000 10.000000"
		preserveAspectRatio="xMidYMid meet">
		<g transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)" stroke="none">
			<path d="M58 84 c12 -8 22 -24 22 -34 0 -10 -10 -26 -22 -34 l-22 -16 27 0
			c17 0 32 9 43 25 15 23 15 27 0 50 -11 16 -26 25 -43 25 l-27 0 22 -16z"/>
		</g>
	</svg>
</div>
	
	
	<span class="sec-title__tagline">OUR Expert</span>
	
	<h2 class="sec-title__title">Meet our expert gardener</h2>
</div>
				</div>
			</div>
		</div>
		<div class="team-one__carousel grdeen-owl__carousel grdeen-owl__carousel--with-shadow grdeen-owl__carousel--basic-nav owl-carousel owl-theme"
			data-owl-options='{
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
					"dots": true
				},
				"992": {
					"items": 3,
					"dots": false
				}
			}
			}'>
			<div class="item">
				
<div class="team-one__item">
	<div class="team-card__bg-black"></div>
	<div class="team-card__bg-base"></div>
	<div class="team-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='000ms'>
		<div class="team-card__content">
			<div class="team-card__titlewrap">
				<h4 class="team-card__title">
					<a href="team-details.html">Martin Je Kellis</a>
				</h4>
				<span class="team-card__designation">Senior Gardener</span>
			</div>

			<div class="team-card__hover">
				<div class="team-card__social">
					<div class="team-card__social__iconwrap"><i class="icon-plus"></i></div>
					<div class="team-card__social__list">
						<a href="https://facebook.com/">
	<i class="fab fa-facebook-f"></i>
	<span class="sr-only">Facebook</span>
</a>
<a href="https://twitter.com/">
	<i class="fab fa-twitter" aria-hidden="true"></i>
	<span class="sr-only">Twitter</span>
</a>
<a href="https://linkedin.com/">
	<i class="fab fa-linkedin-in"></i>
	<span class="sr-only">Linkedin</span>
</a>
<a href="https://www.instagram.com/">
	<i class="fab fa-instagram"></i>
	<span class="sr-only">Instagram</span>
</a>
					</div>
				</div>
			</div>
		</div>

		<div class="team-card__image">
			<img src={team1} alt="Martin Je Kellis"/>
		</div>
	</div>
</div>
			</div>
			<div class="item">
				
<div class="team-one__item">
	<div class="team-card__bg-black"></div>
	<div class="team-card__bg-base"></div>
	<div class="team-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='100ms'>
		<div class="team-card__content">
			<div class="team-card__titlewrap">
				<h4 class="team-card__title">
					<a href="team-details.html">Alex Udami </a>
				</h4>
				<span class="team-card__designation">Senior Gardener</span>
			</div>

			<div class="team-card__hover">
				<div class="team-card__social">
					<div class="team-card__social__iconwrap"><i class="icon-plus"></i></div>
					<div class="team-card__social__list">
						<a href="https://facebook.com/">
	<i class="fab fa-facebook-f"></i>
	<span class="sr-only">Facebook</span>
</a>
<a href="https://twitter.com/">
	<i class="fab fa-twitter" aria-hidden="true"></i>
	<span class="sr-only">Twitter</span>
</a>
<a href="https://linkedin.com/">
	<i class="fab fa-linkedin-in"></i>
	<span class="sr-only">Linkedin</span>
</a>
<a href="https://www.instagram.com/">
	<i class="fab fa-instagram"></i>
	<span class="sr-only">Instagram</span>
</a>
					</div>
				</div>
			</div>
		</div>

		<div class="team-card__image">
			<img src={team2} alt="Alex Udami "/>
		</div>
	</div>
</div>
			</div>
			<div class="item">
				
<div class="team-one__item">
	<div class="team-card__bg-black"></div>
	<div class="team-card__bg-base"></div>
	<div class="team-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
		<div class="team-card__content">
			<div class="team-card__titlewrap">
				<h4 class="team-card__title">
					<a href="team-details.html">Solamin Karbi</a>
				</h4>
				<span class="team-card__designation">Senior Gardener</span>
			</div>

			<div class="team-card__hover">
				<div class="team-card__social">
					<div class="team-card__social__iconwrap"><i class="icon-plus"></i></div>
					<div class="team-card__social__list">
						<a href="https://facebook.com/">
	<i class="fab fa-facebook-f"></i>
	<span class="sr-only">Facebook</span>
</a>
<a href="https://twitter.com/">
	<i class="fab fa-twitter" aria-hidden="true"></i>
	<span class="sr-only">Twitter</span>
</a>
<a href="https://linkedin.com/">
	<i class="fab fa-linkedin-in"></i>
	<span class="sr-only">Linkedin</span>
</a>
<a href="https://www.instagram.com/">
	<i class="fab fa-instagram"></i>
	<span class="sr-only">Instagram</span>
</a>
					</div>
				</div>
			</div>
		</div>

		<div class="team-card__image">
			<img src={team3} alt="Solamin Karbi"/>
		</div>
	</div>
</div>
			</div>
		</div>
	</div>
</section>
<br/>
<Footer/>
    </>
  )
}

export default AboutSection;
