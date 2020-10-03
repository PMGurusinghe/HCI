import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel' 
import '../Viewad/Viewad.css'
import carimg1 from '../images/fitted.jpg'
import carimg2 from '../images/fitted (1).jpg'
import carimg3 from '../images/fitted (2).jpg'
export default class Viewad extends Component {
    render() {
        return (
        <div>   
            <div class='container-fluid' >  
        
                <div className="row title" style={{ marginBottom: "20px" }} >  
                    
                     <div class="col-sm-12 btn btn-light btn-outline-dark"> <h2>Audi A6 High Spec Version 2013</h2></div>  
                    
                        </div>  
                        <button type="button" className="btn btn-warning mb-2 ml-2">Promote This Ad</button>
                        <button  type="button" className="btn btn-outline-danger mb-2 ml-2">Report Ad</button>
                                 </div>  
 <div className='imgcenter'>        
    <div className='container-fluid ' >  
                        
    <Carousel>  
    <Carousel.Item style={{'height':"600px"}} >  
    <img style={{'height':"600px"}} className="d-block w-75" src={carimg1} />  
                        
        <Carousel.Caption>   
        </Carousel.Caption>  
        </Carousel.Item  >  
        <Carousel.Item style={{'height':"600px"}}>  
        <img style={{'height':"600px"}} className="d-block w-75" src={carimg2}    />  
                        
        <Carousel.Caption>   
        </Carousel.Caption>  
        </Carousel.Item>  
        <Carousel.Item style={{'height':"600px"}}>  
        <img style={{'height':"600px"}} className="d-block w-75" src={carimg3}   />  
                        
        <Carousel.Caption>    
        </Carousel.Caption>  
        </Carousel.Item>  
        </Carousel>  
    </div> 
    </div> 
    <div className='btncenter'>
        <div className="btn-toolbar mt-5 ml-5" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary">Video</button>
        </div>
        <div className="btn-group mr-2" role="group" aria-label="Second group">
        <button type="button" className="btn btn-secondary">Location</button>
        </div>
        <div className="btn-group" role="group" aria-label="Third group">
        <button type="button" className="btn btn-secondary">Max</button>
        </div>
        </div>  
        </div>    
</div>

    )  
  }  
}  
            