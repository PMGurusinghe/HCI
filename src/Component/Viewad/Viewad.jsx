import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../Viewad/Viewad.css'
import carimg1 from '../images/15759810002.jpg'
import carimg2 from '../images/15759810005.jpg'
import carimg3 from '../images/15759810006.jpg'
import carimg4 from '../images/15759810007.jpg'
import carimg5 from '../images/15759810009.jpg'
import carimg6 from '../images/15905631350.jpg'
import carimg7 from '../images/15905631351.jpg'
import carimg8 from '../images/15905631352.jpg'
import carimg9 from '../images/15905631353.jpg'
/**images**/
import simi1 from '../images/similerads/simi1.jpg'
import simi2 from '../images/similerads/simi2.jpg'
import simi3 from '../images/similerads/simi3.jpg'
import simi4 from '../images/similerads/simi4.jpg'
import simi5 from '../images/similerads/simi5.jpg'
import simi6 from '../images/similerads/simi6.jpg'


/**ICONS**/
import { FaFileVideo } from "react-icons/fa"
import { ImLocation } from "react-icons/im"
import { CgMaximizeAlt } from "react-icons/cg"
import { MdContactPhone } from 'react-icons/md'
import { ImWhatsapp } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'

import { FaTasks, FaRegTrashAlt } from 'react-icons/fa'
import { FcCheckmark } from 'react-icons/fc'

export default class Viewad extends Component {

