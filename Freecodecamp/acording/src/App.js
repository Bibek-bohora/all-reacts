import React,{useState} from 'react'
import  questions from "./data.js"
import {BsPlusLg } from "react-icons/bs";
import {BsDashLg} from "react-icons/bs";




import SingleQuestions from "./SingleQuestions.js"

const App = () => {


  const [question, setquestion] = useState( questions)

  const [navtog, setnavtog] = useState( false)

  return (
    <>


 <div className="navbar">

    
    <div className="logo">

      ITGARAGE
    </div>
    <ul className='navmenu'>
      <li>home</li>
      <li>home</li>

      <li className='dropepli'>
           product
        <ul  className='dropepul'>
          <li className='dropecontent'>home</li>
          <li className='dropecontent'>home</li>
          <li className='dropecontent'>home</li>
        </ul>
      </li>



    </ul>


    <ul id="menu">
      <li><a href="">Home</a></li>
      <li><a href="">About Us</a>
        <ul>
        <li><a href="">The Team</a></li>
        <li><a href="">History</a></li>
        <li><a href="">Vision</a></li>
        </ul>
      </li>
      <li><a href="">Products</a>
        <ul>
        <li><a href="">Cozy Couch</a></li>
        <li><a href="">Great Table</a></li>
        <li><a href="">Small Chair</a></li>
        <li><a href="">Shiny Shelf</a></li>
        <li><a href="">Invisible Nothing</a></li>
        </ul>
      </li>
      <li><a href="">Contact</a>
        <ul>
        <li><a href="">Online</a></li>
        <li><a href="">Right Here</a></li>
        <li><a href="">Somewhere Else</a></li>
        </ul>
      </li>
    </ul>

    <ul className={navtog?"formobilehidden":"formobile"}>

    <li>home</li>
      <li>home</li>

      <li>home</li>
    </ul>


    <div className="btn" onClick={()=>setnavtog(!navtog)}>

      {navtog?"+":"#"}
    </div>
 </div>
     
    <div className='cointener'>


        <div className="content">


        
  {questions.map((mapp,index)=>{

        return <SingleQuestions key={index} {...mapp} />

  })

  }
    
    </div>
    </div>
    
      
    </>
  )
}

export default App