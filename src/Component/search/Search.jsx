import React, { Component } from "react";
import "./Search.css";
import { Slider } from "@material-ui/core";
import Select1 from "./select";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, CardDeck } from "react-bootstrap";

export default class Search extends Component {
  state = {
    check1: false,
    displayBMW: 'inline',
    displayToyota: 'inline',
    displayAudi: 'inline',
    displayHonda: 'inline',
    displayBajaj: 'inline',
    displayOther: 'inline',
    isCheckedBMW: false,
    isCheckedToyota: false,
    isCheckedAudi: false,
    isCheckedHonda: false,
    isCheckedBajaj: false,
    isCheckedOther: false,
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
     if(value <= 100) {
      this.setState({ 
        displayBMW: 'none',
        displayToyota: 'none',
        displayAudi: 'none',
        displayHonda: 'none',
        displayBajaj: 'inline',
        displayOther: 'none',
      })
     }
     else if(value <= 200){
      this.setState({ 
        displayBMW: 'none',
        displayToyota: 'none',
        displayAudi: 'none',
        displayHonda: 'none',
        displayBajaj: 'none',
        displayOther: 'none',
      })
     }
     else if(value <= 300){
      this.setState({ 
        displayBMW: 'none',
        displayToyota: 'none',
        displayAudi: 'none',
        displayHonda: 'inline',
        displayBajaj: 'none',
        displayOther: 'none',
      })
     }
     else if(value <= 400){
      this.setState({ 
        displayBMW: 'none',
        displayToyota: 'none',
        displayAudi: 'none',
        displayHonda: 'none',
        displayBajaj: 'none',
        displayOther: 'none',
      })
     }
     else if(value <= 500){
      this.setState({ 
        displayBMW: 'none',
        displayToyota: 'none',
        displayAudi: 'none',
        displayHonda: 'none',
        displayBajaj: 'none',
        displayOther: 'none',
      })
     }
     else if(value <= 600){
      this.setState({ 
        displayBMW: 'inline',
        displayToyota: 'none',
        displayAudi: 'none',
        displayHonda: 'none',
        displayBajaj: 'none',
        displayOther: 'none',
      })
     }
     else if(value <= 700){
      this.setState({ 
        displayBMW: 'none',
        displayToyota: 'none',
        displayAudi: 'none',
        displayHonda: 'none',
        displayBajaj: 'none',
        displayOther: 'none',
      })
     }
     else if(value <= 800){
      this.setState({ 
        displayBMW: 'none',
        displayToyota: 'none',
        displayAudi: 'none',
        displayHonda: 'none',
        displayBajaj: 'none',
        displayOther: 'none',
      })
     }
     else if(value <= 900){
      this.setState({ 
        displayBMW: 'none',
        displayToyota: 'inline',
        displayAudi: 'none',
        displayHonda: 'none',
        displayBajaj: 'none',
        displayOther: 'none',
      })
     }
     else if(value <= 1000){
      this.setState({ 
        displayBMW: 'none',
        displayToyota: 'none',
        displayAudi: 'none',
        displayHonda: 'none',
        displayBajaj: 'none',
        displayOther: 'inline',
      })
     }
    };

    const handleCheckBMW = () => {
      this.setState({
        isCheckedBMW: !this.state.isCheckedBMW,
      });
      this.state.isCheckedBMW ? this.setState({displayBMW: 'inline'}) : this.setState({displayBMW: 'none'})
    };
    const handleCheckToyota = (e) => {
      this.setState({
        isCheckedToyota: !this.state.isCheckedToyota,
      });
      this.state.isCheckedToyota ? this.setState({displayToyota: 'inline'}) : this.setState({displayToyota: 'none'})
    };
    const handleCheckAudi = (e) => {
      this.setState({
        isCheckedAudi: !this.state.isCheckedAudi,
      });
      this.state.isCheckedAudi ? this.setState({displayAudi: 'inline'}) : this.setState({displayAudi: 'none'})
    };
    const handleCheckHonda = (e) => {
      this.setState({
        isCheckedHonda: !this.state.isCheckedHonda,
      });
      this.state.isCheckedHonda ? this.setState({displayHonda: 'inline'}) : this.setState({displayHonda: 'none'})
    };  
    const handleCheckBajaj = (e) => {
      this.setState({
        isCheckedBajaj: !this.state.isCheckedBajaj,
      });
      this.state.isCheckedBajaj ? this.setState({displayBajaj: 'inline'}) : this.setState({displayBajaj: 'none'})
    };
    const handleCheckOther = (e) => {
      this.setState({
        isCheckedOther: !this.state.isCheckedOther,
      });
      this.state.isCheckedOther ? this.setState({displayOther: 'inline'}) : this.setState({displayOther: 'none'})
    };
    

if(!Search == 'cars'){

return <h1>asd</h1>

}

