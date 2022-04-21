import React from 'react'
import Tours from './Tours'
import "../App.css"


const Tour = ({tours,isq,events}) => {



  console.log(tours)
  console.log(isq)

          



  return (
    <div className='components'> 
    
       <h2 style={{backgroundColor:"#222", color:"#fff", top:"0",padding:"20px",textAlign:"center"}}>tours components</h2>

       { 
        
        
         tours.map((fill,index)=>{
           return   <Tours  key={fill.id} {...fill}  id={index} events={events}/>
         })
       } 
          

   
    
    
    </div>
  )
}

export default Tour