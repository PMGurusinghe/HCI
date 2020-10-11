import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidenav from './Sidenav/Sidenav'
import { Switch } from 'react-router-dom';
import './Myaccount.css'
import imagepropic from '../images/images.png'
class Myaccount extends Component {
    render() {
        return (
            <div className='d-flex'>

        <Route>
             <Switch>
             <Route exact component={Sidenav}></Route>
             </Switch>
         </Route>
               
                {/**PRofile details**/}
                
                <ul className="nav">
                    <li className="nav-item"> <div className="box box-widget widget-user">
                        <div className="widget-user-header bg-aqua-active">
                            <h3 className="widget-user-username">Alexander Pierce</h3>
                            <h5 className="widget-user-desc">Founder &amp; CEO</h5>
                            <div className="widget-user-image"> <img className="img-circle" src={imagepropic} alt="User Avatar" /> </div>
                        </div>
                      
                       
                        <div className="box-footer">
                            <div className="row">
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header">3,200</h5> <span className="description-text">SALES</span>
                                    </div>
                                </div>
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header">13,000</h5> <span className="description-text">FOLLOWERS</span>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="description-block">
                                        <h5 className="description-header">35</h5> <span className="description-text">PRODUCTS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>

                </ul>

            </div>





        );
    }
}

export default Myaccount;