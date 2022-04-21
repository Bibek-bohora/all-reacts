import React,{useState}from 'react';
import "./App.css"

import { number, object, string,min,max } from "yup";
// import {object,string,required,number,password,min ,max,positive   } from 'yup';


const App = () => {







   
  const handelsubmit= async(e)=>{
            
      e.preventDefault();
    console.log("form submit");
      // set(e.target.value)
      // console.log(e.target.value);

       

    const formvalidation=object({
       
      fname:string().required(),
      email:string().required().email(),
      password:string().required().min(7).max(20),
      contact:number().required().min(10).positive(),
      address:string().required().max(12),


    })
      
  const formData={

    fname:e.target[0].value,
    email:e.target[1].value,
    password:e.target[2].value,
    contact:e.target[3].value,
    address:e.target[4].value,
  


  }

     const isValid= await formvalidation.isValid(formData);
  console.log(formData);
  console.log(isValid);

    
  }



  // make object sekema




  return <div>

              <div className="formrap">


         <div className="forhead">

        
  <h1>
        this is form validation with yup

  </h1> 

</div>
 

     <div className="form">

       
       <form action="" onSubmit={handelsubmit} >
       {/* autoComplete='off' */}

          <div className="fullname">
          <label htmlFor="name">fullname</label>
          <input type="text" name='fname'  placeholder='enter name' /> 
          </div>


          <div className="emailc">
          <label htmlFor="email">emai</label>
         <input type="text" name='email' placeholder='Email' /> 
          </div>


          
          <div className="passwordc">
          <label htmlFor="password">password</label>
         <input type="text" name='password' placeholder='password' /> 
          </div>
          


          <div className="contact">

          <label htmlFor="contact">contact</label>
         <input type="text" name='contact'  placeholder='contact' /> 
          </div>
          
          <div className="address">
          <label htmlFor="address">address</label>
         <input type="text" name='address' placeholder='adress' /> 
          </div>


          <div className="btns">

          <button type='submit'>submit me</button>
          </div>
         
        
       </form>

       
     </div>
{/* 
     {submit.map((old,index)=>{

         return <div>

                <li key={index}>{old.fname}</li>
         </div>
     })} */}

               
     </div>
  </div>;
};

export default App;
