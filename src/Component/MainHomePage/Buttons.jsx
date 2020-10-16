import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="btn btn-primary btn-block">Sign in</div>
                <div className="btn btn-success btn-block"><a href="./LogedHome.jsx" >Login</a></div>
            </div>
        );
    }
}

export default Buttons;
