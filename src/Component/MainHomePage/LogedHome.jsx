import React, { Component } from 'react';
import NavigationHeader from "../NavigationHeader/NavigationHeader";


class logedHome extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar-logo">Welocome to the Vikka</div>
                    <ul className="sidebar-navigation">
                        <li className="header">Profile</li>
                        <li>
                            <a href="#">
                                <i className="fa fa-edit" aria-hidden="true"></i>Edit profile
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-logout" aria-hidden="true"></i>Log out
                            </a>
                        </li>
                        <li className="header">Ads management</li>
                        <li>
                            <a href="#">
                                <i className="fa fa-manage" aria-hidden="true"></i>Manage your ads
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-post" aria-hidden="true"></i>Post your ad
                            </a>
                        </li>
                        <li className="header">Categories</li>
                        <li>
                            <a href="#">
                                <i className="fa fa-all" aria-hidden="true"></i>Ad categories
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-top" aria-hidden="true"></i>Top categories
                            </a>
                        </li>
                </ul>

                <div className="content-container">
                    <div className="container-fluid">

                    </div>
                </div>
            </div>
        );
    }
}

export default logedHome;