    return (
      <div>
        <div className="body_addAll">
          <div className="body_add" style={{ display: this.state.displayAudi}}>
            <div className="body1">
              <img className="imgclass" src={require("./auduiA4.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Audi A4</h1>
              <h2 name="title">Rs 200</h2>
              <p>
                Full Option Auto, Tiptronic, Paddle Shift Alloys Multi Function
                Winker Mirrors Black Interior Leather Electric Dual Seats Teak
                Panel 1St Owner 50000Kms Done Only
              </p>
            </div>
          </div>

          <div className="body_add"  style={{ display: this.state.displayToyota}}>
            <div className="body1">
              <img className="imgclass" src={require("./toyotaCHR.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Toyota CHR</h1>
              <h2 name="title">Rs 800</h2>
              <p>
                2017 GT Turbo NGX50 CBB-8646,original body kit, brand new
                condition ,1st oner , genuine miles 39000 , service record
                available
              </p>
            </div>
          </div>
          <div className="body_add" style={{ display: this.state.displayHonda}}>
            <div className="body1">
              <img className="imgclass" src={require("./hondaVezel.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Honda Vezel</h1>
              <h2 name="title">Rs 300</h2>
              <p>
                Honda vezel RS sensing YOM 2019 YOR 2019
                <br /> First owner <br />
                9900 mileage only <br />
                Warranty available
              </p>
            </div>
          </div>
          <div className="body_add" style={{ display: this.state.displayOther}}>
            <div className="body1">
              <img className="imgclass" src={require("./LandRoverRange.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Land Rover Range</h1>
              <h2 name="title">Rs 980</h2>
              <p>
                BRAND NEW RANGE ROVER SPORT P400E HSE DYNAMIC VELOCITY BLUE
                (PREMIUM PAINT) REAR ENTERTAINMENT SIDE STEP BLACK TWO TONE SOFT
                CLOSE DOOR LED HEADLIGHTS TOUCH
              </p>
            </div>
          </div>
          <div className="body_add" style={{ display: this.state.displayOther}}>
            <div className="body1">
              <img className="imgclass" src={require("./MINI.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Mini Countryman</h1>
              <h2 name="title">Rs 950</h2>
              <p>
                FIVE DOOR 1200CC TWIN TURBO 17” BLACK ALLOY WHEELS 21000KM DONE
                PUSH START, AMBIENT LIGHTS, AUTO ENGINE STOP, SENSORS, IN BUILT
                MINI SOUNDS USB/AUX/BT SIX FORWARD TRIP TONIC GEARS WITH SPORT
                OPTION, MINT CONDITION
              </p>
            </div>
          </div>
          <div className="body_add" style={{ display: this.state.displayOther}}>
            <div className="body1">
              <img className="imgclass" src={require("./mazda.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title"> Mazda Axela 2014</h1>
              <h2 name="title">Rs 960</h2>
              <p>
                Dual zone AC controller,Push start,Intelligent key,Adaptive
                front lighting system,Reverse camera,Traction control,Rain
                sensing vipers,Sky active hybrid technology
              </p>
            </div>
          </div>
          <div className="body_add" style={{ display: this.state.displayBMW}}>
            <div className="body1">
              <img className="imgclass" src={require("./BMWX2.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title"> BMW X2 </h1>
              <h2 name="title">Rs 600</h2>
              <p>
                push start Multifuntion Cruise control Electric seats Memory
                seats Leather seats Day time runnig system lights Four way
                camera Bmw original player Triptonic gears Led scoop lights
              </p>
            </div>
          </div>
          <div className="body_add" style={{ display: this.state.displayBajaj}}>
            <div className="body1">
              <img className="imgclass" src={require("./Bajajtuk.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Bajaj RE</h1>
              <h2 name="title">Rs 100</h2>
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
                <input type="checkbox" defaultChecked="true" className="check" name="vehicle1" onClick={handleCheckBMW}/>
                BMW
              </label>
              <label className="filter">
                <input type="checkbox" className="check" name="vehicle1" defaultChecked="true" onClick={handleCheckAudi}/>
                Audi
              </label>
              <label className="filter">
                <input type="checkbox" className="check" name="vehicle1" defaultChecked="true" onClick={handleCheckToyota} />
                Toyota
              </label>
              <label className="filter">
                <input type="checkbox" className="check" name="vehicle1"  defaultChecked="true" onClick={handleCheckHonda}/>
                Honda
              </label>
              <label className="filter">
                <input type="checkbox" className="check" name="vehicle1" defaultChecked="true" onClick={handleCheckBajaj} />
                Bajaj
              </label>
              <label className="filter">
                <input type="checkbox" className="check" name="vehicle1" defaultChecked="true" onClick={handleCheckOther} />
                Other
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
