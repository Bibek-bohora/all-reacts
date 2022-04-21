// import React from 'react'
import React,{useState} from 'react';

import "./Hook.css";

const Hook1 = () => {


    let name1="this is bibek";
    let name2="this is asim";





  const [name, setname] = useState(name1); // this is bibek


  const change =()=>{

  

  // let val=name;


  (name===name2)?setname(name1):setname(name2);
    

  


  


  }


  
    return (
        <div>
           

           <h1>{name}</h1>
           <button onClick={change}>click me</button>
        </div>
    )
}

export default Hook1;