    render() {
        return (

            <div>
                <div class="row mt-3 ml-5">
                    <div class="col-sm-8">
                        <h3>Velar R Dynamic HSE 240</h3>
                        <p><i className="fa fa-map-marker" /> Kohuwala Showroom - VID220</p>
                    </div>


                    <div class="col-sm-4">
                        <button type="button" className="btn btn-warning mb-2 ml-5">Add to Favorite</button>
                        <button type="button" className="btn btn-warning mb-2 ml-2">Promote This Ad</button>
                        <input type="checkbox" id="check" /> <label className="btn btn-outline-danger mb-2 ml-2" htmlFor="check">Report Ad</label>
                        <div className="wrapper">
                            <div className="header">
                                <h4>Report This Ad</h4>
                            </div>
                            <div className="chat-form"><input type="text" className="form-control" placeholder="ID" />  <textarea className="form-control" placeholder="Your Text Message" defaultValue={""} /> <button className="btn btn-warning btn-block">Submit</button> </div>
                        </div>
                    </div>

                    <div class="carousal col-sm-6">
                        <div className='container mt-3 ml-5' >
                            <Carousel style={{ 'height': "100%", 'width': "90%" }}>
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
                                <Carousel.Item >
                                    <img className="img-fluid  w-auto" alt="Responsive image" src={carimg6} />

                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img className="img-fluid  w-auto" alt="Responsive image" src={carimg7} />

                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img className="img-fluid  w-auto" alt="Responsive image" src={carimg8} />

                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img className="img-fluid d-block w-auto" alt="Responsive image" src={carimg9} />

                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div class="btn-group">
                            <div className='btncenter mt-3'>
                                <div className="btn-toolbar mt-5 ml-5" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-2" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-secondary"><FaFileVideo size='2rem' />Video</button>
                                    </div>
                                    <div className="btn-group mr-2" role="group" aria-label="Second group">

                                        <button type="button" className="btn btn-secondary"><ImLocation size='2rem' />Location</button>

                                    </div>
                                    <div className="btn-group mr-2" role="group" aria-label="Third group">
                                        <button className="btn btn-secondary" data-toggle="collapse" data-target="#demo"><MdContactPhone size='2rem' />Contacts</button>

                                        <div id="demo" class="panel-collapse collapse">
                                            <h5><ImWhatsapp size='2rem' />070-3054972</h5>
                                            <h5><HiOutlineMail size='2rem' />madhushangurusinghe@gmail.com</h5>
                                        </div>
                                    </div>
                                    <div className="btn-group" role="group" aria-label="Fourth group">
                                        <button type="button" className="btn btn-secondary"><CgMaximizeAlt size='2rem' />Max</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 ml-5 mt-3">
                        {/* Car details sidebar start */}
                        <div className="car-details-sidebar ">

                            <ul>
                                <li><span><h3>LKR</h3></span>&nbsp;2500,000</li>
                                <li><span><h4>Down Payment:LKR</h4></span>1000,000</li>
                                <li><span><h5>LKR 0 Monthly</h5></span>&nbsp;208,000</li>
                            </ul>

                            <hr />
                            <h2 className="title">Specifications</h2>
                            <ul>
                                <li>
                                    <span>Make</span>&nbsp;LAND ROVER</li>
                                <li>
                                    <span>Model</span>&nbsp;Velar 240 HSE</li>
                                <li>
                                    <span>Body Style</span>&nbsp;SUV</li>
                                <li>
                                    <span>Year</span>&nbsp;2018</li>
                                <li>
                                    <span>Condition</span>&nbsp;Reconditioned</li>
                                <li>
                                    <span>Mileage</span>&nbsp;800 Km</li>
                                <li>
                                    <span>Interior Color</span>&nbsp;Black</li>
                                <li>
                                    <span>Exterior Color</span>&nbsp;Titanium</li>
                                <li>
                                    <span>Transmission</span>&nbsp;Auto</li>
                                <li>
                                    <span>Location</span>&nbsp;Kohuwala Showroom</li>
                                <li>
                                    <span>Fuel Type</span>&nbsp;Diesel</li>
                            </ul>
                        </div>
                        {/* Car details sidebar end */}
                    </div>



                </div>
                <div className='card p-1 ml-5 mr-5 mt-5'>
                    <div className='col-lg-12 col-md-8 col-sm-12 col-xs-12 d-flex ml-5'>
                        <br />
                        <div class="col-lg-4">
                            {/* About car start*/}
                            <div className="car-details-body about-car single-block">
                                <h2 className="title">General Information About Vehicle </h2>
                                <p>2018 Range Rover Velar R Dynamic HSE 240 D<br />
                        10 inch Touch Pro<br />
                        Adaptive Cruise Control with Queue Assist<br />
                        Auto High Beam Assist (AHBA)<br />
                        Blind Spot Assist<br />
                        DAB (Digital Audio Broadcasting)<br />
                        Driver Drowsiness Monitor<br />
                        Forward-facing camera<br />
                        In Control Apps<br />
                        In Control Navigation Pro<br />
                        In Control Remote (subscription required)<br />
                        In Control Secure (subscription required)<br />
                        Interactive Driver Display<br />
                        Keyless Entry<br />
                        Lane Keep Assist with Road works Alert<br />
                        Meridian(TM) Digital Surround Sound System<br />
                        Navigation Centre<br />
                        Navigation system - Region 1 (Europe)<br />
                        Park Assist<br />
                        Perimetric + volumetric alarm<br />
                        Pro Services and Wi-Fi Hotspot<br />
                        Rear Camera<br />
                        Reverse Traffic Detection<br />
                        SOS/Assistance Call<br />
                        Touch Screen - 8 inch high resolution<br />
                        Traffic Sign Recognition and Adaptive Speed Limiter<br />
                        Vehicle protection (Cat. 1)<br />
                        Voice recognition system<br />
                        Interior Features<br />
                        20-way Heated and Cooled, Memory, Massage front seats<br />
                        Ambient Interior Lighting<br />
                        Auto-dimming interior rear view mirror<br />
                        Bright metal pedals<br />
                        Electric seat adjustment + memory - driver &amp; passenger<br />
                        Electrically adjustable steering column<br />
                        Front powered seat bolsters<br />
                        Heated and cooled front seats<br />
                        Heated steering wheel<br />
                        Leather steering wheel with Chrome bezel<br />
                        Lumbar support - four-way, front seats<br />
                        Metal front tread plates with 'R-DYNAMIC' branding<br />
                        Power reclining rear seat<br />
                        Rear center folding armrest<br />
                        Satin Chrome gearshift paddles<br />
                        Seat squab - power recline<br />
                        Side door tread plates - metal<br />
                        Single front glove box<br />
                        Two-zone Climate Control<br />
                                    <br />

                                    <h2 className="title">Call Us For Further Details</h2>
                        0773 503 203 / 076 111 5557<br />
                        Leasing Facilities can be arranged</p>
                                <br />
                            </div>
                        </div>
                        <div class="col-lg-4 ml-3">
                            {/* Car details */}
                            <div className="car-details-sidebar ">
                                <h2 className="title">Exterior Features</h2>
                        Auto-dimming, power-fold, heated door mirrors with approach lights<br />
                        Black roof rails<br />
                        Body-coloured roof<br />
                        Bonnet louvres: 'Burnished Copper'<br />
                        Convex driver and passenger door mirrors<br />
                        Detachable tow bar<br />
                        Door mirror caps: Black Gloss<br />
                        Double locking<br />
                        Fixed panoramic roof<br />
                        Front fog lights<br />
                        Fuel filler flap (central locking)<br />
                        Gesture tailgate<br />
                        Headlight power wash<br />
                        Heated washer jets<br />
                        Heated windscreen<br />
                        Matrix LED headlights with signature DRL<br />
                        Toughened front and rear glass + privacy<br />
                        Powertrain<br />
                        8-speed automatic transmission<br />
                        Adaptive Dynamics<br />
                        All-Wheel Drive (AWD)<br />
                        Front &amp; rear coil suspension<br />
                        Rear axle open differential<br />
                        Stop / Star<br />
                        Terrain Response<br />
                        Interior Trim<br />
                        'Ebony' headlining<br />
                        Extended leather upgrade<br />
                        Front and rear carpet mats<br />
                        Front head restraints: manual, winged<br />
                        Grand Black veneer<br />
                        Metal loadspace scuff plate<br />
                        Morzine headlining<br />
                        Perforated Windsor leather seats<br />
                        Premium Leather console<br />
                        Wheels and Tyres<br />
                        21" Alloys - 10 spoke 'Style 1033', Satin Dark Grey finish<br />
                        Full size spare wheel<br />
                        Locking wheel nuts<br />
                        Tyre Pressure Monitoring System (TPMS)<br />
                        Packs<br />
                        Exterior Pack<br />
                        Power Socket Pack 1<br />
                                <br />

                            </div>
                            {/* Car details sidebar end */}
                        </div>

                        {/* Similer Ads */}
                        <div class="col-sm-3 mt-5 ml-5">
                            <h3>Similer Ads</h3>

                            <div className="mngads scroll-area-sm " style={{ 'height': '165vh' }}>

                                <perfect-scrollbar className="ps-show-limits">
                                    <div style={{ position: 'static' }} className="ps ps--active-y">
                                        <div className="ps-content">

                                            <ul className=" list-group list-group-flush">

                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-2">

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-7"> <img className="card-img-top" style={{ 'width': '220px' }} src={simi1} alt="Card image cap" /></div>
                                                                <div className="card-header">Header</div>
                                                                <div className="card-body text-primary">
                                                                    <h5 className="card-title">Primary card title</h5>
                                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-2">

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-7"> <img className="card-img-top" style={{ 'width': '220px' }} src={simi2} alt="Card image cap" /></div>
                                                                <div className="card-header">Header</div>
                                                                <div className="card-body text-primary">
                                                                    <h5 className="card-title">Primary card title</h5>
                                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-2">

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-7"> <img className="card-img-top" style={{ 'width': '220px' }} src={simi3} alt="Card image cap" /></div>
                                                                <div className="card-header">Header</div>
                                                                <div className="card-body text-primary">
                                                                    <h5 className="card-title">Primary card title</h5>
                                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-2">

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-7"> <img className="card-img-top" style={{ 'width': '220px' }} src={simi4} alt="Card image cap" /></div>
                                                                <div className="card-header">Header</div>
                                                                <div className="card-body text-primary">
                                                                    <h5 className="card-title">Primary card title</h5>
                                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-2">

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-7"> <img className="card-img-top" style={{ 'width': '220px' }} src={simi5} alt="Card image cap" /></div>
                                                                <div className="card-header">Header</div>
                                                                <div className="card-body text-primary">
                                                                    <h5 className="card-title">Primary card title</h5>
                                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-2">

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-7"> <img className="card-img-top" style={{ 'width': '220px' }} src={simi6} alt="Card image cap" /></div>
                                                                <div className="card-header">Header</div>
                                                                <div className="card-body text-primary">
                                                                    <h5 className="card-title">Primary card title</h5>
                                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </perfect-scrollbar>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        )
    }

}