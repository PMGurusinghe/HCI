import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationHeader from './Component/NavigationHeader/NavigationHeader';
import Myaccount from './Component/Myaccount/Myaccount';
import Viewad from './Component/Viewad/Viewad';
import Footer from './Component/Footer/Footer';
import Maincomponent from './Component/Maincomponent';
import Editprofile from './Component/Myaccount/Editprofile/Editprofile';
import Favorits from './Component/Myaccount/Favorits/Favorits';
import Manageads from './Component/Myaccount/Manage my ads/Manageads';
import Mystatistics from './Component/Myaccount/Mystatistics/Mystatistics';
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavigationHeader />
        <Router>
          <Switch>
            <Route exact path='/' component={Viewad} />
            <Route exact path='/Myaccount' component={Myaccount} />
            <Route exact path='/Editprofile' component={Editprofile} />
            <Route exact path='/Favorits' component={Favorits} />
            <Route exact path='/Manageads' component={Manageads} />
            <Route exact path='/Mystatistics' component={Mystatistics} />
            <Route component={Maincomponent}></Route>
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;