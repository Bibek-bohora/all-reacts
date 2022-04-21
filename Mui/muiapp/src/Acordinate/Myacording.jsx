import React, { useState } from 'react'
import "./Acordinate.css"

const Myacording = ({name,about}) => {


    
    const add=()=>{



        console.log("this is clicked")
         setshow(!show)

      }

       const [show,setshow]=useState(false);
    
    return (
        <div>
            <div className="div1">
            <button onClick={add}>{!show?"+":"-"}</button>
            <h1>{name}</h1>
            </div>
            
            {show&& <p>{about}</p>}
            {/* {show ? "-":"+"} */}
        </div>
    )
}

export default Myacording;
