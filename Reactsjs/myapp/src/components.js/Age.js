import React from 'react'
// import Map from './Map';


const Age = () => {



    const name ="my name is bibek chhetri";
    
 const date=          new  Date().toLocaleDateString();
const currenttime=   new  Date().toLocaleTimeString();


const d=new Date();

const m= d.getMonth();
console.log(m);

const h=d.getHours();
console.log(h);


const myname={


    color:"green",
    backgroundColor:"red",
    padding:"10px",
}


 

  
  


   
    return (
        <div>
            <h2>{name}</h2>

            <h1 style={{color:"red", backgroundColor:"yellow"}}>your time is </h1>
            <h1>current date{date}</h1>
            <h1 style={myname}>{currenttime}</h1>
            <input type="text" id='' className='' />



            <h1 style={myname}>this is internal css</h1>
           



              
        </div>
    )
}

export default Age;
