import React from 'react';
import team1 from '../../images/shapes/team-one-form-bg-1-1.png';
import index1 from '../../images/index1.png';
import index2 from '../../images/index2.png';
import index3 from '../../images/index3.png';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import better from '../../images/beeter.jpg';
import Footer from '../Footer';


const CommunitySection = () => {

    const myStyle3 = { backgroundImage: `url(${team1})` }

  return (
    <>
         <img src={better} alt="" />
        <section style={{paddingBottom:"40px", background: "radial-gradient(circle, rgba(63,94,251,0) 0%, rgb(83 252 70 / 18%) 100%)",paddingTop: "30px"}}>
    <div class="col-md-12">
      <div class="section-title-item section-title-v2-item">
        <h2 class="section-title one"> <span class="red"style={{color:"#5ab42e"}}>Nutrition deficiency is a serious problem in India
          </span><br/>India ranks 94 out of 107 countries on the Global Hunger Index 2020</h2>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="content_img col-sm-4">
         <img src={index1} style={{width: "90%"}}/>
        </div>
        <div class="content_img col-sm-4">
          <img src={index2}/>
        </div>
        <div class="content_img col-sm-4">
          <img src={index3}/>
        </div>
      </div>
    </div>
        </section>
        <br/>

        <section style={{paddingTop:"30px", paddingBottom:"20px", background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(214, 211, 206, 0.54) 100%)",marginBottom: "20px"}}>
        <div class="container">
            <div class="row">
                <div class="content_img col-sm-4">
                    <img src={food3} alt="high-iron" style={{marginBottom: "20px",marginTop:"35px"}}/>
                </div>


                <div class="content_img col-sm-4">
                    <img src={food2} alt="high-iron" style={{marginBottom: "20px",marginTop:"35px"}}/>
                </div>

                <div class="content_img col-sm-4">
                    <img src={food1} alt="high-iron" style={{marginBottom: "20px",marginTop:"35px"}}/>
                </div>


            </div>
        </div>


    </section>

        <section className="team-form-one">
            <div className="container">
                <h3 className="team-form-one__title">Ready to work <br/>with us</h3>
                <div className="team-form-one__wrapper" style={myStyle3}>
                    <form className="form-one team-form-one__form contact-form-validated " action="https://bracketweb.com/grdeen-html/inc/sendemail.php">
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
                                <input type="text" name="subject" placeholder="Subject"style={{textAlign:"left"}}/>
                            </div>
                            <div className="form-one__control form-one__control--full">
                                <textarea name="message" placeholder="Your Message here" style={{textAlign:"left"}} ></textarea>
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



        <Footer/>
    </>
  )
}

export default CommunitySection;
