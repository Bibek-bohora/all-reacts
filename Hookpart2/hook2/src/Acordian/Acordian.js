import React,{useState} from 'react'
import { Data } from './Data';

import Myacording from './Myacording ';

const Acordian = () => {

const [name,setname]=useState(Data);


const events=()=>{

    // console.log("me click")
    // setname((bug,index)=>{


    //         return [...bug,name]
    // })
}


    return (
        <div>

              {

                  name.map((current,index)=>{

                      return <Myacording  key={index} {...current}/>



                  })
              }
        </div>
    )
}

export default Acordian;
