import React, { Component } from 'react'
import './NavigationHeader.css';

export default class NavigationHeader extends Component {
  render() {
    return (
      <div className='nav-parent'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <a className="navbar-brand h4" href="/">Vikka.lk</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav h6 ml-auto">

              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/Search">All Ads <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/Myaccount">My Profile <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/about-us">About Us <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/feedback">Contact Us <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item active ">
                <a className="nav-link text-warning" href="/sign">Sign Up <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item active mr-3">
                <a className="nav-link text-warning" href="/Body">Sign In<span className="sr-only">(current)</span></a>
              </li>

              <a href ="/post-ad"><button type="button" className="btn btn-warning" >POST YOUR AD</button></a>

            </ul>
          </div>
        </nav>
        <div className="serch-container input-group p-4">
          <select className="rounded ml-5">
            <option>Select a Location</option>
            <option>Colombo</option>
            <option>Kandy</option>
            <option>Galle</option>
            <option>Ampara</option>
            <option>Anuradhapura</option>
            <option>Badulla</option>
            <option>Batticaloa</option>
            <option>Gampaha</option>
            <option>Hambantota</option>
            <option>Jaffna</option>
            <option>Kalutara</option>
            <option>Kegalle</option>
            <option>Kilinochchi</option>
            <option>Kurunegala</option>
            <option>Mannar</option>
            <option>Matale</option>
            <option>Matara</option>
            <option>Monaragala</option>
            <option>Mullativu</option>
            <option>Nuwara Eliya</option>
            <option>Polonnaruwa</option>
            <option>Puttalam</option>
            <option>Ratnapura</option>
            <option>Kurunegala</option>
            <option>Trincomalee</option>
            <option>Vavuniya</option>
          </select>
          <select className="rounded ml-3">
            <option>Select a Category</option>
            <option>Essentials</option>
            <option>Electronics</option>
            <option>Vehicles</option>
            <option>Property</option>
            <option>Jobs in Sri Lanka</option>
            <option>Work Overseas</option>
            <option>Home & Garden</option>
            <option>Fashion & Beauty</option>
            <option>Hobby, Sport & Kids</option>
            <option>Business & Industry</option>
            <option>Services</option>
            <option>Education</option>
            <option>Animals</option>
            <option>Agriculture</option>
            <option>Other</option>
          </select>
          <input className="rounded ml-3" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className=" rounded ml-3 btn btn-warning" type="submit">Search</button>
          </div>
        </div>
      </div >

    )
  }
}
