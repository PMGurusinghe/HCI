import React, { Component } from 'react';
import './Sidenav.css'
import imagepropic from '../../images/images.png'

class sidenav extends Component {
    render() {
        return (
          
            <nav id="sidebar">
            <div className="sidebar-header">
                <h3>USER PROFILE</h3>
                <div className="widget-user-image mt-4 ml-5"> <img className="img-circle" style={{'width':'100px'}}  src={imagepropic} alt="User Avatar" /> </div>
                <hr />
            </div>
            <ul className="list-unstyled components">
            <li> <a href="/Myaccount"><h4>My Dashboard</h4></a> </li>
                <li> <a href="/Editprofile">Edit Profile</a> </li>
                <li> <a href="/Favorits">Favorites</a> </li>
                <li> <a href="/Manageads">Manage My Ads</a> </li>
            </ul>
          
        </nav>
        );
    }
}

export default sidenav;