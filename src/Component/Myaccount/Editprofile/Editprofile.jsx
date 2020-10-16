import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav'
import { Switch } from 'react-router-dom';
import '../Myaccount.css'
import imagepropic from '../../images/images.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
class Editprofile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      text: '',
      age: '',
      nameErr:'',
      emailErr:'',
         
    };
  }
  saveData=(e)=>{
    e.preventDefault();
    console.log("gg",this.state.name)
    if(this.state.name=="" || this.state.email=="" || this.state.subject=="" || this.state.text=="")
    toast.error("Complete All Feilds! ");
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err='';
    let err2='';
   
   this.setState({[nam]: val});
   
     switch(nam){
       case "age" :  if(!validator.isAlpha( val) || nam=='' ){
                     if( nam==''){
                           err = <strong>Name Required!</strong>;
                       }else{
                           err = <strong style={{'color':'red'}}>Your name must be a character</strong>;
                       }
                      }else{this.setState({name: val})}
                       this.setState({nameErr: err});
                       break;
        case "email" :  if(!validator.isEmail( val) || nam=='' ){
                        if( nam==''){
                           err2 = <strong>Name Required!</strong>;
                         }else{
                           err2 = <strong style={{'color':'red'}}>Email is not valid</strong>;
                         }
                       }else{this.setState({email: val})}
                       this.setState({emailErr: err2});
                       break;
        case "subject": this.setState({subject: val});break;
        case "text": this.setState({text: val});break;
   }     
 }
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
                <div className="col-md-6"><label className="labels">Name</label><input name="age" type="text" onChange={this.myChangeHandler}  className="form-control" placeholder="first name" /></div>
              {this.state.nameErr}
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Email ID</label><input  name="email" type="email"  onChange={this.myChangeHandler} className="form-control" placeholder="enter email id"  /></div>
                {this.state.emailErr}
              </div>
              <div className="mt-5 text-center"><button className="btn btn-warning profile-button" type="button">Save Profile</button></div>
            </div>
          </div>
      
          <div className="col-md-5 border-right ml-5">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src={imagepropic} /><span className="font-weight-bold">Pamod Madhushan</span><span className="text-black-50">Madhushangurusinghe@gmail.com</span><span> </span></div>
          </div>
        </div>
      </div>
            </div>





        );
    }
}

export default Editprofile;