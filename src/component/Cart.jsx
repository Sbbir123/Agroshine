import React from 'react'
import insect from '../images/Insecticides/1_24.webp';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Cart = () => {
  return (
    <>
         <section className="page-header">
            <div className="page-header__bg"></div>
            <div className="page-header__shape wow fadeInUp" data-wow-delay="200ms"></div>
            <div className="page-header__overlay"></div>
            <div className="container">
                <h2 className="page-header__title">Cart</h2>
                <ul className="grdeen-breadcrumb list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li><span>Cart</span></li>
                </ul>
            </div>
        </section>

        {/* <!-- Cart Start --> */}
        <section className="cart-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="cart-page__cart-total">
                            <ul className="cart-page__cart-total__list list-unstyled">
                                <li><span className="cart-page__cart-total__amount">₹80.00</span><span>Cart Total</span></li>
                                <li><span className="cart-page__cart-total__amount">₹80.00</span><span>SubTotal</span></li>
                                <li>
                                  
                                    <span className="cart-page__cart-total__shipping">
                                        <span className="cart-page__cart-total__shipping__rate">Flat rate: ₹20.00</span>
                                        Shipping to India
                                        <a className="cart-page__cart-total__shipping__link" href="cart.html">Change address</a>
                                    </span>
                                    <span>Shipping</span>
                                </li>
                                <li><span className="cart-page__cart-total__amount">₹100.00</span><span>Total</span></li>
                            </ul>
                            <div className="cart-page__buttons">
                                <Link to={"/checkout"} href="checkout.html" className="grdeen-btn"><span>Proceed to checkout</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="table-responsive">
                            <table className="table cart-page__table">
                                <thead>
                                    <tr>
                                    <th>Subtotal</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                     <th>Product</th>   
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                       
                                       
                                        <td>₹80.00</td>
                                        <td>₹80.00</td>
                                        <td>
                                            <div className="product-details__quantity">
                                                <div className="quantity-box">
                                                    <button type="button" className="sub"><i className="icon-down-arrow"></i></button>
                                                    <input type="text" id="1" value="1"/>
                                                    <button type="button" className="add"><i className="icon-up-arrow"></i></button>
                                                </div>
                                            </div>
                                        </td>
                                      
                                        <td>
                                            <div className="cart-page__table__meta">
                                            <h3 className="cart-page__table__meta__title"><a href="product-details.html">Shovel</a>
                                                </h3>
                                                <div className="cart-page__table__meta__img">
                                                {/* <a href="cart.html" className="cart-page__table__meta__remove">x</a>  */}
                                                    <img src={insect} alt="grdeen"/>                            
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h3 className="cart-page__coupone-form-title">:Coupon code</h3>
                            <form action="#" className="cart-page__coupone-form">
                            <input  placeholder="Type Your Coupon Code" className="cart-cupon__input" type="text" style={{textAlign:"left"}} />
                            <button className="grdeen-btn" type="submit" ><span>Add Code</span></button>
                            </form>
                            <Link to={"/checkout"} className="cart-page__link" href="checkout.html" style={{marginRight:"598px"}}>Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Cart;
