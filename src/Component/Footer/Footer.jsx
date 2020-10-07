import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {ImFacebook2} from 'react-icons/im'
import {FaTwitterSquare,FaInstagramSquare,FaYoutube} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (

    <div className='footer'>
      <div className='content-center'>
        <MDBFooter className="font-small pt-4 mt-4 ml-2">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="4">
                <h5 className="title">Download our app</h5>
                <div className="padding">
                  <div className="row container d-flex ">
                    <div className="template-demo mt-2">
                      <button className="btn btn-outline-dark btn-icon-text"> <i className="fa fa-apple btn-icon-prepend mdi-36px" /> <span className="d-inline-block text-left"> <small className="font-weight-light d-block">Available on the</small> App Store </span> </button>
                      <button className="btn btn-outline-dark btn-icon-text ml-2"> <i className="fa fa-android btn-icon-prepend mdi-36px" /> <span className="d-inline-block text-left"> <small className="font-weight-light d-block">Get it on the</small> Google Play </span> </button> </div>
                  </div>
                </div>

                <br>
                </br>
                <h5 className="title">Connect with us</h5>
                <div className="padding">
                  <div className="row container d-flex ">
                    <div className="template-demo mt-2">
                      <button className="btn btn-primary btn-icon-text ml-2"> <i className="fa fa-android btn-icon-prepend mdi-36px" /> <span className="d-inline-block text-left"> Like Us on Facebook</span> </button> </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title ml-2">Tips & Help</h5>
                <ul className="col-auto justify-content-center" >
                  <li className="list-unstyled mt-3">
                    <a href="#!">About Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Contact Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Blog</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Help</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title ml-2">Legal Bits</h5>
                <ul className="col-auto justify-content-center">
                  <li className="list-unstyled mt-3">
                    <a href="#!">Terms of Use</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Privacy Policy</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Posting Policy</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Cookie Policy</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title ml-2">Navigation</h5>
                <ul className="col-auto justify-content-centre">
                  <li className="list-unstyled mt-3">
                    <a href="#!">My Profile</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Contact Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Post Your Ad</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
           
          </MDBContainer>
          <div className='copyright'>
            <div className="footer-copyright  py-4">
              <MDBContainer fluid>
              <div className="social_media"> <a href="https://www.facebook.com/vikkalkk/"><ImFacebook2 size='1rem'/></a> <a href="https://twitter.com/vikkalk"><FaTwitterSquare size='1.1rem'/></a> <a href="https://www.instagram.com/explore/tags/vikka/?hl=en"><FaInstagramSquare size='1.1rem'/></a> <a href="https://www.youtube.com/"><FaYoutube size='1.51rem'/></a></div>
                &copy; {new Date().getFullYear()} Vikka.lk by Fantastic_Five & Company. All Rights Reserved.
          </MDBContainer>
            </div>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
}

export default Footer;