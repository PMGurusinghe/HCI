import React, { Component } from 'react'
import "./Myaccount.css"
import { FcEditImage,FcComboChart,FcLineChart } from "react-icons/fc"
import {BsFillStarFill} from 'react-icons/bs'
export default class Myaccount extends Component {
  render() {
    return (

      <div className="wrapper">
        <div className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li><a href="#"><FcEditImage size='2rem'/>  Edit Profile</a></li>
            <li><a href="#"><FcLineChart size='2rem'/>  Clasified Ads</a></li>
            <li><a href="#"><BsFillStarFill color='red' size='1.9rem'/>  Favorites</a></li>
            <li><a href="#"><FcComboChart size='2rem'/>  Account Statistic</a></li>
          </ul>

        </div>
        <div className="main_content">
          <div className="header d-flex"><h3>Welcome back, pamod Madhushan</h3>
            <div className="d-flex flex-md-row ml-auto">
              <div className="p-md-2"> <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="" className="rounded-circle" id="profile" /> </div>
              <div className="p-md-2 p-1 " id="info">
                <h5>Pamod Madhushan</h5>
                <div className="p-md-2 p-1 ">Seller</div>
              </div>
            </div>
          </div>

          <div>
            <div className="container border-bottom bg-white pt-md-3 pt-2">
              <div className="d-flex flex-md-row justify-content-around align-items-center">

                <div className="d-flex flex-column" id="info">
                  <div className="p-md-1 text-muted"> <span className="fa fa-envelope-o bg-light p-1 rounded-circle" /> robertmiller@saviynt.com</div>
                  <div className="p-md-1 pt-sm-1 text-muted"> <span className="fa fa-phone bg-light p-1 rounded-circle" /> +(555) 555-1234</div>
                </div>
                <div className="rounded p-lg-2 p-1" id="blue-background">
                  <div className="d-flex flex-md-row align-items-center">
                    <div className="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1" id="border-right">
                      <p className="h4">40</p>
                      <div className="text-muted" id="count">Application</div>
                    </div>
                    <div className="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1" id="border-right">
                      <p className="h4">117</p>
                      <div className="text-muted" id="count">Accounts</div>
                    </div>
                    <div className="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1" id="border-right">
                      <p className="h4">58</p>
                      <div className="text-muted" id="count">Entitlements</div>
                    </div>
                    <div className="d-flex flex-column align-items-center px-lg-4 px-md-2 px-sm-1 px-2">
                      <p className="h4">03</p>
                      <div className="text-muted" id="count">Roles</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-lg-5 pt-lg-2 pt-md-1">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation"> <a href="#user" className="nav-link active" id="user-tab" data-toggle="tab" role="tab" aria-controls="user" aria-selected="true">User Profile</a> </li>
                  <li className="nav-item" role="presentation"> <a href="#user" className="nav-link text-muted" data-toggle="tab" role="tab" aria-controls="access" aria-selected="false">Access</a> </li>
                  <li className="nav-item" role="presentation"> <a href="#user" className="nav-link text-muted" data-toggle="tab" role="tab" aria-controls="settings" aria-selected="false">Settings</a> </li>
                </ul>
              </div>
            </div>
            <div className="tab-content w-100 pt-md-0">
              <div className="tab-pane show active" id="user" role="tabpanel" aria-labelledby="user-tab">
                <div className="container rounded-bottom bg-light">
                  <div className="row pl-lg-5 pt-md-0 pt-sm-2">
                    <div className="col-md-6 py-md-4">
                      <div className="d-flex flex-row">
                        <div className="btn border-dark mr-md-3 details">User Details</div>
                        <div className="btn border-primary text-primary selected-tab">User Timeline</div>
                      </div>
                      <div className="d-flex flex-row justify-content-start align-items-center pt-md-4 pb-md-3 pt-sm-2 border-bottom timeline">
                        <div className="p-md-2 pl-sm-2 mt-sm-1 font-weight-bold">User Timeline</div>
                        <div className="p-md-2 pt-sm-1 p-2 ml-auto border rounded text-muted bg-white">07 Apr-07 Jul 2019<span className="fa fa-calendar-o pl-sm-1 pl-1" /></div>
                        <div className="p-md-2 p-sm-1 p-2 text-muted bg-white border rounded ml-sm-1"><span className="fa fa-sliders" /></div>
                      </div>
                      <div className="text-secondary year">2019 <span className="fa fa-angle-down" /></div>
                      <div className="d-flex flex-row pt-5 ml-md-0 ml-sm-5">
                        <div className="d-flex flex-column text-muted mr-md-3 dates">
                          <div className="mb-5">APR 07 WED</div>
                          <div className="my-5">MAY 12 TUE</div>
                          <div className="mt-4 pt-3">JUL 07 SAT</div>
                        </div>
                        <div className="progress vertical-progress">
                          <div id="dot1" />
                          <div id="dot2" />
                          <div id="dot3" />
                          <div className="progress-bar progress-bar-default" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="d-flex flex-column border bg-white ml-md-5 p-sm-0 p-1" id="status1">
                          <div id="arrow" />
                          <div className="text-dark font-weight-bold pl-sm-2">Robert Miller <span className="text-primary">Joined</span> </div>
                          <div className="text-muted pl-sm-2">Product Manager</div>
                        </div>
                        <div className="d-flex flex-column border bg-primary ml-md-5 p-sm-0 p-1" id="status2">
                          <div id="bluearrow" />
                          <div className="text-white font-weight-bold pl-sm-2">Settings has been changed</div>
                          <div className="text-white pl-sm-2">(Notification &amp; security question)</div>
                        </div>
                        <div className="d-flex flex-column border bg-white ml-md-5 p-sm-0 p-1" id="status3">
                          <div id="arrow" />
                          <div className="text-dark font-weight-bold pl-md-2 pl-sm-2">Reviews,success assessments etc. </div>
                          <div className="pl-md-2 pl-sm-2 font-weight-bold" id="task">completed</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 pt-md-5 mt-5">
                      <div className="mt-lg-0 mt-md-4"> <b>Detail View</b> </div>
                      <div className="bg-white border rounded view">
                        <div className="d-flex flex-row justify-content-start">
                          <div className="bg-light text-muted">2019</div>
                        </div>
                        <div className="d-flex flex-row align-items-center pt-3">
                          <div className="d-flex flex-column align-items-center px-lg-5 px-md-3 px-sm-5 px-3 day">
                            <div>MAY</div>
                            <div>
                              <h5>12</h5>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div className="pr-sm-2 pr-1"> <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="" width={50} height={50} className="rounded-circle" /> </div>
                            <div className="d-flex flex-column">
                              <div><b>Robert Miller</b></div>
                              <div id="small-font">02 changes has been done 03 years ago</div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center ml-lg-5 ml-md-4 mt-md-3 mr-md-2 mb-md-2 mx-3">
                          <div className="d-flex flex-column justify-content-center mt-md-3 mt-2 ml-md-0 ml-sm-2">
                            <div className="pb-2"><b>Notification</b></div>
                            <div className="d-flex flex-row align-items-center mt-md-1 p-md-2 rounded border">
                              <div className="p-1"><span className="fa fa-shield" /></div>
                              <div className="p-1" id="small-font">Send me reminder of my password expiration</div>
                              <div className="text-success p-1 updated">Updated</div>
                            </div>
                            <div className="pb-2 pt-2"><b>Trouble signing in</b></div>
                            <div className="d-flex flex-row align-items-center mt-md-1 p-md-2 rounded border">
                              <div className="p-1"><span className="fa fa-shield" /></div>
                              <div className="p-1" id="small-font">I need to reset security question</div>
                              <div className="text-success p-1 ml-auto">Updated</div>
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
        </div>
      </div>
    )
  }
}
