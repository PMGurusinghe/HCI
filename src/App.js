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
import Card from './Component/MainHomePage/CardUI';
import logedHome from './Component/MainHomePage/LogedHome';


function App() {
  return (
    <div className="App">
      <React.Fragment>
      <NavigationHeader />
      <Router>
      <Switch>
      <Route exact path='/LogedHome' component={logedHome}/>
        <Route path='/LogedHome' component={logedHome}/>
        <Route component={logedHome} />
        <Route exact path='/MainHome' component={Card}/>
        <Route path='/MainHome' component={Card}/>
        <Route component={Card} />
      </Switch>
      <Footer />
      </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
