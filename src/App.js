import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationHeader from './Component/NavigationHeader/NavigationHeader';
import Myaccount from './Component/Myaccount/Myaccount';
import Viewad from './Component/Viewad/Viewad';
import Footer from './Component/Footer/Footer';
import reportad from './Component/Viewad/reportad';
import Maincomponent from './Component/Maincomponent';


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavigationHeader />
        <Router>
          <Switch>
            <Route exact path='/' component={Viewad} />
            <Route exact path='/Myaccount' component={Myaccount} />
            <Route exact path='/reportad' component={reportad} />
            <Route component={Maincomponent}></Route>
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
