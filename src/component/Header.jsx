import React from 'react';
import img1 from '../images/logo-dark.jpg';
import img2 from '../images/logo-light.png';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
       <div className="preloader">
        <div className="preloader__image" style={{backgroundImage:`url("../image/slider-1-2.jpg")`}}></div>
    </div>

        <div className="topbar-one topbar-one--one_only">
            <div className="container-fluid">
                <div className="topbar-one__inner">
                <div className="topbar-one__social">
                            <a href="https://facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="https://twitter.com/">
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                                <span className="sr-only">Twitter</span>
                            </a>

                            <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram"></i>
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>

                    <ul className="list-unstyled topbar-one__info">
                        <li className="topbar-one__info__item">
                            <div className="topbar-one__info__iconwrap">
                                <i className="icon-pin"></i>
                            </div>
                            <div className="topbar-one__info__address d-flex flex-wrap">
                                <small className="topbar-one__info__address__text">Company address</small>
                                <a href="contact.html">New Delhi India</a>
                            </div>
                        </li>
                        <li className="topbar-one__info__item">
                            <div className="topbar-one__info__iconwrap">
                                <i className="icon-email"></i>
                            </div>
                            <div className="topbar-one__info__address">
                                <small className="topbar-one__info__address__text">Send an email</small>
                                <a href="mailto:Support@gmail.com">info@NawalSustainbility.com</a>
                            </div>
                        </li>
                        <li className="topbar-one__info__item">
                            <div className="topbar-one__info__iconwrap">
                                <i className="icon-phone-receiver-silhouette"></i>
                            </div>
                            <div className="topbar-one__info__address">
                                <small className="topbar-one__info__address__text">Helpline and support</small>
                                <a href="tel:+91-62609 00760">91-6260900760+</a>
                            </div>
                        </li>
                    </ul>

                    <div className="topbar-one__right">
                        <div className="topbar-one__logo">
                        <a href="index.html">
                            <img src={img1}/>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>


        <header className="main-header main-header--only-one main-header--one_only sticky-header sticky-header--normal">
            <div className="container-fluid">
                <div className="main-header__inner">
                    <div className="main-header__logo">
                        <a href="index.html">
                            <img src={img2} alt="Grdeen HTML"/>
                        </a>
                    </div>
                    <div className="main-header__wellcome d-flex align-items-center">
                        <p className="main-header__wellcome__tagline">Welcome to our farming field</p>
                        <a href="contact.html" className="grdeen-btn main-header__wellcome__btn">
                            <span>Contact</span>
                        </a>
                    </div>

                    <nav className="main-header__nav main-menu">
                        <ul className="main-menu__list">
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/service">Services</Link>
                            </li>
                            <li>
                                <Link to="/product">Product</Link>
                            </li>
                            <li>
                                <Link to="/franchise">Franchise</Link>
                            </li>
                            <li>
                                <Link to="/community">Community</Link>
                            </li>
                            <li>
                                <Link to="/farmer">Farmer</Link>
                            </li>
                            <li className="">

                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>    
                        </ul>
                    </nav>
                    <div className="main-header__right">
                        <div className="mobile-nav__btn mobile-nav__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                      
                        <Link to={"/cart"} className="main-header__cart">
                            <div className="main-header__cart__icon">
                                <i className="icon-shop-bag" aria-hidden="true"></i>
                            </div>
                            <span className="main-header__cart__count">0</span>
                            <span className="sr-only">cart</span>
                            </Link>
                        <a href="contact.html" className="grdeen-btn main-header__btn">
                            <span>Get A Quote</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <Outlet />
    </>
  )
}

export default Header
