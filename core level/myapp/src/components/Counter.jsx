// import React from 'react'
import React,{useState} from 'react'

const Counter = () => {

     let x=0;
     const [counter,setcounter]=useState(x);


    const inc=()=>{

    console.log("clicked")
    setcounter(counter+1)

    }
    
    const drc=()=>{

        // console.log("clicked")


        if(counter>0){


          return  setcounter(counter-1)
          alert("less than zero");

        }

        else{
            alert("less than zero is no accepts");
               return setcounter(0)
              
        }
        


    
        }
        
    const res=()=>{

        // console.log("clicked")
        setcounter(0);
    
        }

    
    return (

 
        <div>
              <h1>this is counter</h1>

                <h1>{counter}</h1>


                <div className="btn">

                    <button onClick={inc}>increment</button>
                    <button onClick={res}>resrt</button>
                    <button onClick={drc}>decrements</button>

                </div>
        </div>
    )
}

export default Counter;
