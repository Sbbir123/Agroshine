import React, {useState} from 'react';
import product from '../../images/backgrounds/pro1.jpg';
import fertilizer from '../../images/seeds/RawBlackSesameSeeds400gFOP.webp';
import fertilizer2 from '../../images/seeds/Bharosa.png';
import fertilizer3 from '../../images/seeds/61ZQqAx7MkL._AC_UF1000,1000_QL80_.jpg';
import fertilizer4 from '../../images/seeds/16898478781.png';
import fertilizer5 from '../../images/seeds/front.jpg';
import fertilizer6 from '../../images/seeds/1650689340197.jpeg';
import fertilizer7 from '../../images/seeds/ChiaSeedsMockup3_1024x1024.webp';
import fertilizer8 from '../../images/seeds/Fennel-Seeds.webp';
import fertilizer9 from '../../images/seeds/RoastedSunflowerSeeds125gFOP.webp';
import herb from '../../images/herbicides/1066_1.jpg';
import herb2 from '../../images/herbicides/Glycel_3.png';
import herb3 from '../../images/herbicides/Roundup_3.webp';
import herb4 from '../../images/herbicides/yutori_1_1.jpg';
import herb5 from '../../images/herbicides/Sweep Power_1.png';
import herb6 from '../../images/herbicides/Torry-bottle-LL-575x1024.webp';
import herb7 from '../../images/herbicides/Whip-super-_2.webp';
import herb8 from '../../images/herbicides/bayer-laudis-selective-herbicide-115-ml-500x500.webp';
import herb9 from '../../images/herbicides/zakiyama.png';
import insect from '../../images/Insecticides/1_24.webp';
import insect2 from '../../images/Insecticides/tWOYsNWC.jpeg';
import insect3 from '../../images/Insecticides/Best-Insecticide-For-Thrips-Thrips-Raze.webp';
import insect4 from '../../images/Insecticides/tata-zygant-insecticide.jpg';
import insect5 from '../../images/Insecticides/YiHxG3sz.jpeg';
import insect6 from '../../images/Insecticides/corona.jpg';
import insect7 from '../../images/Insecticides/image-removebg-preview-53.png';
import insect8 from '../../images/Insecticides/organic-neem-oil-insecticide-250ml-939984.webp';
import insect9 from '../../images/Insecticides/shimo.jpg';
import animal from '../../images/Animal husbandry/all-in-one-goat-feed-250x250.webp';
import animal2 from '../../images/Animal husbandry/bayer-laudis-selective-herbicide-115-ml-500x500.png';
import animal3 from '../../images/Animal husbandry/bovi.jpg';
import animal4 from '../../images/Animal husbandry/calf-feed-small.jpg kapila.jpg';
import animal5 from '../../images/Animal husbandry/dairy-special-small.jpg kapila.jpg';
import animal6 from '../../images/Animal husbandry/download.jpeg';
import animal7 from '../../images/Animal husbandry/dry-mix-cattle-feed-250x250.png';
import animal8 from '../../images/Animal husbandry/fertiboost_new.jpg';
import animal9 from '../../images/Animal husbandry/goat-feed-pellets-1000x1000.jpg';
import animal10 from '../../images/Animal husbandry/kamdhenu1.png';
import animal11 from '../../images/Animal husbandry/goat-feeds-250x250.png';
import animal12 from '../../images/Animal husbandry/hi-pro.jpgkapila.jpg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const ProductSection = () => {

  return (
    <>
        <div className="frenchise">
        <img src={product} alt="grdeen" style={{width:"100%"}}></img>
        </div>


     {/* <div className="col-md-8">
            <div className="search">
                <input name="search" type="text" pattern="[a-z,A-Z,0-9]*" placeholder="...I'm looking for"/>
                <i class="ri-search-line"></i>
            </div>
    </div> */}

        <section className="product-one">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="product__info-top"style={{backgroundColor:'yellowgreen'}}>
                        <div className="product__showing-sort">
                                <select className="selectpicker" aria-label="Defaul sorting">
                                    <option selected>Defaul sorting</option>
                                    <option value="1">Sort by view</option>
                                    <option value="2">Sort by price</option>
                                    <option value="3">Sort by ratings</option>
                                    <option value="4">Sort by popular</option>
                                </select>
                            </div>
                            <div className="product__showing-text-box">
                                <p className="product__showing-text">INSECTICIDES</p>
                            </div>
                        </div>
                        <div className="row gutter-y-30">
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='000ms'>
                                    <div className="product__item__img">
                                        <img src={insect} alt="grdeen" className="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                            <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                           </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">METORIN</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">80.00</span>
                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='100ms'>
                                    <div className="product__item__img">
                                        <img src={insect2} alt="grdeen" class="img-product"/>

                                    </div> 
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">CLASTO</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹200.00</span>

                                                <span className="product__item__price__offer">₹250.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
                                    <div className="product__item__img">
                                        <img src={insect3} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">THRIPS RAZE</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹47.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                                    <div className="product__item__img">
                                        <img src={insect4} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">ZYGANT</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹80.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='400ms'>
                                    <div className="product__item__img">
                                        <img src={insect5} alt="grdeen" class="img-product"/>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">TROT</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹120.00</span>

                                                <span className="product__item__price__offer">₹150.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='500ms'>
                                    <div className="product__item__img">
                                        <img src={insect6} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Nowd</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">CORONA</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹90.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='600ms'>
                                    <div className="product__item__img">
                                        <img src={insect7} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">ADMIRE</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹70.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='700ms'>
                                    <div className="product__item__img">
                                        <img src={insect8} alt="grdeen" class="img-product"/>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">NATIVE NEEM</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹100.00</span>
                                                <span className="product__item__price__offer">₹150.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>                                        
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='800ms'>
                                    <div className="product__item__img">
                                        <img src={insect9} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">SHIMO</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹60.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="product-pagination">
                                <a className="next page-numbers" href="products-left.html">Next</a>
                                <a className="page-numbers" href="products-left.html">03</a>
                                <a className="page-numbers" href="products-left.html">02</a>
                                    <span className="page-numbers current">01</span> 
                                    <a className="prev page-numbers" href="products-left.html">Prev</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section className="product-one">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="product__info-top"style={{backgroundColor:'yellowgreen'}}>
                        <div className="product__showing-sort">
                                <select className="selectpicker" aria-label="Defaul sorting">
                                    <option selected>Defaul sorting</option>
                                    <option value="1">Sort by view</option>
                                    <option value="2">Sort by price</option>
                                    <option value="3">Sort by ratings</option>
                                    <option value="4">Sort by popular</option>
                                </select>
                            </div>
                            <div className="product__showing-text-box">
                                <p className="product__showing-text">SEEDS</p>
                            </div>
                        </div>
                        <div className="row gutter-y-30">
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='000ms'>
                                    <div className="product__item__img">
                                        <img src={fertilizer} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">BLACK ROW SEED</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">80.00</span>
                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='100ms'>
                                    <div className="product__item__img">
                                        <img src={fertilizer2} alt="grdeen" class="img-product"/>

                                    </div> 
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">BHAROSA</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹200.00</span>

                                                <span className="product__item__price__offer">₹250.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
                                    <div className="product__item__img">
                                        <img src={fertilizer3} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">QUINOA SEED</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹47.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                                    <div className="product__item__img">
                                        <img src={fertilizer4} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">POPPY SEED</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹80.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='400ms'>
                                    <div className="product__item__img">
                                        <img src={fertilizer5} alt="grdeen" class="img-product"/>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">PUMPKIN SEED</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹120.00</span>

                                                <span className="product__item__price__offer">₹150.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='500ms'>
                                    <div className="product__item__img">
                                        <img src={fertilizer6} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">NUZIVEEDU SEED</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹90.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='600ms'>
                                    <div className="product__item__img">
                                        <img src={fertilizer7} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">CHIA SEED</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹70.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='700ms'>
                                    <div className="product__item__img">
                                        <img src={fertilizer8} alt="grdeen" class="img-product"/>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">FENNEL SEED</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹100.00</span>

                                                <span className="product__item__price__offer">₹150.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>                                        
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='800ms'>
                                    <div className="product__item__img">
                                        <img src={fertilizer9} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">SUNFLOWER ROASTED SEED</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹60.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="product-pagination">
                                <a className="next page-numbers" href="products-left.html">Next</a>
                                <a className="page-numbers" href="products-left.html">03</a>
                                <a className="page-numbers" href="products-left.html">02</a>
                                    <span className="page-numbers current">01</span> 
                                    <a className="prev page-numbers" href="products-left.html">Prev</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="product-one">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="product__info-top"style={{backgroundColor:'yellowgreen'}}>
                        <div className="product__showing-sort">
                                <select className="selectpicker" aria-label="Defaul sorting">
                                    <option selected>Defaul sorting</option>
                                    <option value="1">Sort by view</option>
                                    <option value="2">Sort by price</option>
                                    <option value="3">Sort by ratings</option>
                                    <option value="4">Sort by popular</option>
                                </select>
                            </div>
                            <div className="product__showing-text-box">
                                <p className="product__showing-text">HERBICIDES</p>
                            </div>
                        </div>
                        <div className="row gutter-y-30">
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='000ms'>
                                    <div className="product__item__img">
                                        <img src={herb} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">WEEDMAR SUPER </a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">80.00</span>
                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='100ms'>
                                    <div className="product__item__img">
                                        <img src={herb2} alt="grdeen" class="img-product"/>

                                    </div> 
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html"> GLYCEL</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹200.00</span>

                                                <span className="product__item__price__offer">₹250.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
                                    <div className="product__item__img">
                                        <img src={herb3} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html"> ROUNDUP</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹47.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                                    <div className="product__item__img">
                                        <img src={herb4} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">YUTORI</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹80.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='400ms'>
                                    <div className="product__item__img">
                                        <img src={herb5} alt="grdeen" class="img-product"/>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">SWEEP POWDER</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹120.00</span>

                                                <span className="product__item__price__offer">₹150.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='500ms'>
                                    <div className="product__item__img">
                                        <img src={herb6} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">TORRY</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹90.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='600ms'>
                                    <div className="product__item__img">
                                        <img src={herb7} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html"> WHIPSUPER</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹70.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='700ms'>
                                    <div className="product__item__img">
                                        <img src={herb8} alt="grdeen" class="img-product"/>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">LAUDIS WITH FOOST</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹100.00</span>

                                                <span className="product__item__price__offer">₹150.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>                                        
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='800ms'>
                                    <div className="product__item__img">
                                        <img src={herb9} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">ZAKIYAMA</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹60.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="product-pagination">
                                <a className="next page-numbers" href="products-left.html">Next</a>
                                <a className="page-numbers" href="products-left.html">03</a>
                                <a className="page-numbers" href="products-left.html">02</a>
                                    <span className="page-numbers current">01</span> 
                                    <a className="prev page-numbers" href="products-left.html">Prev</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="product-one">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="product__info-top"style={{backgroundColor:'yellowgreen'}}>
                        <div className="product__showing-sort">
                                <select className="selectpicker" aria-label="Defaul sorting">
                                    <option selected>Defaul sorting</option>
                                    <option value="1">Sort by view</option>
                                    <option value="2">Sort by price</option>
                                    <option value="3">Sort by ratings</option>
                                    <option value="4">Sort by popular</option>
                                </select>
                            </div>
                            <div className="product__showing-text-box">
                                <p className="product__showing-text">ANIMAL HUSBANDRY</p>
                            </div>
                        </div>
                        <div className="row gutter-y-30">
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='000ms'>
                                    <div className="product__item__img">
                                        <img src={animal} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Coconut Palm</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">80.00</span>
                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='100ms'>
                                    <div className="product__item__img">
                                        <img src={animal2} alt="grdeen" class="img-product"/>

                                    </div> 
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Charir Colorful</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹200.00</span>

                                                <span className="product__item__price__offer">₹250.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
                                    <div className="product__item__img">
                                        <img src={animal3} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Wood Chair</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹47.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                                    <div className="product__item__img">
                                        <img src={animal4} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Shovel Tool</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹80.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='400ms'>
                                    <div className="product__item__img">
                                        <img src={animal5} alt="grdeen" class="img-product"/>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Minimal</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹120.00</span>

                                                <span className="product__item__price__offer">₹150.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='500ms'>
                                    <div className="product__item__img">
                                        <img src={animal6} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Palm tree</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹90.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='600ms'>
                                    <div className="product__item__img">
                                        <img src={animal7} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Minimal Chair</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹70.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='700ms'>
                                    <div className="product__item__img">
                                        <img src={animal8} alt="grdeen" class="img-product"/>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Yellow Chair</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹100.00</span>

                                                <span className="product__item__price__offer">₹150.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>                                        
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='800ms'>
                                    <div className="product__item__img">
                                        <img src={animal9} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Headphone</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹60.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='800ms'>
                                    <div className="product__item__img">
                                        <img src={animal10} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Headphone</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹60.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='800ms'>
                                    <div className="product__item__img">
                                        <img src={animal11} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Headphone</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹60.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='800ms'>
                                    <div className="product__item__img">
                                        <img src={animal12} alt="grdeen" class="img-product"/>

                                        <div className="product__item__label">
                                            <span className="product__item__label__sale">Sale</span>
                                        </div>

                                    </div>
                                    <div className="product__item__content-wrap">
                                        <div className="product__item__btn">
                                        <Link to={"/cart"} className="grdeen-btn"><span>Buy Now</span></Link>

                                        </div>
                                        <div className="product__item__content">
                                            <h4 className="product__item__title"><a href="product-details.html">Headphone</a></h4>
                                            <div className="product__item__price">
                                                <span className="product__item__price__regular">₹60.00</span>

                                            </div>
                                            <div className="product__item__ratings">
                                                <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="product-pagination">
                                <a className="next page-numbers" href="products-left.html">Next</a>
                                <a className="page-numbers" href="products-left.html">03</a>
                                <a className="page-numbers" href="products-left.html">02</a>
                                    <span className="page-numbers current">01</span> 
                                    <a className="prev page-numbers" href="products-left.html">Prev</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default ProductSection;


