import React, { Component } from 'react';
import './Sidenav.css'
class sidenav extends Component {
    render() {
        return (
          
            <nav id="sidebar">
            <div className="sidebar-header">
                <h2>USER PROFILE</h2>
                <hr />
            </div>
            <ul className="list-unstyled components">
            <li> <a href="/Myaccount"><h4>My Dashboard</h4></a> </li>
                <li> <a href="/Editprofile">Edit Profile</a> </li>
                <li> <a href="/Favorits">Favorites</a> </li>
                <li> <a href="/Manageads">Manage My Ads</a> </li>
                <li> <a href="/Mystatistics">My Statistic</a> </li>
            </ul>
          
        </nav>
        );
    }
}

export default sidenav;