import React from 'react'
import "../App.css"
import {dlefun} from "../App.js"

import { useContext,useState } from 'react'

const Tours = ({id,name,image,info,price,events}) => {


    const [redmore, setredmore] = useState(false)


    const funde=useContext(dlefun)


    

  return (
    <div className="components2" > 

    <div className="wrapp">


   

    <article>

    <img src={image} alt={name} />

    

     <footer>

     <h3>{name}</h3>
     <h1>${price}</h1>
     


     </footer>


    
     <span><p>{redmore?info: `${info.substring(0,100)}`}</p> <span onClick={()=>setredmore(!redmore)}> {redmore? <p>...showless</p>:<p>...showmore</p> }</span></span>

     <button onClick={()=>{

 events(id)
}}>Remove the tour</button>

   
    </article>
     




    </div>

   
    </div>

      
  )
}

export default Tours