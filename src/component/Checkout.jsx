import React from 'react';
import pr from '../images/Insecticides/1_24.webp';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Checkout = () => {
  return (
    <>
           <section className="page-header">
            <div className="page-header__bg"></div>
            <div className="page-header__shape wow fadeInUp" data-wow-delay="200ms"></div>
            <div className="page-header__overlay"></div>
            <div className="container">
                <h2 className="page-header__title">Checkout</h2>
                <ul className="grdeen-breadcrumb list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li><span>Checkout</span></li>
                </ul>
            </div>
        </section>

        <section className="checkout-page">
            <div className="container">
                <div className="row">
                <div className="col-xl-4 col-lg-4">
                        <div className="checkout-page__order">
                            <div className="checkout-page__order-total">
                                <h3 className="checkout-page__order-total__title">Order summary</h3>
                                <ul className="checkout-page__order__list list-unstyled">
                                    <li>
                                        <div className="checkout-page__order__product">
                                           
                                            <span className="checkout-page__order__amount">₹80.00</span>
                                            <h3 className="checkout-page__order__product__title"><a href="product-details.html">Shovel</a></h3>
                                            <div className="checkout-page__order__product__img">
                                                <img src={pr} alt="grdeen"/>
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li className="cart-totals"><span className="checkout-page__order__amount">₹80.00</span><span>Cart Total</span></li>
                                    <li><span className="checkout-page__order__amount">₹80.00</span><span>SubTotal</span></li>
                                    <li>
                                    
                                        <span className="checkout-page__order__shipping">
                                            <span className="checkout-page__order__shipping__rate">Flat rate: ₹20.00</span>
                                            Shipping to India
                                            <Link to={"/cart"} className="checkout-page__order__shipping__link" href="cart.html">Change address</Link>
                                        </span>
                                        <span>Shipping</span>
                                    </li>
                                    <li><span className="checkout-page__order__amount">₹100.00</span><span>Total</span></li>
                                </ul>
                            </div>
                            <div className="checkout-page__payment">
                                <h3 className="checkout-page__payment__heading">Payment information</h3>
                                <div className="checkout-page__payment__item checkout-page__payment__item--active">
                                    <h3 className="checkout-page__payment__title">Direct bank transfer</h3>
                                    <div className="checkout-page__payment__content" style={{display: "none"}}>
                                        Make your payment directly into our bank account. Please
                                        use your Order ID as the payment reference.
                                    </div>
                                </div>
                                <div className="checkout-page__payment__item">
                                    <h3 className="checkout-page__payment__title">Cash on delivery</h3>
                                    <div className="checkout-page__payment__content" style={{display: "none"}}>
                                        Mod tempor incididunt ut labore et dolore magna aliq mpor
                                    </div>
                                </div>
                                <div className="checkout-page__payment__item">
                                    <h3 className="checkout-page__payment__title">Paypal payment</h3>
                                    <div className="checkout-page__payment__content" style={{display: "none"}}>
                                        Arkono ridoy venge tumi met, consectetur adipisicing elit
                                    </div>
                                </div>
                                <div className="checkout-page__payment__condition">
                                    <input type="checkbox" name="condition" id="condition"/>
                                    <label for="condition">I have read and agree to the website terms and conditions<span></span></label>
                                </div>
                                <div className="checkout-page__payment__btn">
                                    <a href="checkout.html" className="grdeen-btn"><span>Place Order</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="col-xl-8 col-lg-8">
                        <div className="checkout-page__billing-address">
                            <h2 className="checkout-page__billing-address__title">Billing Details</h2>
                            <form className="checkout-page__form">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <label className="checkout-page__label-text">Last name *</label>
                                            {/* <input type="text" name="last_name" value="" placeholder="Last Name" required=""/> */}
                                            <input name="last_name" type="text" pattern="[a-z,A-Z]*" placeholder="Last name"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <label className="checkout-page__label-text">First name *</label>
                                            {/* <input type="text" name="first_name" value="" placeholder="First name" required=""/> */}
                                            <input name="first_name" type="text" pattern="[a-z,A-Z]*" placeholder="First name"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <label className="checkout-page__label-text">Country / Region *</label>
                                            <select className="selectpicker" aria-label="Default select example">
                                            <option selected="">India</option>
                                                <option selected="">London</option>
                                                <option value="1">Canada</option>
                                                <option value="2">England</option>
                                                <option value="3">Australia</option>
                                                <option selected="">USA</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <label className="checkout-page__label-text">Street address *</label>
                                            {/* <input type="text" name="Street_address" value="" placeholder="Street address"/> */}
                                            <input name="Street_address" type="text" pattern="[a-z,A-Z,0-9]*" placeholder="Street_address"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <label className="checkout-page__label-text">Town / City *</label>
                                            {/* <input type="text" name="Town/City" value="" placeholder="Town / City" required=""/> */}
                                            <input name="Town/City" type="text" pattern="[a-z,A-Z]*" placeholder="Town/City"/>
                                            
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <label className="checkout-page__label-text">State *</label>
                                            <select className="selectpicker" aria-label="Default select example">
                                                <option selected="">Utter Pradesh</option>
                                                <option value="1">Delhi</option>
                                                <option value="2">Bihar</option>
                                                <option value="3">Aasam</option>
                                                <option value="3">Himanchal Pradesh</option>
                                                <option value="3">Haryana</option>
                                                <option value="3">Punjab</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <label className="checkout-page__label-text">ZIP Code *</label>
                                            <input name="form_zip" type="text" pattern="[0-9]*" placeholder="Zip code"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <label className="checkout-page__label-text">Phone *</label>
                                            <input type="tel" name="form_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required="" placeholder="Phone"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <label className="checkout-page__label-text">Email address *</label>
                                            <input name="email" type="email" placeholder="Email address"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checkout-page__check-box">
                                            <input type="checkbox" name="skipper4" id="skipper4" checked=""/>
                                            <label for="skipper4" >?Ship to a different address<span></span></label>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="checkout-page__check-box">
                                            <input type="checkbox" name="skipper5" id="skipper5"/>
                                            <label for="skipper5">?Create an account<span></span></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row checkout-page__place-order">
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <label className="checkout-page__label-text">Order notes (optional)</label>
                                            <textarea placeholder="Note about your order" name="form_order_notes"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Checkout;
