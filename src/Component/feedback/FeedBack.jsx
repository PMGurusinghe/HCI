import React, { Component } from 'react';

import './FeedBackStyle.css'

class FeedBack extends Component{
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          age: null,
          errormessage: ''
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
          if (val !="" && !Number(val)) {
            err = <strong>Your age must be a number</strong>;
          }
        }

        this.setState({errormessage: err});
        this.setState({[nam]: val});

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
                        {this.state.errormessage}
                    </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        
                        </div>
                        <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Subject</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="subject" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} defaultValue={""} />
                    </div>
                        
                        
                        <button type="submit" className="btn btn-button">Submit</button>
                       
                    </form>
            </div>
            
      </div>
      );
  }
}
export default FeedBack