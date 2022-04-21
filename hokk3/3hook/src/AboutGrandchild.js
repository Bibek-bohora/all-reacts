import React,{useContext} from 'react';
import {Firstname, Secondname} from './App'



const AboutGrandchild = () => {


const fname = useContext(Firstname);
const sname = useContext(Secondname);
  return <div>

   
      <h1>AboutGrandchild</h1>
      <h1>{fname}</h1>
      <h1>{sname}</h1>

       {/* <Firstname.Consumer>

           {

               (fname)=>{

                    return  <Secondname.Consumer>

                                {

                                    (sname)=>{


                                        return <div>

                                            <h1>{fname}</h1>
                                            <h1>{sname}</h1>
                                        </div>
                                    }
                                }
                    </Secondname.Consumer>
               }
           }
       </Firstname.Consumer> */}




  </div>;
};

export default AboutGrandchild;
