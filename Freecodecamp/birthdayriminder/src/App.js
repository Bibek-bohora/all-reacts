import React, { useState } from 'react';
import {Data} from "./data.js"
 

import "./App.css"
const App = () => {


     const [img,setimg]=useState(Data)


     const events=()=>{

         console.log("clear");

         setimg([]);
         

     }
    

  return <div className='maindiv'>

         <div className="headline">
         <h1>this is birthday remindar app</h1>

           <h2>{img.length} birthday reminder today</h2>

         </div>
  
          

           <div className="filterdiv">


           

          {img.map((bug)=>{

               return <>
                   
                      <li>name:{bug.name}</li>
                      <li>age:{bug.age}</li>
                        <img src={bug.image} alt="" />

               </>

          })}

          </div>

             <div className="divbtn">


             <button onClick={events}>clear all</button>
             </div>
    
  
 </div>;

          
};

export default App;
