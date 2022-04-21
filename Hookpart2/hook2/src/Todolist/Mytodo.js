import React from 'react'

const Mytodo = (props) => {

    
    return (
        <div>
               <ul>

                   <li>{props.Gang} <span style={{cursor:"pointer"}} onClick={(()=>{

                       props.prdle(props.id)
                   })}>X</span></li>
               </ul>
        </div>
    )
}

export default Mytodo;
