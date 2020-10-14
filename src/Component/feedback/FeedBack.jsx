import React, { Component } from 'react';
import validator from 'validator';
import './FeedBackStyle.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class FeedBack extends Component{
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
                               err = <strong>Your name must be a character</strong>;
                           }
                          }else{this.setState({name: val})}
                           this.setState({nameErr: err});
                           break;
            case "email" :  if(!validator.isEmail( val) || nam=='' ){
                            if( nam==''){
                               err2 = <strong>Name Required!</strong>;
                             }else{
                               err2 = <strong>Email is not valid</strong>;
                             }
                           }else{this.setState({email: val})}
                           this.setState({emailErr: err2});
                           break;
            case "subject": this.setState({subject: val});break;
            case "text": this.setState({text: val});break;
       }     
     }
     
  render() {
      return(
        <div className="parent">
            <div className="form">
            <h1 className="title">Contact Us</h1> 
                <form>
                            <div className="form-group">
                        <label htmlFor="formGroupExampleInput">User Name</label>
                        <input name="age" type="text" onChange={this.myChangeHandler} className="form-control"  id="formGroupExampleInput" placeholder="Name"  />
                        {this.state.nameErr}
                    </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="email" type="email" onChange={this.myChangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        {this.state.emailErr}
                        </div>
                        <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Subject</label>
                        <input name="subject" type="text" onChange={this.myChangeHandler} className="form-control" id="formGroupExampleInput" placeholder="subject" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea name="text" onChange={this.myChangeHandler} className="form-control" id="exampleFormControlTextarea1" rows={5} defaultValue={""} />
                    </div>
                        
                        
                        <button type="submit" onClick={this.saveData} className="btn btn-button">Submit</button>
                       
                    </form>
            </div>
            <ToastContainer
                 position="bottom-right"
                 autoClose={5000}
                 hideProgressBar={false}
                 newestOnTop={false}
                 backgroundColor="red"
                 closeOnClick
                 rtl={false}
                 pauseOnFocusLoss
                 draggable
                 pauseOnHover
             />
      </div>
      );
  }
}
export default FeedBack