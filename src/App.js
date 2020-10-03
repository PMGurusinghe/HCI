import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/Fontawesome';
import NavigationHeader from './Component/NavigationHeader/NavigationHeader';
import Maincomponent from './Component/Maincomponent';
import Myaccount from './Component/Myaccount/Myaccount';
import Viewad from './Component/Viewad/Viewad';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <React.Fragment>
      <NavigationHeader />
      <Router>
      <Switch>
        <Route exact path='/' component={Viewad} />
        <Route  path='/Myaccount' component={Myaccount} />
        <Route  component={Maincomponent} />
      </Switch>
      <Footer />
      </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
