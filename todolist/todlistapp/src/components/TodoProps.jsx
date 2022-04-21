import React from 'react'

const TodoProps = (props) => {



    
    return (
        <div>
            {/* <li>{props.name} <span style={{color:"#fff",padding:"10px",cursor:"pointer",} }  onClick={(()=>{

                  props.submit(props.id)

            })} >*</span></li> */}

            <li>{props.Gang} <span style={{cursor:"pointer"}} onClick={()=>{

                props.submit(props.id)
            }}>X</span></li>
        </div>
    )
}

export default TodoProps;
