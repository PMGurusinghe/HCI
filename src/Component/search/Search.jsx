import React, { Component } from "react";
import "./Search.css";
import { Slider } from "@material-ui/core";
import Select1 from "./select";
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
      <div className='container-fluid'>
        <div className="body_addAll">
          <a href='/Viewad'>
          <div className="body_add" style={{ display: this.state.displayAudi}}>
            <div className="body1">
              <img className="imgclass" src={require("./auduiA4.jpg")} />
            </div>
            <div className="body2">
              <h1 name="title">Velar R Dynamic HSE 240</h1>
              <h2 name="title">Rs 200</h2>
              <p>2018 Range Rover Velar R Dynamic HSE 240 D
                Full Option Auto, Tiptronic, Paddle Shift Alloys Multi Function
                Winker Mirrors Black Interior Leather Electric Dual Seats Teak
                Panel 1St Owner 50000Kms Done Only
              </p>
            </div>
          </div>
          </a>
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
                RangeRover
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
