import React,{useState} from 'react';


import ReactDOM from 'react-dom';

import "./Hook.css"









const Hook = () => {


     let x=0;
     let y="this is bibek"
     let z="this is bibas";

    const [color, setcolor]=useState(x);


    const INC=()=>{

       setcolor(color+5);
    //    setcolor(y)

    }

    
    const DEC=()=>{

        setcolor(color-5);
        // setcolor(z)
 
     }

     
    const REC=()=>{

        setcolor(0);
        
 
     }


       let age=17;



       let Rx100= (age>18) ? "you are eligible to drink" : "you are not eligible to drink";









    return (
        <div className='center'>

           <div className="header">


           <h1 className='count'>{color}</h1>

           <h1>this is ashim </h1>
           <h1>{Rx100}</h1>
           </div>
            

            <div className="btn">
            
                   
               <button onClick={INC}>increments</button>
                   
               <button onClick={REC}>reset</button>
                <button onClick={DEC} disabled={color===0?true :false}>decrements</button>
         
            </div>

          
        </div>
    )
}

export default Hook
