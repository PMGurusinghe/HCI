import React from 'react';
import '../../css/PostAd/AboutUs.css'
import Form from 'react-bootstrap/Form'
import about from '../images/aboutUs.jpg'


export default function postAd() {

    return ( 
        <div>
            <div class = 'main-header'>
                    <h2>About Us</h2>                
            </div>  
                <div className = 'headerLine mx-auto'>
                        <hr />
                </div>
                
                <div className="card mx-auto" style= {{'width':'70%', 'height' : '100%'}}>
                <img className="card-img-top" src={about} alt="Card image cap" style = {{'height' : '400px'}}/>
                    <div class = 'row'>
                        <div class = 'col'>
                            <div className="card-body">
                                <h3>Why US,</h3>
                                <ul class="list-group">
                                    <li class="list-group-item"><a href = "/sign" style = {{'color' : '#FCD12A'}}>Sign Up</a></li>
                                    <hr/>
                                    <li class="list-group-item"><a href = "/sellfast" style = {{'color' : '#FCD12A'}}>How to Sell Fast</a></li>
                                    <hr/>
                                    <li class="list-group-item"><a href = "/feedback" style = {{'color' : '#FCD12A'}}>Contact Us</a></li>
                                    <hr/>
                                    <li class="list-group-item"><a href = "#!" style = {{'color' : '#FCD12A'}}>Blog</a></li>
                                    <hr/>
                                    <li class="list-group-item"><a href = "#!" style = {{'color' : '#FCD12A'}}>Help</a></li>
                                    <hr/>
                                    <li class="list-group-item"><a href = "/Terms" style = {{'color' : '#FCD12A'}}>Privacy Policy</a></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div class = 'col'>
                                <div className="card-body">
                                    <h5>What is <a href = "/" style = {{'color' : '#E4CD05'}}>vikka.lk</a>?</h5><br/>
                                    <p className="card-text">vikka.lk is a website where you can buy and sell almost everything. The best deals are often done with people who live in your own city or on your own street, so on vikka.lk it's easy to buy and sell locally. All you have to do is select your region.</p>
                                    <p className="card-text">It takes less than 2 minutes to post an ad on vikka.lk. You can sign up for a free account and post ads easily every time.</p>
                                    <p className="card-text">vikka.lk has the widest selection of popular second hand items all over Sri Lanka, which makes it easy to find exactly what you are looking for. So if you're looking for a car, mobile phone, house, computer or maybe a pet, you will find the best deal on vikka.lk.</p>
                                    <p className="card-text">vikka.lk does not specialize in any specific category - here you can buy and sell items in more than 50 different categories. We also carefully review all ads that are being published, to make sure the quality is up to our standards.</p>
                                    <p className="card-text">If you'd like to get in touch with us, go to <a href = "/feedback" style = {{'color' : '#E4CD05'}}>Contact us</a>.</p><br/>
                                </div>

                        </div>
                    </div>
                </div><br/><br/>

        </div>
    );
}