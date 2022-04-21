
import React,{useState} from 'react'

const MyAcordian = ({id,fname,about}) => {


    const [show, setshow] = useState(false);




    
    const events =()=>{


        console.log("click")

        setshow(!show)
        
        }


    
    return (
        <div>
              <div className="top">

                  <button onClick={events}>{(!show)?"+":"-"}</button>
                  <h1>{fname}</h1>
                 
              </div>

              {show && <p>{about}</p>}
        </div>
    )
}

export default MyAcordian;
