import React,{useState} from 'react'
import {Pass} from "./Api.js";
import Myacording from  "./Myacording"


const Accordian = () => {


    const [name,setname]=useState(Pass);


    return (
        <>
        <div className='div'>
          
          
          {name.map((itemval)=>{

            const {id}=itemval;

                return <Myacording  came={itemval} key={id}  {...itemval} />;

          })}
        </div>

        </> 
    )
}

export default Accordian;
