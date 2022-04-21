
import React,{useState} from 'react';
import "./Hook.css";

const Hook2 = () => {


    let x=new Date().toLocaleTimeString();


     const [date,setdate]=useState(x);


     const Refresr=()=>{
        x=new Date().toLocaleTimeString();
         setdate(x)


     }

    //  setInterval(Hook2,1000);

     setInterval(Refresr,1000);

    return (
        <div>


         <div className="clock">


             <h1>{date}</h1>

             <button className='btn'>clickme </button>
               
             
         </div> 
         
        </div>
            
    )
}

export default Hook2;
