import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav'
import { Switch } from 'react-router-dom';
import '../Myaccount.css'
import imagepropic from '../../images/images.png'

class Editprofile extends Component {
    render() {
        return (
            <div className='d-flex'>
     <Route>
             <Switch>
             <Route component={Sidenav}></Route>
             </Switch>
         </Route>

                <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-5 ml-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Edit Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" defaultValue /></div>
                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" defaultValue placeholder="surname" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">PhoneNumber</label><input type="text" className="form-control" placeholder="enter phone number" defaultValue /></div>
                <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address" defaultValue /></div>
                <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" defaultValue /></div>
                
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" defaultValue /></div>
                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" defaultValue placeholder="state" /></div>
              </div>
              <div className="mt-5 text-center"><button className="btn btn-warning profile-button" type="button">Save Profile</button></div>
            </div>
          </div>
      
          <div className="col-md-5 border-right ml-5">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src={imagepropic} /><span className="font-weight-bold">Amelly</span><span className="text-black-50">amelly12@bbb.com</span><span> </span></div>
          </div>
        </div>
      </div>
            </div>





        );
    }
}

export default Editprofile;