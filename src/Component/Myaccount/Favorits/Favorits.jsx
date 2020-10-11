import React, { Component } from 'react';
import './Favorits.css'
import { Route } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav'
import { Switch } from 'react-router-dom';

import carimgf1 from '../../images/15905631353.jpg'
import carimgf2 from '../../images/i8.jpg'
import carimgf3 from '../../images/GT.jpg'
import carimgf4 from '../../images/15905631353.jpg'
import imgfbike1 from '../../images/KTM.jpg'
import imgfbike2 from '../../images/KTM250.jpg'
import phoneimgf1 from '../../images/i11.jpg'

import { MdDelete } from "react-icons/md"
class Favorits extends Component {
    render() {
        return (
            <div className='d-flex'>
                <Route>
                    <Switch>
                        <Route component={Sidenav}></Route>
                    </Switch>



                    <div className="card-columns">
                        <div className="card bg-light rounded">
                            <img className="card-img-top" src={carimgf1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button type="button" class="buttond btn btn-outline-warning"><MdDelete  size='1.5rem' /> Remove</button>
                            </div>
                        </div>
                        <div className="card bg-light rounded">
                            <img className="card-img-top" src={imgfbike1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button type="button" class="buttond btn btn-outline-warning"><MdDelete  size='1.5rem' /> Remove</button>
                            </div>
                        </div>
                        <div className="card bg-light rounded">
                            <img className="card-img-top" src={carimgf2} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <button type="button" class="buttond btn btn-outline-warning"><MdDelete  size='1.5rem' /> Remove</button>
                            </div>
                        </div>
                        <div className="card bg-light rounded">
                            <img className="card-img-top" src={phoneimgf1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <button type="button" class="buttond btn btn-outline-warning"><MdDelete  size='1.5rem' /> Remove</button>
                            </div>
                        </div>
                        <div className="card bg-light rounded">
                            <img className="card-img-top" src={imgfbike2} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button type="button" class="buttond btn btn-outline-warning"><MdDelete  size='1.5rem' /> Remove</button>
                            </div>
                        </div>
                        <div className="card bg-light rounded">
                            <img className="card-img-top" src={carimgf3} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <button type="button" class="buttond btn btn-outline-warning"><MdDelete  size='1.5rem' /> Remove</button>
                            </div>
                        </div>
                      
                    </div>
                </Route>
            </div>

        );
    }
}

export default Favorits;