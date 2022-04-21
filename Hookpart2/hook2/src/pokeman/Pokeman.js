import React,{useState} from 'react'
import "./pokeman.css"

const Pokeman = () => {


    const [select,setselect]=useState([1,5,5,84,81]);


 const events=(e)=>{

     setselect(e.target.value);

    console.log(e.target.value)
    setselect(select)
     
 }



    return (
        <div>
              <h1>this is pockeman</h1>

              <div className="selection">

              <select name="" id="" onClick={events} >

                     {

                         select.map((bug,index)=>{

                             return <option value={bug} key={index}>{bug}</option>
                         })
                     }
              </select>


              </div>
        
        </div>
    )
}

export default Pokeman;
