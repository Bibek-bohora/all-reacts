 
import MyAcordian from './MyAcordian';
import { Pass } from './Data.js';
import React,{useState} from 'react'

const Acording = () => {


    const [lata, setlata] = useState(Pass);



    return (
        <div>


             
            
            {

                lata.map((temval,index)=>{
                      
                    return <MyAcordian key={index} {...temval}/>
                    {/* return <h1>this os </h1> */}
                  

                })
            }

            

    
        </div>
    )
}

export default Acording;

