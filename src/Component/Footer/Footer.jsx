import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { ImFacebook2 } from 'react-icons/im'
import { FaTwitterSquare, FaInstagramSquare, FaYoutube ,FaGooglePlay } from 'react-icons/fa'
import { ImAppleinc } from 'react-icons/im'

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
                      <button className="btn btn-outline-light btn-icon-text"> <ImAppleinc className='mb-2 mr-1' size='2rem' /> <span className="d-inline-block text-left"> <small className="font-weight-light d-block">Available on the</small> App Store </span> </button>
                      <button className="btn btn-outline-light btn-icon-text ml-2"> <FaGooglePlay className='mb-2 mr-1' size='2rem' /> <span className="d-inline-block text-left"> <small className="font-weight-light d-block">Get it on the</small> Google Play </span> </button> </div>
                  </div>
                </div>

                <br>
                </br>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title ml-2">Tips & Help</h5>
                <ul className="col-auto justify-content-center" >
                <li className="list-unstyled mt-3">
                    <a href="/sellfast">How to Sell Fast</a>
                  </li>
                  <li className="list-unstyled ">
                    <a href="#!">About Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Contact Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Blog</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/Card">Help</a>
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
                <div className="heading d-flex justify-content-center align-items-center">
                  <ul className="social-icons">
                    <li> <a href="https://www.facebook.com/vikkalkk/"><ImFacebook2 color='white' size='1rem' /></a></li>
                    <li><a href="https://twitter.com/vikkalk"><FaTwitterSquare color='white' size='1.1rem' /></a> </li>
                    <li><a href="https://www.instagram.com/explore/tags/vikka/?hl=en"><FaInstagramSquare color='white' size='1.1rem' /></a> </li>
                    <li> <a href="https://www.youtube.com/"><FaYoutube color='white' size='1.51rem' /></a></li>
                  </ul>
                </div>

                <div className="social_media"></div>
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