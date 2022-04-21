import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import "./Forms.css"

const Forms = () => {
    return (
        <div className='formcointainer'>

        <div className="form_wrap">


        

          <h1 className='text_align'>contact</h1>
        <form action="" className='form'>
              

              <div className="top">
              <input type="text"  placeholder='Enter your name'/>
             <input type="email"  placeholder='Enter your lname'/>

              </div>
           

             <div className="medium">
             <input type="number"  placeholder='phonenumber'/>
             <input type="text"  placeholder='address'/>


             </div>

             <textarea name="" id="" className='textarea' >

                 write message.....
             </textarea>
              

              <div className="btn">

              <button type='submit' className='inner'>submit</button>
            
              </div>
             
        </form>

      </div>
        </div>
    )
}

export default Forms;


