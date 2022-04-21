import React,{useState} from 'react'
import Mouse from  "./Mouse.jsx"


const Todo = () => {
   

      const [name, setname]=useState();

      const events=(e)=>{

         setname(e.target.value)

      }


    const [nameq, setnameq]=useState([]);

      const submit=(f)=>{

      
        // f.preventDefault();
        setnameq((todo)=>{
              return[...todo,name]

        })

        setname("")

     }

      const dle=(id)=>{


          console.log("clickl")
           
      }

    
    return (
        <div>
              

              <h1>this is to do list</h1>

             


              

                  <input type="text" onChange={events} value={name} placeholder='add items' />

                  <button onClick={submit}>click me </button>

                  <ul>

                   {
                    nameq.map((old,index)=>{

                        return <Mouse wap={old} key={index}  id={index} onsubmit={dle}/>

                        {/* return <li>{old} <span style={{cursor:"pointer"}}>X</span></li> */}
                        

                    })
                   }
                  </ul>


             
        </div>
    )
}

export default Todo;
