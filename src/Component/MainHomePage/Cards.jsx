import React, { Component } from "react";
import Card from "./CardUI";

import NavigationHeader from "../NavigationHeader/NavigationHeader";
import Carousel from "../MainHomePage/Carousel"

import img1 from "../images/cardImage1.jpg";
import img2 from "../images/cardImage2.jpg";
import img3 from "../images/cardImage3.jpg";
import img4 from "../images/cardImage4.jpg";
import img5 from "../images/cardImage5.jpg";
import img6 from "../images/cardImage6.jpg";


class Cards extends Component {
  render() {
    return (
      <div >
        <div>
          <Carousel/>
        </div>
     
      <div className="harithacontainer-fluid.d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} title="Vehicle" paragraph="We hope that, you will find your dream vehicle." />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img2} title="Mobile accessories" paragraph="Do you looking for a mobile phone? Yeah! you are in right place." />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img3} title="Clothes" paragraph="Wear anything you like." />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img4} title="Sports items" paragraph="Do any sport you like. It will bring you healthy & happy life" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img5} title="Kids items" paragraph="Kids always play with toys. Give them their freedom." />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img6} title="Properties" paragraph="We help you to find your dream home"/>
          </div>
          
          
        </div>
      </div>
      </div>
    );
  }
}

export default Cards;
