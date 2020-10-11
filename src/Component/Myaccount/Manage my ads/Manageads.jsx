import React, { Component } from 'react'
import './Manageads.css';
import { Route } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav'
import { Switch } from 'react-router-dom';

export default class Manageads extends Component {
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
