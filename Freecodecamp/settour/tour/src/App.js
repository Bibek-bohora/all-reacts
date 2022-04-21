import React,{  useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios"
import Tour from './metiralui/Tour';
import { createContext } from 'react';


    
const url = 'https://course-api.com/react-tours-project';


export const dlefun=createContext();

const App = () => {

 const zfetct= () => {
  axios.get(`${url}`).then((response)=>{
        

    // const dell=response.data
    setimage(response.data) 
    setloading(false)
    console.log(response.data)
  })

 }

    useEffect(()=>{
         

      
      zfetct()
    },[])

    const [image,setimage]=useState([]);
    const [loading,setloading]=useState(true);


   const  events = (id) => {
    setimage((mapp,index)=>{

          return  mapp.filter((upp,index)=>{

            return index!==id
          })

    })
    }


    if(image.length === 0){

      return loading?"data is loading......":
       <main>

        <h1>there is no images</h1>
        <button onClick={()=> {
          
       
          
          // setimage(dell)
          zfetct()
          console.log("to refress")
        
        }}>refress</button>
      </main>
    }
    else{



    }
  

     
      // (image.length === 0)?"lodding":<main><p>no image</p>
      //      <button onClick={()=> {
      //       zfetct()
      //        console.log("to refress")
      //      }}>refress</button>
      //   </main>


  return (
    <div>

       <dlefun.Provider value={"bibek"}>

         
  
        <Tour  tours={image}   isq={loading} {...image}  events={events}/>

        
       </dlefun.Provider>

    </div>
  )
}

export default App