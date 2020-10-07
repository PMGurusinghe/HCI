import React, { Component } from 'react';
import '../Component/main.css'
class Maincomponent extends Component {
    render() {
        return (
            <div>
                <h1>404 Page Nor Found</h1>
                <div className="section">
        <div className="container">
          <h2>Travelers Choice of Hotels</h2>
          <div className="image-carousel style2 flexslider" data-animation="slide" data-item-width={270} data-item-margin={30}>
            <div className="flex-viewport" style={{overflow: 'hidden', position: 'relative'}}>
              <ul className="slides image-box hotel listing-style1" style={{width: '1000%', transitionDuration: '0.6s', transform: 'translate3d(-300px, 0px, 0px)'}}>
                <li style={{width: '270px', float: 'left', display: 'block'}}>
                  <article className="box">
                    <figure> <a href="ajax/slideshow-popup.html" className="hover-effect popup-gallery"><img width={270} height={160} alt="" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1556030102/home-office-336373_640.jpg" draggable="false" /></a> </figure>
                    <div className="details"> <span className="price"><small>avg/night</small>$188</span>
                      <h4 className="box-title">Hotel Hilton<small>Albufeira</small></h4>
                      <div className="feedback">
                        <div data-placement="bottom" data-toggle="tooltip" className="fa fa-star" title data-original-title="4 stars"><span style={{width: '80%'}} className="five-stars" /></div> <span className="review">170 reviews</span>
                      </div>
                      <p className="description">For what reason would it be advisable for me to think about business content?</p>
                      <div className="action"> <a className="button btn-small" href="#">BOOK</a> <a className="button btn-small yellow popup-map" href="#" data-box="37.089072, -8.247880">VIEW ON MAP</a> </div>
                    </div>
                  </article>
                </li>
                <li style={{width: '270px', float: 'left', display: 'block'}}>
                  <article className="box">
                    <figure> <a href="ajax/slideshow-popup.html" className="hover-effect popup-gallery"><img width={270} height={160} alt="" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1556030091/office-620822_640.jpg" draggable="false" /></a> </figure>
                    <div className="details"> <span className="price"><small>avg/night</small>$322</span>
                      <h4 className="box-title">Double Tree<small>New delhi</small></h4>
                      <div className="feedback">
                        <div data-placement="bottom" data-toggle="tooltip" className="fa fa-star" title data-original-title="4 stars"><span style={{width: '80%'}} className="five-stars" /></div> <span className="review">485 reviews</span>
                      </div>
                      <p className="description">For what reason would it be advisable for me to think about business content?</p>
                      <div className="action"> <a className="button btn-small" href="#">BOOK</a> <a className="button btn-small yellow popup-map" href="#" data-box="40.463667, -3.749220">VIEW ON MAP</a> </div>
                    </div>
                  </article>
                </li>
                <li style={{width: '270px', float: 'left', display: 'block'}}>
                  <article className="box">
                    <figure> <a href="ajax/slideshow-popup.html" className="hover-effect popup-gallery"><img width={270} height={160} alt="" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1556030070/desktop-1985856_640.jpg" draggable="false" /></a> </figure>
                    <div className="details"> <span className="price"><small>avg/night</small>$170</span>
                      <h4 className="box-title">Hotel Taj<small>Mumbai</small></h4>
                      <div className="feedback">
                        <div data-placement="bottom" data-toggle="tooltip" className="fa fa-star" title data-original-title="4 stars"><span style={{width: '80%'}} className /></div> <span className="review">75 reviews</span>
                      </div>
                      <p className="description">For what reason would it be advisable for me to think about business content?</p>
                      <div className="action"> <a className="button btn-small" href="#">BOOK</a> <a className="button btn-small yellow popup-map" href="#" data-box="40.705631, -73.978003">VIEW ON MAP</a> </div>
                    </div>
                  </article>
                </li>
                <li style={{width: '270px', float: 'left', display: 'block'}}>
                  <article className="box">
                    <figure> <a href="ajax/slideshow-popup.html" className="hover-effect popup-gallery"><img width={270} height={160} alt="" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1556030070/desktop-1985856_640.jpg" draggable="false" /></a> </figure>
                    <div className="details"> <span className="price"> <small>avg/night</small> $360 </span>
                      <h4 className="box-title">Lamon Tree<small>Bangalore</small></h4>
                      <div className="feedback">
                        <div data-placement="bottom" data-toggle="tooltip" className="fa fa-star" title data-original-title="4 stars"><span style={{width: '80%'}} className="five-stars" /></div> <span className="review">270 reviews</span>
                      </div>
                      <p className="description">For what reason would it be advisable for me to think about business content?</p>
                      <div className="action"> <a className="button btn-small" href="#">BOOK</a> <a className="button btn-small yellow popup-map" href="#" data-box="48.856614, 2.352222">VIEW ON MAP</a> </div>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
            </div>
            
        );
    }
}

export default Maincomponent;