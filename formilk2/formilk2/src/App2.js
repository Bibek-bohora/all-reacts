import React from 'react';
import { Formik} from 'formik';


const App2 = () => {
  return <div>

     
      <Formik onSubmit={(data)=>{

        console.log(data);



      }} initialValues={{ fname:"",lname:"",email:"",contact:"",password:"",confirm_password:"",
      }}>

         {({errors,handleSubmit,handleChange,values})=>{
                  

            {/* console.log(props); */}

               return<form action="" onSubmit={handleSubmit}>

                 


                       

                          <div className="fname">

                          <input type="text" name='fname' />
                         </div>


                        <div className="lname">

                        <input type="text" name='lname'/>
                         </div>
                         {/* <div className="fname">
                       <input type="text" name='lname' />
                       </div> */}

                       <div className="email">
                       <input type="text" name='email' />


                       </div>

                       <div className="contact">
                       <input type="text" name='contact' />
                       </div>

                       <div className="password">

                       <input type="text" name='password' />
                       </div>

                       <div className="confirm_password">
                       <input type="text" name='confirm_password' />

                       </div>

                         <div className="btn">

                           <button type='submit'>submit</button>
                           <button >Reset</button>
                         </div>
                     
                   </form>
           


         }}





      </Formik>


  </div>;
};

export default App2;
