import React, { Component } from 'react'
import "./Myaccount.css"

export default class Myaccount extends Component {
    render() {
        return (
     <div className='myaccount-parent'>
         <div className='sidebar-nav'>
            <h2>User Options</h2>
           </div>
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
            </div>
           
            </div> 
       
         <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
            </div>
    </div>
        )
    }
}
