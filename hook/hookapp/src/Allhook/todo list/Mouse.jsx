import React from 'react'

const Mouse = (props) => {
    return 
         <li>{props.wap}<span style={{cursor:"pointer"}} onClick={()=>{

             props.onsubmit(props.id)
         }}>X</span> </li>
    
}

export default Mouse;
