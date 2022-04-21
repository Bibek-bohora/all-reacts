import React from 'react'

const Memusearch = ({menuitem}) => {
  return (
    <div className='section_center'>
      

      {menuitem.map((mapp,index)=>{
       

        return<div className="pammchild" key={index} >


        <div className="items">
             <img src={mapp.img} alt="" className='images' />
        </div>

        
           <div className="items">
              <div className="itemstop">
                  <h2>{mapp.title}</h2>
                  <h1>{mapp.price}</h1>
           </div>
                       <div className="bottm">
                                <p>{mapp.desc}</p>
                       </div>
         </div>

          
        </div>
           
      })}

      
         
   
     
     </div>)

               
            

               
      
  
  
}

export default Memusearch;

