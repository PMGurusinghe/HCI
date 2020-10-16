import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidenav from './Sidenav/Sidenav'
import { Switch } from 'react-router-dom';
import './Myaccount.css'
/**Images**/

import Rhome from '../images/Rhome.jpg'
import dogs from '../images/dogs.jpg'
import lap from '../images/lap.jpg'
/**Icons**/
import {BsEye} from 'react-icons/bs'

class Myaccount extends Component {
    render() {
        return (
            <div className='background d-flex'>

                <Route>
                    <Switch>
                        <Route exact component={Sidenav}></Route>
                    </Switch>
                </Route>

                {/**PRofile details**/}

                <ul className="container-fluid navbar-nav">

                    <li className="nav-item">
                        <div className="box box-widget widget-user">
                        <div className="widget-user-header ">
                            <div className='d-flex'><h3 className="widget-user-username">Pamod Gurusinghe</h3>
                                <h3 className="widget-user-username">Pamod Gurusinghe</h3>
                            </div>
                            <h5 className="widget-user-desc">Seller</h5>
                            
                        </div>


                    </div></li>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="justify-content-center">
                                    <div className="card ">
                                        <div className="div1 p-2 p-md-3 ">
                                            <h5>Vancouver</h5>
                                            <h1>18<sup>°C </sup> </h1>
                                            <p className="my-0">Feels like 14</p>
                                            <h4 className="my-0">Mostly clear</h4>
                                        </div>
                                        <div className="div2"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="justify-content-center">
                                    <div className="card ">
                                        <div className="div1  p-md-3 ">

                                            <div className='d-flex  p-md-4'>
                                                <div className="col-xl-3 col-md-6">
                                                    <h6>Completed Work</h6>
                                                    <h5 className="m-b-30 f-w-700">532<span className="text-c-green m-l-10">+1.69%</span></h5>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-c-red" style={{ width: '25%' }} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <h6>Incomplete Work</h6>
                                                    <h5 className="m-b-30 f-w-700">4,569<span className="text-c-red m-l-10">-0.5%</span></h5>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-c-blue" style={{ width: '65%' }} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <h6>Ongoing Work</h6>
                                                    <h5 className="m-b-30 f-w-700">89%<span className="text-c-green m-l-10">+0.99%</span></h5>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-c-green" style={{ width: '85%' }} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <h6>Ongoing Digs</h6>
                                                    <h5 className="m-b-30 f-w-700">365<span className="text-c-green m-l-10">+0.35%</span></h5>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-c-yellow" style={{ width: '45%' }} />
                                                    </div>
                                                </div></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='card mt-3 mb-3'>
                            <div className="jumbotron text-center mt-5 ml-5 mr-5">
                                <h2>Do you have something to sell?</h2>
                                <h3>Post your ad on ikman.lk</h3>
                                <a href='/post-ad'>
                                <button type="button" className="btn btn-warning mt-4"><h6>Post Your Ad Here</h6></button>
                                </a>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col mb-5"> 
                                    <div className="justify-content-center">
                                        <div className="card ">
                                        <h4 className='mt-3 ml-3 mb-3 '>Recently Viewed Ads</h4>
                                            <div className="div1 d-flex p-2 p-md-5 ">
                                                
                                                <div className="card ml-4 mr-5" style={{ width: '18rem' }}>
                                                    <img className="card-img-top" src={Rhome} alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">A Architect Designed Two Story Luxury House in Nearby Kottawa</h5>
                                                        <p className="card-text">Beds:4<br/>
                                                                                 Baths:3
                                                                                 House size:2,800.0 sqft <br/>      
                                                                                 Land size: 6.2 perches</p>       
                                                                                 <button type="button" class="buttond btn btn-outline-warning"><BsEye  size='1.5rem' /> View</button>
                                                    </div>
                                                </div>
                                               
                                                <div className="card mr-5 ml-1" style={{ width: '18rem' }}>
                                                    <img className="card-img-top" src={dogs} alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Golden Retriever</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <button type="button" class="buttond btn btn-outline-warning"><BsEye  size='1.5rem' /> View</button>
                                                    </div>
                                                </div>
                                               
                                                <div className="card ml-1" style={{ width: '18rem' }}>
                                                    <img className="card-img-top" src={lap}alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">ASUS Laptop ZenBook UX434FLC-XH77 Intel Core i7 10th</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <button type="button" class="buttond btn btn-outline-warning"><BsEye  size='1.5rem' /> View</button>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                            <div className="div2"> </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </ul>
            </div>






        );
    }
}

export default Myaccount;