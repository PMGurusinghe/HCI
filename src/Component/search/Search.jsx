import React, { Component } from "react";
import "./Search.css";
import { Slider } from "@material-ui/core";
import Select1 from "./select";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, CardDeck } from "react-bootstrap";

export default class Search extends Component {
  state = {
    check1: false,
  };

  render() {


    const mark = [
      {
        value: 0,
        label: "0",
      },

      {
        value: 500,
        label: "500 Rs",
      },
      {
        value: 1000,
        label: "1000 Rs",
      },
    ];

    const getValue = (e, value) => {
      console.warn(value);
    };

if(!Search == 'cars'){

return <h1>asd</h1>

}

    return (
      <div>
        <div className="body_addAll">
          <div className="body_add">
            <div className="body1">
              <img className="imgclass" src={require("./auduiA4.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Audi A4</h1>
              <p>
                Full Option Auto, Tiptronic, Paddle Shift Alloys Multi Function
                Winker Mirrors Black Interior Leather Electric Dual Seats Teak
                Panel 1St Owner 50000Kms Done Only
              </p>
            </div>
          </div>

          <div className="body_add">
            <div className="body1">
              <img className="imgclass" src={require("./toyotaCHR.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Toyota CHR</h1>
              <p>
                2017 GT Turbo NGX50 CBB-8646,original body kit, brand new
                condition ,1st oner , genuine miles 39000 , service record
                available
              </p>
            </div>
          </div>
          <div className="body_add">
            <div className="body1">
              <img className="imgclass" src={require("./hondaVezel.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Honda Vezel</h1>
              <p>
                Honda vezel RS sensing YOM 2019 YOR 2019
                <br /> First owner <br />
                9900 mileage only <br />
                Warranty available
              </p>
            </div>
          </div>
          <div className="body_add">
            <div className="body1">
              <img className="imgclass" src={require("./LandRoverRange.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Land Rover Range</h1>
              <p>
                BRAND NEW RANGE ROVER SPORT P400E HSE DYNAMIC VELOCITY BLUE
                (PREMIUM PAINT) REAR ENTERTAINMENT SIDE STEP BLACK TWO TONE SOFT
                CLOSE DOOR LED HEADLIGHTS TOUCH
              </p>
            </div>
          </div>
          <div className="body_add">
            <div className="body1">
              <img className="imgclass" src={require("./MINI.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Mini Countryman</h1>
              <p>
                FIVE DOOR 1200CC TWIN TURBO 17” BLACK ALLOY WHEELS 21000KM DONE
                PUSH START, AMBIENT LIGHTS, AUTO ENGINE STOP, SENSORS, IN BUILT
                MINI SOUNDS USB/AUX/BT SIX FORWARD TRIP TONIC GEARS WITH SPORT
                OPTION, MINT CONDITION
              </p>
            </div>
          </div>
          <div className="body_add">
            <div className="body1">
              <img className="imgclass" src={require("./mazda.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title"> Mazda Axela 2014</h1>
              <p>
                Dual zone AC controller,Push start,Intelligent key,Adaptive
                front lighting system,Reverse camera,Traction control,Rain
                sensing vipers,Sky active hybrid technology
              </p>
            </div>
          </div>
          <div className="body_add">
            <div className="body1">
              <img className="imgclass" src={require("./BMWX2.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title"> BMW X2 </h1>
              <p>
                push start Multifuntion Cruise control Electric seats Memory
                seats Leather seats Day time runnig system lights Four way
                camera Bmw original player Triptonic gears Led scoop lights
              </p>
            </div>
          </div>
          <div className="body_add">
            <div className="body1">
              <img className="imgclass" src={require("./Bajajtuk.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Bajaj RE</h1>
              <p>
                හොඳින් කියවා බලා පමණක් අමතන්න ඔරිජිනල් පේන්ට් ඔරිජිනල් තට්ටුව
                අලුත් ටයර් සම්පූර්ණ ලියකියවිලි එන්ජිම100%👍 දිරුම් කිසිවක් නොමැත
              </p>
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="container3">
            <div className="brand">
              <label className="filter">
                <input type="checkbox" className="check" name="vehicle1" />
                BMW
              </label>
              <label className="filter">
                <input type="checkbox" className="check" name="vehicle1" />
                Audi
              </label>
              <label className="filter">
                <input type="checkbox" className="check" name="vehicle1" />
                Toyota
              </label>
              <label className="filter">
                <input type="checkbox" className="check" name="vehicle1" />
                Honda
              </label>
              <label className="filter">
                <input type="checkbox" className="check" name="vehicle1" />
                Bajaj
              </label>
            </div>
            <br />
            <br />
            <div className="Price">
              <label>Price</label>
              <div style={{ width: 200, margin: 10 }}>
                <Slider
                  max={1000}
                  step={100}
                  marks={mark}
                  valueLabelDisplay="auto"
                  onChange={getValue}
                />
              </div>
            </div>
            <br />
            <br />
            <div className="districtContain">
              <div className="district">
                <Select1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
