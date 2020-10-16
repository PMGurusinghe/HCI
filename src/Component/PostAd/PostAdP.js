import React from 'react';
import '../../css/PostAd/PostAdP.css'
import Form from 'react-bootstrap/Form'


export default function postAdR() {
    return ( 
        <div className = 'body'>
            <div class = 'main-header'>
                    <h2>POST YOUR AD</h2>                
                </div>  
                <div className = 'headerLine mx-auto'>
                        <hr />
                </div>    

                <div className='tabs'>
                    <div className = 'tabsline1 mx-auto'>
                        <hr />
                    </div>
                    <h4>
                        01 fill the form&nbsp;&nbsp;&nbsp;
                        <i class='fas fa-caret-right'/>&nbsp;&nbsp;&nbsp;
                        02 Review your order &nbsp;&nbsp;&nbsp;
                        <i class='fas fa-caret-right'/>&nbsp;&nbsp;&nbsp;
                        <span style = {{color : '#03C04A'}}>03</span> make your payments
                    </h4>

                    <div className = 'tabsline2 mx-auto'>
                        <hr />
                    </div>
                </div>  

                <div className = 'secondHeader'>
                    <h3>Make Your Payments</h3>
                </div>

                <div className = 'alert text-center'>
                    <h2 style = {{'color' : 'red', 'text-shadow': '2px 2px 8px #420C09'}}>Pay Only Rs. 500.00 for Your Ad today..!!!</h2>
                </div>

                <div className = 'PayForm mx-auto'>
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name"/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name"/>
                            </div>
                        </div><br/>

                        <div class="row">
                            <div class="col">
                                    <input type="text" class="form-control" placeholder="Area Code" style = {{'width' : '200px'}}/>
                            </div>
                            <div class="col" style={{'width ':'70%'}}>
                                <input type="text" class="form-control" placeholder="Mobile Number" style = {{'width' : '350px'}}/>
                            </div>
                        </div><br/>

                        <input type="text" class="form-control" placeholder="Enter Price" style = {{'width' : '300px'}}/><br/>

                        <input type="text" class="form-control" placeholder="&#xf007; CardHolder's Name"/><br/>

                        <input type="text" class="form-control" placeholder="&#xf09d; Card Number"/><br/>
                            
                        <p style = {{'textAlign' : 'start'}}>Expiry</p>
                        <div class="row">
                            <div class="col">
                                    <input type="text" class="form-control" placeholder="&#xf073; MM / YY" style = {{'width' : '100px'}}/>
                            </div>
                            <div class="col" style={{'width ':'70%'}}>
                                <input type="text" class="form-control" placeholder="&#xf023; CVC" style = {{'width' : '100px' , 'margin-right' : '355px'}}/>
                            </div>
                        </div><br/>

                        <a href ="/">
                             <button type="button" className="btn btn-warning "> &nbsp;&nbsp;PAY&nbsp;&nbsp; </button>
                        </a>

                    </form>
                </div><br/>


                
                    
                

        </div>
    );
}