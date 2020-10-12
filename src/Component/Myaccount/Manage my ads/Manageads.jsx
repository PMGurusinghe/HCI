import React, { Component } from 'react'
import '../Manage my ads/Manageads.css';
import { Route } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav'
import { Switch } from 'react-router-dom';
import { FaTasks, FaRegTrashAlt } from 'react-icons/fa'
import { FcCheckmark } from 'react-icons/fc'
/**images**/
import carimgf2 from '../../images/i8.jpg'
import Hcycle from '../../images/Hcycle.jpg'
import nokia from '../../images/nokia.jpg'
import properties from '../../images/Properties.jpg'

export default class Manageads extends Component {
  render() {
    return (
      <div className='d-flex'>
        <Route>
          <Switch>
            <Route component={Sidenav}></Route>
          </Switch>
        </Route>
        <div className=" row d-flex justify-content-center container-fluid">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header-tab card-header">
                <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><FaTasks size='1.5rem' />&nbsp;&nbsp;<h4>Manage Ads List</h4></div>
              </div>
              <div className="mngads scroll-area-sm">
                <perfect-scrollbar className="ps-show-limits">
                  <div style={{ position: 'static' }} className="ps ps--active-y">
                    <div className="ps-content">

                      <ul className=" list-group list-group-flush">

                        <li className="list-group-item">
                          <div className="todo-indicator bg-warning" />
                           <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-2">
                                <div className="custom-checkbox custom-control">
                                  <input className="custom-control-input" id="exampleCustomCheckbox12" type="checkbox" />
                                  <label className="custom-control-label" htmlFor="exampleCustomCheckbox12">&nbsp;</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-7"> <img className="card-img-top" style={{ 'width': '220px' }} src={carimgf2} alt="Card image cap" /></div>
                                <div className="col-sm-5">
                                  <h4>Call Sam For payments</h4>
                                  <h5>sssssds</h5>
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <button className="border-0 btn-transition btn btn-outline-success"> <FcCheckmark size='1.5rem' />  </button>
                                <button className="border-0 btn-transition btn btn-outline-danger">  <FaRegTrashAlt size='1.5rem' /> </button> </div>
                            </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="todo-indicator bg-warning" />
                           <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-2">
                                <div className="custom-checkbox custom-control">
                                  <input className="custom-control-input" id="exampleCustomCheckbox12" type="checkbox" />
                                  <label className="custom-control-label" htmlFor="exampleCustomCheckbox12">&nbsp;</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-7"> <img className="card-img-top" style={{ 'width': '220px' }} src={Hcycle} alt="Card image cap" /></div>
                                <div className="col-sm-5">
                                  <h4>Call Sam For payments</h4>
                                  <h5>sssssds</h5>
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <button className="border-0 btn-transition btn btn-outline-success"> <FcCheckmark size='1.5rem' />  </button>
                                <button className="border-0 btn-transition btn btn-outline-danger">  <FaRegTrashAlt size='1.5rem' /> </button> </div>
                            </div>
                          </div>
                        </li>


                        <li className="list-group-item">
                          <div className="todo-indicator bg-warning" />
                           <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-2">
                                <div className="custom-checkbox custom-control">
                                  <input className="custom-control-input" id="exampleCustomCheckbox12" type="checkbox" />
                                  <label className="custom-control-label" htmlFor="exampleCustomCheckbox12">&nbsp;</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-7"> <img className="card-img-top" style={{ 'width': '220px' }} src={properties} alt="Card image cap" /></div>
                                <div className="col-sm-5">
                                  <h4>Call Sam For payments</h4>
                                  <h5>sssssds</h5>
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <button className="border-0 btn-transition btn btn-outline-success"> <FcCheckmark size='1.5rem' />  </button>
                                <button className="border-0 btn-transition btn btn-outline-danger">  <FaRegTrashAlt size='1.5rem' /> </button> </div>
                            </div>
                          </div>
                        </li>

                        
                        <li className="list-group-item">
                          <div className="todo-indicator bg-warning" />
                           <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-2">
                                <div className="custom-checkbox custom-control">
                                  <input className="custom-control-input" id="exampleCustomCheckbox12" type="checkbox" />
                                  <label className="custom-control-label" htmlFor="exampleCustomCheckbox12">&nbsp;</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-7"> <img className="card-img-top" style={{ 'width': '220px' }} src={nokia} alt="Card image cap" /></div>
                                <div className="col-sm-5">
                                  <h4>Call Sam For payments</h4>
                                  <h5>sssssds</h5>
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <button className="border-0 btn-transition btn btn-outline-success"> <FcCheckmark size='1.5rem' />  </button>
                                <button className="border-0 btn-transition btn btn-outline-danger">  <FaRegTrashAlt size='1.5rem' /> </button> </div>
                            </div>
                          </div>
                        </li>


                        
                      </ul>
                    </div>
                  </div>
                </perfect-scrollbar>
              </div>

            </div>
          </div>
        </div>
      </div>

    )
  }
}
