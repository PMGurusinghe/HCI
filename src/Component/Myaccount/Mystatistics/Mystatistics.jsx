import React, { Component } from 'react'
import '../Mystatistics/Mystatistics.css';
import { Route } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav'
import { Switch } from 'react-router-dom';



export default class Mystatistics extends Component {
    render() {
        return (
            <Route>
            <Switch>
            <Route component={Sidenav}></Route>
            </Switch>
            
        </Route>
          
        )
    }
}
