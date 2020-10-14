import React, {useState}from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Slider,Select, MenuItem } from "@material-ui/core";



function App() {

 
  const [course, setCourse] = React.useState("");
   
   const updateSelectVal=(e)=>{

    console.warn(e.target.value)
    setCourse(e.target.value)
    

   }
  return (
    <div>

    <Select className='selctbox' value={course} displayEmpty onChange={updateSelectVal}>
    
    <MenuItem value="" disabled>Select District</MenuItem>
    <MenuItem value={1}>Colombo</MenuItem>
    <MenuItem value={2}>Kandy</MenuItem>
    <MenuItem value={3}>Galle</MenuItem>
    <MenuItem value={4}>Anuradhapura</MenuItem>
    <MenuItem value={5}>Badulla</MenuItem>
    <MenuItem value={6}>Batticaloa</MenuItem>
    <MenuItem value={7}>Gampaha</MenuItem>
    <MenuItem value={8}>Hambantota</MenuItem>
    <MenuItem value={9}>Jaffna</MenuItem>
    <MenuItem value={10}>Kalutara</MenuItem>
    <MenuItem value={11}>Kegalle</MenuItem>
    <MenuItem value={12}>Kilinochchi</MenuItem>
    <MenuItem value={13}>Kurunegala</MenuItem>
    
    
    
    </Select>
        
    </div>
  );
}

export default App;
