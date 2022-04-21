// SingleQuestions.js

  import {BsDashLg} from "react-icons/bs"
  import {BsPlusLg} from "react-icons/bs"
  import "./App.css"

import React,{useState} from 'react'

const SingleQuestions = ({title,info,id}) => {

    const [get, setget] = useState(true)


    
  const events=() => {
    

    console.log("click me")
    setget(!get)

  }
  return (
    <div> 

           <div className="title">

           <h3 className="question">{title}</h3>
           <span onClick={events} className="span">{!get?<BsDashLg/>:<BsPlusLg/>}</span>

           </div>

           <div className="info">

               <div className="infowar" >
               {!get&& <p className="infotext">{info}</p>}
               </div>
           </div>
         
           
         
    </div>
  )
}

export default SingleQuestions;