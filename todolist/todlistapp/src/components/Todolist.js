import React, { useState } from 'react'

import "./todo.css";
import TodoProps from './TodoProps';

const Todolist = () => {


    const [name,setname]=useState("");

    const events=(e)=>{


    //    console.log(e)

       setname(e.target.value)
     



    }


    const[todo,settodo]=useState([]);



      const submit=()=>{


        settodo((bud)=>{

            return[...bud,name]

        })


        setname("");

      }

           

      const xxe=(id)=>{


        console.log("this is dle")

        // settodo((bud)=>{

        //     return bud.filter((itemval,index)=>{


        //        return index!==id;

        //     })


        // })

        settodo((bud)=>{

            return bud.filter((iteamval,index)=>{

                return index!==id; 
            })
        })
      }





    return (
        <div className='coinytainer'>

        <div className="wrap">


            <div className="head">

                <h1 className="textalign">
                    to do list 
                </h1>

                <div className="body">

                    <input type="text" placeholder='enter your items' onChange={events} value={name} />
                    <button className='btn' onClick={submit}>+</button>


                  
         
            </div>
            </div>
                <ul>

                {todo.map((terval,index)=>{

                 

                     {/* return <TodoProps name={terval}  key={index} id={index} submit={xxe} /> */}

                     return <TodoProps Gang={terval} key={index} id={index}  submit={xxe}/>
                })}
            </ul>
        </div>

        
            
        </div>
    )
}

export default Todolist;
