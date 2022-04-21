import React,{useContext} from 'react'
import { Firstname,Lastname } from '../App';


const Compc = () => {

    const fname=useContext(Firstname);
    const lname=useContext(Lastname);


    return (

          
        <div>

          <h1>{fname}</h1>
          <h1>{lname}</h1>
           

           {/* <Firstname.Consumer>
                
              {

                  (fname)=>{
                   return (
                      

                      <Lastname.Consumer>

                          {

                              (lname)=>{
                                 

                                 return (

                                     <>

                                         <h1>{fname}</h1>
                                         <h1>{lname}</h1>
                                     </>
                                 )

                              }
                          }
                      </Lastname.Consumer>
                   )

                  }
              }
               
           </Firstname.Consumer> */}
            
        </div>
    )
}

export default Compc;
