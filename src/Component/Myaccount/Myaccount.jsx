import React, { Component } from 'react';
import './Myaccount.css'
class Myaccount extends Component {
    render() {
        return (
            <div>


                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>USER PROFILE</h3>
                        <hr />
                    </div>
                    <ul className="list-unstyled components">
                        <p>MENUS</p>
                        <li> <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Dashboard</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li> <a href="#">Dashboard1</a> </li>
                                <li> <a href="#">Dashboard2</a> </li>
                                <li> <a href="#">Dashboard3</a> </li>
                            </ul>
                        </li>
                        <li> <a href="#">Users</a> </li>
                        <li> <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Subscribers</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li> <a href="#">Active</a> </li>
                                <li> <a href="#">Idle</a> </li>
                                <li> <a href="#">Non Active</a> </li>
                            </ul>
                        </li>
                        <li> <a href="#">Timeline</a> </li>
                        <li> <a href="#">Live Chat</a> </li>
                        <li> <a href="#">Likes</a> </li>
                        <li> <a href="#">Comments</a> </li>
                    </ul>
                    <ul className="list-unstyled CTAs">
                        <li> <a href="#" className="download">Subscribe</a> </li>
                    </ul>
                </nav>
                <div className="content">

                </div>

                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="col-md-4">
                                <div className="box box-widget widget-user">
                                    <div className="widget-user-header bg-aqua-active">
                                        <h3 className="widget-user-username">Alexander Pierce</h3>
                                        <h5 className="widget-user-desc">Founder &amp; CEO</h5>
                                    </div>
                                    <div className="widget-user-image"> <img className="img-circle" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="User Avatar" /> </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Myaccount;