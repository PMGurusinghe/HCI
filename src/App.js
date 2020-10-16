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

/*Gimhan*/
import PostAd from './Component/PostAd/PostAd'
import PostAdR from './Component/PostAd/PostAdR'
import PostAdP from './Component/PostAd/PostAdP'
import AboutUs from './Component/AboutUs/AboutUs'

/** Avinash**/
//import Forgot from './Component/forgot/ForgetBody';
//import Home from './Component/home/body/Body';
import Search from './Component/search/Search';

/** Dilanka**/
import FeedBack from './Component/feedback/FeedBack';
import SignUp from './Component/signUp/SignUp';
import HowToSellFast from './Component/HowToSellFast/HowToSellFast';

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

            <Route exact path='/Search' component={Search} />

            <Route exact path='/feedback' component={FeedBack} />
            <Route exact path='/sign' component={SignUp} />
            <Route exact path='/sellfast' component={HowToSellFast}/>
            <Route exact path='/post-ad' component={PostAd}/>
            <Route exact path='/post-ad2' component={PostAdR}/>
            <Route exact path='/post-ad3' component={PostAdP}/>
            <Route exact path='/about-us' component={AboutUs}/>
            <Route component={Maincomponent}></Route>

            
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
