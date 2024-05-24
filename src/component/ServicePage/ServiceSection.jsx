import React from 'react';
import im1 from '../../images/shapes/service-shape3-1.png';
import im2 from '../../images/shapes/service-shape3-1.png';
import im3 from '../../images/shapes/service-shape3-1.png';
import im4 from '../../images/shapes/service-shape3-1.png';
import im5 from '../../images/shapes/service-shape3-1.png';
import im6 from '../../images/shapes/service-shape3-1.png';
import animal from '../../images/agriculture Equipments/20201225175913.jpg';
import animal2 from '../../images/agriculture Equipments/682283c0aa432a66027622dd5ed551db.jpg';
import animal3 from '../../images/agriculture Equipments/AG086_power_Sprayer_3.webp';
import animal4 from '../../images/agriculture Equipments/Centrifugal-Jet-Self-Priming-Shalo-420-416.png';
import animal5 from '../../images/agriculture Equipments/H9cb76c601b894ef5a957e0b8cfe8b24aR.jpg_300x300.webp';
import animal6 from '../../images/agriculture Equipments/MP641.jpg';
import animal7 from '../../images/agriculture Equipments/Paddy-Transplanter.jpg';
import animal8 from '../../images/agriculture Equipments/Potato planter.jpg';
import animal9 from '../../images/agriculture Equipments/Right-Machinery6.jpg';
import animal10 from '../../images/agriculture Equipments/Untitled.png';
import animal11 from '../../images/agriculture Equipments/agricultural-machinery-bag-weath-seeds-16562840.webp';
import animal12 from '../../images/agriculture Equipments/all-agriculture-items-500x500.webp';
import animal13 from '../../images/agriculture Equipments/farmland-agricultural-equipment-2012673248-pwgv6y3k.jpg';
import animal14 from '../../images/agriculture Equipments/gettyimages-533770485.webp  GEA Group.webp';
import animal15 from '../../images/agriculture Equipments/gettyimages-641695934.webp';
import animal16 from '../../images/agriculture Equipments/images (1).jpeg';
import animal17 from '../../images/agriculture Equipments/irrigation-machine.jpg';
import animal18 from '../../images/agriculture Equipments/all-agriculture-items-500x500.webp';
import soil from '../../images/soil testing/360_F_229698953_YbdvdeAcJhJbxKiEVueiAmw9PEhD9QtX.jpg';
import soil2 from '../../images/soil testing/360_F_275112884_Ewsb9PBzX8tNanNf2KbHCVu2eJZmP7PU.jpg';
import soil3 from '../../images/soil testing/360_F_354233405_zbNKOvHMrnoQjpSXWcSVpPdkOJtirwMh.jpg';
import soil4 from '../../images/soil testing/634d0d7f273c0c0fef0d3474-saysummer-soil-testing-kit-100-tests.jpg';
import soil5 from '../../images/soil testing/Flow-chart-for-the-analysis-of-dry-and-wet-soil-samples.png';
import soil6 from '../../images/soil testing/Flowchart-for-soil-sample-preparation-and-measurement-by-HRGC-HRMS-and-EROD-assay-The.png';
import soil7 from '../../images/soil testing/Soil-Sampling.jpg';
import soil8 from '../../images/soil testing/Soil-testing-lab-1024x538.png';
import soil9 from '../../images/soil testing/The-flowchart-of-the-procedures-for-the-soil-quality-evaluation.png';
import soil10 from '../../images/soil testing/main-qimg-f9320559eda2e6c18eaa462fc0855dd4.webp';
import soil11 from '../../images/soil testing/soil-sampling-chemical-analysis-ph-260nw-1739599121.webp';
import soil12 from '../../images/soil testing/soil-testing-2-1080x675.jpg';
import soil13 from '../../images/soil testing/soil-testing-collection-thumbnail.webp';
import soil14 from '../../images/soil testing/testing-services-ORIG.jpg';
import soil15 from '../../images/soil testing/testing-soil-using-a-ph-tester-to-check-the-acidity-of-garden-compost-MNBFMK.jpg';
import drone from '../../images/drone camera/1-s2.0-S2214317322000087-gr5.png';
import drone2 from '../../images/drone camera/1000_F_553759502_bgipsmAAV0NVDPpWzo65T1gYciQici89.jpg';
import drone3 from '../../images/drone camera/5-Brilliant-Ways-To-Use-Spraying-Drone-c-1200x900.png';
import drone4 from '../../images/drone camera/7.jpg';
import drone5 from '../../images/drone camera/drones-06-00383-g011.webp';
import drone6 from '../../images/drone camera/Agriculture-Drones-Uses-Benefits-Govt.-Subsidies-Explained-1.png';
import drone7 from '../../images/drone camera/agricultural-pesticide-spraying-drone.jpg';
import drone8 from '../../images/drone camera/agriculture-spray-drone-500x500.webp';
import drone9 from '../../images/drone camera/bg_agri.png';
import drone10 from '../../images/drone camera/drone-ag-compressor-500x500.webp';
import drone11 from '../../images/drone camera/drone-farming-og-500x500.webp';
import drone12 from '../../images/drone camera/drone-multi-cameras.png';
import drone13 from '../../images/drone camera/drones-06-00383-g011.webp';
import drone14 from '../../images/drone camera/maxresdefault.jpg';
import drone15 from '../../images/drone camera/nla616-16kg-crop-spraying-drone-agriculture-uav-drone-sprayer.jpg';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const ServiceSection = () => {

    // const myStyle = { backgroundImage: `url(${im1})`}
    // const myStyle1 = { backgroundImage: `url(${im2})`}
    // const myStyle2 = { backgroundImage: `url(${im3})`}
    // const myStyle3 = {backgroundImage: `url(${im4}`}
    // const myStyle4 = {backgroundImage: `url(${im5}`}
    // const myStyle5 = {backgroundImage: `url(${im6}`}



  return (
    <>
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
                                <p className="product__showing-text">AGRICULTURE EQUIPMENT</p>
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
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='800ms'>
                                    <div className="product__item__img">
                                        <img src={animal13} alt="grdeen" class="img-product"/>

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
                                        <img src={animal14} alt="grdeen" class="img-product"/>

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
                                        <img src={animal15} alt="grdeen" class="img-product"/>

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
                                        <img src={animal16} alt="grdeen" class="img-product"/>

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
                                        <img src={animal17} alt="grdeen" class="img-product"/>

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
                                        <img src={animal18} alt="grdeen" class="img-product"/>

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
                                <p className="product__showing-text">SOIL TESTING</p>
                            </div>
                        </div>
                        <div className="row gutter-y-30">
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='000ms'>
                                    <div className="product__item__img">
                                        <img src={soil} alt="grdeen" class="img-product"/>

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
                                        <img src={soil2} alt="grdeen" class="img-product"/>

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
                                        <img src={soil3} alt="grdeen" class="img-product"/>

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
                                        <img src={soil4} alt="grdeen" class="img-product"/>

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
                                        <img src={soil5} alt="grdeen" class="img-product"/>

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
                                        <img src={soil6} alt="grdeen" class="img-product"/>

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
                                        <img src={soil7} alt="grdeen" class="img-product"/>

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
                                        <img src={soil8} alt="grdeen" class="img-product"/>

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
                                        <img src={soil9} alt="grdeen" class="img-product"/>

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
                                        <img src={soil10} alt="grdeen" class="img-product"/>

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
                                        <img src={soil11} alt="grdeen" class="img-product"/>

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
                                        <img src={soil12} alt="grdeen" class="img-product"/>

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
                                        <img src={soil13} alt="grdeen" class="img-product"/>

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
                                        <img src={soil14} alt="grdeen" class="img-product"/>

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
                                        <img src={soil15} alt="grdeen" class="img-product"/>

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
                                <p className="product__showing-text">DRONE CAMERA</p>
                            </div>
                        </div>
                        <div className="row gutter-y-30">
                            <div className="col-md-6 col-lg-4">
                                <div className="product__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='000ms'>
                                    <div className="product__item__img">
                                        <img src={drone} alt="grdeen" class="img-product"/>

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
                                        <img src={drone2} alt="grdeen" class="img-product"/>

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
                                        <img src={drone3} alt="grdeen" class="img-product"/>

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
                                        <img src={drone4} alt="grdeen" class="img-product"/>

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
                                        <img src={drone5} alt="grdeen" class="img-product"/>

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
                                        <img src={drone6} alt="grdeen" class="img-product"/>

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
                                        <img src={drone7} alt="grdeen" class="img-product"/>

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
                                        <img src={drone8} alt="grdeen" class="img-product"/>

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
                                        <img src={drone9} alt="grdeen" class="img-product"/>

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
                                        <img src={drone10} alt="grdeen" class="img-product"/>

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
                                        <img src={drone11} alt="grdeen" class="img-product"/>

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
                                        <img src={drone12} alt="grdeen" class="img-product"/>

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
                                        <img src={drone13} alt="grdeen" class="img-product"/>

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
                                        <img src={drone14} alt="grdeen" class="img-product"/>

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
                                        <img src={drone15} alt="grdeen" class="img-product"/>

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

export default ServiceSection;
