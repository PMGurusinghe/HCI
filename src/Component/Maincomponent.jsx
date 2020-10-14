import React, { Component } from 'react';
import '../Component/main.css'
class Maincomponent extends Component {
    render() {
        return (
            <div>
              <div className='bodypage'>
      <div className="container-fluid text-center">
        <div className="px-5 py-5">
          <h1 className="not-found">404</h1>
          <h3>We couldn't seem to find the page you are looking for!</h3>
          <div className="text-center mt-4 mb-5"> <button className="btn btn-success send px-3"><i className="fa fa-long-arrow-left mr-1" /> Return to main page</button> </div>
        </div>
      </div>
      </div>
            </div>
            
        );
    }
}

export default Maincomponent;