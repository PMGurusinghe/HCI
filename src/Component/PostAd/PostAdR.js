import React from 'react';
import '../../css/PostAd/PostAdR.css'
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import carimg1 from '../images/15759810002.jpg'
import carimg2 from '../images/15759810005.jpg'
import carimg3 from '../images/15759810006.jpg'
import carimg4 from '../images/15759810007.jpg'
import carimg5 from '../images/15759810009.jpg'
import png from '../images/recaptcha.png'




export default function postAdR() {
    return ( 
        <div className = 'body'>
            <div class = 'main-header'>
                    <h2>POST YOUR AD</h2>                
                </div>  
                <div className = 'headerLine mx-auto'>
                        <hr />
                </div>    

                <div className='tabs'>
                    <div className = 'tabsline1 mx-auto'>
                        <hr />
                    </div>
                    <h4>
                        01 fill the form&nbsp;&nbsp;&nbsp;
                        <i class='fas fa-caret-right'/>&nbsp;&nbsp;&nbsp;
                        <span style = {{color : '#03C04A'}}>02</span> Review your order &nbsp;&nbsp;&nbsp;
                            <i class='fas fa-caret-right'/>&nbsp;&nbsp;&nbsp;
                            03 make your payments
                    </h4>

                    <div className = 'tabsline2 mx-auto'>
                        <hr />
                    </div>
                </div>  

                <div className = 'secondHeader'>
                    <h3>Review Your Order</h3>
                </div>


                <div className = 'row'>
                <div className = 'col'>
                <div class="carousal col-lg-6">
                        <div className='container mt-3 ml-5' >
                            <Carousel style={{ 'height': "100%", 'width': "500px" , 'margin-bottom' : '30px' }}>
                                <Carousel.Item  >
                                    <img className="img-fluid  w-auto" alt="Responsive image" src={carimg1} />

                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item  >
                                <Carousel.Item >
                                    <img className="img-fluid  w-auto" alt="Responsive image" src={carimg2} />

                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img className="img-fluid  w-auto" alt="Responsive image" src={carimg3} />

                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img className="img-fluid  w-auto" alt="Responsive image" src={carimg4} />

                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img className="img-fluid  w-auto" alt="Responsive image" src={carimg5} />

                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className = 'png text-right'>
                        <img className="img" alt="Responsive image" src={png} />
                    </div><br/>

                    <div class="form-check text-right">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label class="form-check-label" for="defaultCheck1">
                            Terms & Condition
                        </label>
                    </div>
                    
                    </div>


                    <div className = 'col'>
                        <h5>Listning Details</h5>
                        <div className = 'list' style={{ 'height': "100%", 'width': "500px" , 'margin-bottom' : '30px'}}>
                        <table>
                            <tr>
                                <td>Category</td>
                                <td>Car</td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>Brand New</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>Badulla</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>Gim@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Mobile</td>
                                <td>+94 77 123 4567</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>Rs. 10000000.00</td>
                            </tr>
                            <tr>
                                <td>Tags</td>
                                <td> - </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>2018 Range Rover Velar R Dynamic HSE 240 D<br/>
                                    10 inch Touch Pro<br/>
                                    Adaptive Cruise Control with Queue Assist<br/>
                                    Auto High Beam Assist (AHBA)<br/>
                                    Blind Spot Assist<br/>
                                    DAB (Digital Audio Broadcasting)<br/>
                                    Driver Drowsiness Monitor<br/>
                                    Forward-facing camera<br/>
                                    In Control Apps<br/>
                                    In Control Navigation Pro<br/>
                                    In Control Remote (subscription required)<br/>
                                    In Control Secure (subscription required)<br/>
                                    Interactive Driver Display<br/>
                                    Keyless Entry<br/>
                                    Lane Keep Assist with Road works Alert<br/>
                                    Meridian(TM) Digital Surround Sound System</td>
                            </tr>
                            </table>
                            <div className = 'row'>
                                <div className = 'col'>
                                    <div  style = {{'margin-top' : '30px'}}>
                                        <a href ="/post-ad">
                                            <button type="button" className="btn btn-warning ">EDIT AD</button>
                                        </a>
                                    </div>
                                </div>
                                <div className = 'col'>
                                    <div  style = {{'margin-top' : '30px' , 'margin-right' : '320px'}}>
                                        <a href ="/post-ad3">
                                            <button type="button" className="btn btn-warning "> NEXT </button>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                
                
                 
            </div>

        </div>

    );
}