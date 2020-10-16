import React from "react";
import './card-style.css';


const Card = (props) => {
  return (

<div className="home" >

    <div className="cardharitha text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1"className="card-img-top" />
      </div>
      <div className="cardharitha-body texr-dark">
        <h4 className="cardharitha-title">{props.title}</h4>
        <p className="cardharitha-text text-body">{props.paragraph}
        </p>
        <a href="/Search" className="btn btn-outline-success">
          Let's find
        </a>
      </div>
    </div>
</div> 
  );
};

export default Card;
