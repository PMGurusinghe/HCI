import React from 'react';
import '../../css/PostAd/PostAd.css'
import Form from 'react-bootstrap/Form'


export default function postAd() {

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
                    <span style = {{color : '#03C04A'}}>01</span> fill the form&nbsp;&nbsp;&nbsp;
                        <i class='fas fa-caret-right'/>&nbsp;&nbsp;&nbsp;
                        02 Review your order &nbsp;&nbsp;&nbsp;
                            <i class='fas fa-caret-right'/>&nbsp;&nbsp;&nbsp;
                            03 make your payments
                    </h4>

                    <div className = 'tabsline2 mx-auto'>
                        <hr />
                    </div>
                </div>  

                <div className = 'secondHeader'>
                    <h3>Fill The Form</h3>
                </div>

                <div className = 'insideBody mx-auto'>
                <div class ='row mx-auto' >
                <div className = 'col-md-6'>
                <div className = 'selection'>
                    <div className ='row'>
                        <div className = 'col-md-6'>
                            <p>Select The Category :* </p>
                        </div>
                        <div className = 'col-md-6'>
                            <Form.Group>
                                    <Form.Control size="sm" as="select">
                                        <option>Select Catergory</option>
                                        <option>Cars</option>
                                        <option>Mobile Acceries</option>
                                        <option>Land</option>
                                        <option>Laptops</option>
                                        <option>Cloths</option>
                                        <option>Shoes</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                    </div>

                    <div className = 'row'>
                        <div className = 'col-md-6'>
                            <p>Select The Location : </p>
                        </div>
                        <div className ='col-md-6'>
                            <Form.Group >
                                <Form.Control size="sm" as="select">
                                    <option>Select Catergory</option>
                                    <option>Colombo</option>
                                    <option>Gampaha</option>
                                    <option>Kandy</option>
                                    <option>Badulla</option>
                                    <option>Monaragala</option>
                                    <option>Rathnapura</option>
                                </Form.Control>
                            </Form.Group>
                        </div> 
                </div>     
                </div>

                <div className = 'ImagesUpload'>
                    <Form>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Main Image :"/>
                            <Form.File id="exampleFormControlFile2" label="Image 1 :" />
                            <Form.File id="exampleFormControlFile3" label="Image 2 :" />
                            <Form.File id="exampleFormControlFile4" label="Image 3 :" />
                            <Form.File id="exampleFormControlFile5" label="Image 4 :" />
                        </Form.Group>
                    </Form>
                </div>
                </div>  
                <div className = 'col-md-6'>
                    <div className ='mainForm'>
                        <div className = 'row'>
                            <div className = 'col-md-6'>
                                <p>Enter Title :</p>
                            </div>
                            <div className = 'col-md-6'>
                                <input class="form-control form-control-sm" type="text" placeholder="Enter Title"/>
                            </div>
                            <div className = 'col-md-6'>
                                <p>Price :</p>
                            </div>
                            <div className = 'col-md-6'>
                                <input class="form-control form-control-sm" type="text" placeholder="Price"/>
                            </div>
                            <div className = 'col-md-6'>
                                <p>Email :</p>
                            </div>
                            <div className = 'col-md-6'>
                                <input class="form-control form-control-sm" type="text" placeholder="Email"/>
                            </div>
                            <div className = 'col-md-6'>
                                <p>Mobile :</p>
                            </div>
                            <div className = 'col-md-6'>
                                <input class="form-control form-control-sm" type="text" placeholder="Mobile1"/>
                            </div>
                            <div className = 'col-md-6'>
                                <p>Tags :</p>
                            </div>
                            <div className = 'col-md-6'>
                                <input class="form-control form-control-sm" type="text" placeholder="Tags"/>
                            </div>
                            <div className = 'col-md-6'>
                                <p>Description :</p>
                            </div>
                            <div className = 'col-md-6'>
                                <textarea size="sm"  placeholder="Write something.." style = {{width : '215px', height : '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <a href ="/post-ad2">
                    <button type="button" className="btn btn-warning"> NEXT </button>
                    </a>
                </div>
            </div>  
            
            </div>
                
        </div>

    );


}
