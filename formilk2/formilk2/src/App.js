import React, { Children } from 'react';

import { object,string,number,min } from 'yup';




const App = () => {


     

 const handelsubmit= async(e)=>{
         e.preventDefault();

           const formvalidationz=object({  
            fname:string().required(),
            lname:string().required(), 
            email: string().email(),
            contact:number().min(10).required(),
          password:string().required(),
          confirm_password:string().required(),


           })


         const formdata={


          fname:e.target[0].value,
          lname:e.target[1].value,
          email:e.target[2].value,
          contact:e.target[3].value,
          password:e.target[4].value,
          confirm_password:e.target[5].value,
         }
          

         const isvaid= await formvalidationz.isValid(formdata);
         console.log(isvaid);
         console.log(formdata);
 }
  return <div>
                 


                 <div className="headerform">

                 <h1>this is formilk and yup fullstacks</h1>

                 </div>

                 <div className="formcointener">

                   <form action="" onSubmit={handelsubmit}>

                       

                          <div className="fname">

                          <input type="text" name='fname' />
                         </div>


                        <div className="lname">

                        <input type="text" name='lname' />
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
                 </div>
               

  </div>;
};

export default App;
