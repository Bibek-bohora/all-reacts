import React from 'react';
import { Formik } from 'formik';
import "./App.css"
import { number, object, string,min,max } from "yup";


const App2 = () => {


    

    const formvalidation=object({
       
        fname:string().required("name hana vaya"),
        email:string().required("email hanu pardai na").email("email hanu ayoudaina vaya "),
        password:string().required("ke garxa vaya").min(7).max(20),
        contact:number("number khai vaya").required().min(10).positive(),
        address:string().required().max(12),
  
  
      })
        


  return <div>

         <Formik  initialValues={{fname:"",email:"",password:"",contact:"",address:"",}} onSubmit={(data)=>{
        //    data.preventDefault();
             console.log(data);
             console.log("form submit");
             
             
            
         }} validationSchema={formvalidation}>

                {/* {/* <br />//errors handleSubmit,handleChange: ƒ () */}
{/* handleReset  values*/} 
                  {({errors,handleSubmit,handleChange,values})=>{

                     

                    {/* console.log(props) */}
                   return <div>
                  
                            
              <div className="formrap">


<div className="forhead">


<h1>
this is form validation with $yup $formilk

</h1> 

</div>


<div className="form">


<form action=""  onSubmit={handleSubmit}>
{/* autoComplete='off' onSubmit={handelsubmit} */}


 <div className="fullname">
 <label htmlFor="name">fullname</label>
 <input type="text" name='fname'  placeholder='enter name' onChange={handleChange} />
<br /> {errors.fname}
 </div>


 <div className="emailc">
 <label htmlFor="email">emai</label>
<input type="text" name='email' placeholder='Email' /><br />
{errors.email}
 </div>


 
 <div className="passwordc">
 <label htmlFor="password">password</label>
<input type="text" name='password' placeholder='password' /><br />
{errors.password}
 </div>
 


 <div className="contact">

 <label htmlFor="contact">contact</label>
<input type="text" name='contact'  placeholder='contact' /><br />
{errors.contact}
 </div>
 
 <div className="address">
 <label htmlFor="address">address</label>
<input type="text" name='address' placeholder='adress' /><br />
{errors.address}
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
                   </div>
                  }}
         </Formik>

         
  </div>;
};

export default App2;
