import React,{useState} from 'react'
import Mytodo from './Mytodo';
// import {MdAddShoppingCart} from 'react-icons/fa';
// import { IconName } from "react-icons/bi";

// import { IconName } from "react-icons/ai";
// import { AiFillAmazonCircle } from "@react-icons/all-files/fa/AiFillAmazonCircle";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

import { AiFillAmazonCircle } from "react-icons/ai";


const Todolist = () => {

    const [input, setinput] = useState();

    const changeevents=(e)=>{

         
        
          setinput(e.target.value);
    }


  const [submit, setsubmit] = useState([]);

    const addbut=()=>{

        setsubmit((current)=>{

             return[...current,input]

        });



        setinput("")
       
 

    }

    const dle=(id)=>{

        console.log("click me to dle")


        setsubmit((item,index)=>{

            return item.filter((bug,index)=>{

                return index!==id
            })
        })

    }


    return (
        <div>
             <h1>todolist</h1>

             <input type="text" placeholder='add item in list' onChange={changeevents}  value={input}/>

             <button onClick={addbut}>add to cart <FaBeer size={20}  color='red' /> <AiFillAmazonCircle size={40} color='red'/></button>

               <ul>

                   {
                       submit.map((bug,index)=>{

                          return  <Mytodo key={index} id={index}  Gang={bug} prdle={dle} />
                       })
                   }
               </ul>

            
        </div>
    )
}

export default Todolist;
