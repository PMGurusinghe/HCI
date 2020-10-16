import React, { Component } from 'react';
import banner1 from "../images/trek_mtn1100txl_13_h.jpg"
import banner2 from "../images/porsche-normal.jpg"
import banner3 from "../images/home-banner-1.jpg"
import banner4 from "../images/pngtree-red-running-sport-background-banner-image_139653.jpg"
import banner5 from "../images/Category-Banner-Mobile-Phones-01.jpg"
import banner6 from "../images/banner01.jpg"
import banner7 from "../images/ef8083bfe79088dc00bd8eca9c821cd5.jpg"

class Carousel extends Component {
    render() {
        return (
            <div className="carousel1">
            <div className="container1 mt-50">
            <div className="rows">
                <div className="cols-md-10 mr-50 ml-50">
                    <div className="cards cards-raised cards-carousel">
                        <div id="carouselindicators" className="carousel slide" data-ride="carousel" data-interval="3000">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselindicators" data-slide-to="0" className=""></li>
                                <li data-target="#carouselindicators" data-slide-to="1" className=""></li>
                                <li data-target="#carouselindicators" data-slide-to="2" className=""></li>
                                <li data-target="#carouselindicators" data-slide-to="3" className="active"></li>
                                <li data-target="#carouselindicators" data-slide-to="4" className=""></li>
                                <li data-target="#carouselindicators" data-slide-to="5" className=""></li>
                                <li data-target="#carouselindicators" data-slide-to="6" className=""></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active carousel-item-left"> <img className="d-block w-100" src={banner1} alt="First slide"></img>
                        </div>
                        <div className="carousel-item carousel-item-next carousel-item-left"> <img className="d-block w-100" src={banner2} alt="Second slide"></img>
                        </div>
                        <div className="carousel-item"> <img className="d-block w-100" src={banner3} alt="Third slide"></img>
                        </div>
                        <div className="carousel-item"> <img className="d-block w-100" src={banner4} alt="Third slide"></img>
                        </div>
                        <div className="carousel-item"> <img className="d-block w-100" src={banner5} alt="Third slide"></img>
                        </div>
                        <div className="carousel-item"> <img className="d-block w-100" src={banner6} alt="Third slide"></img>
                        </div>
                        <div className="carousel-item"> <img className="d-block w-100" src={banner7} alt="Third slide"></img>
                        </div>
                    </div> <a className="carousel-control-prev" href="#carouselindicators" role="button" data-slide="prev" data-abc="true"> <i className="fa fa-chevron-left"></i> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#carouselindicators" role="button" data-slide="next" data-abc="true"> <i className="fa fa-chevron-right"></i> <span className="sr-only">Next</span> </a>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
        );
    }
}

export default Carousel;
