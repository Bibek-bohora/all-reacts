import React,{useState} from 'react'
import "./Data.css"

const Myacording  = ({fname,about}) => {


    const [show,setshow]=useState(false)

    const events=()=>{

       console.log("click me")

       setshow(!show)

    }
    return (
        <div>
              

              <div className="top">

              <h1 className='pointer' onClick={events}>{(!show)?"+":"-"}</h1>
              <h1>{fname}</h1>
              </div>
            
                   {show&&<p>{about}</p>}
        </div>
    )
}

export default Myacording;
