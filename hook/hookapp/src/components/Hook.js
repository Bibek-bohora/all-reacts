// import React from 'react'
import ReactDOM from 'react-dom'

import React , { useState } from 'react';




// import './hook.css'

const Hook = (props) => {


let x=new Date().getHours();

// console.log(x);

let name ="";



name="ashim";




// let y=""; //assined


//     if(x>=1 && x<=12){
   
//         // console.log("good morning guys")
//         y="good morning";

//     }

      
    

//     else if(x>=12 && x<=18){

//         // console.log("good evening guys")
//         y="good evenings";


//     }

//     else{

//          console.log("good night guys")
//          y="good night";

//     }

// let bount="";
// let xount=0;
//    const myFun=()=>{

//     console.log("this is me able");

//              let bount =count++;

//              console.log(count);
//    }


    
      

    // const [state, setstate] = useState(initialState);


    // const[count,setCount]   =    useState(0);

    const [count, setCount] = useState(0);

   const increments=()=>{

    setCount(count+1);


   }
   
   const dicrements=()=>{

    setCount(count-1);


   }

   const reset=()=>{

    setCount(0);
 
   }


setInterval(Hook,1000);
    return (
        <div className='cont'>

        <h1 className='h1 '>hello ashim <span className='' style={{color:"red"}}> </span></h1>
            {/* <h1 onClick={myFun}>your age is{`${props.age}`}</h1> */}
            <p>this is {count}</p>
           
            <button onClick={increments}>increments</button>
            <button onClick={reset}>reset</button>
            <button onClick={dicrements}>dicrements</button>


       
        </div>
    )
}


export default Hook;
