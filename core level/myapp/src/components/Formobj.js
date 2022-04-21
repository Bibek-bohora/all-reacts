// import React from 'react'
import React,{useState} from 'react'

const Formobj = () => {

 const [fullname,setfullname]=useState({


    fname:"",
    lname:"",

 })


 const [onsubmitname,setonsubmitname]=useState({


    fname:"",
    lname:"",

 })
   



//  const events=(e)=>{

//     console.log(e.target.value)

//  }



 const events=(e)=>{


        
       let value=e.target.value;
       let name=e.target.name;

    setfullname((oldmunk)=>{

        return{


            ...oldmunk,
            [name]:value,
        }


    })
     
 }

const submit=(f)=>{


    console.log("click me")
    
    f.preventDefault();

     setonsubmitname(fullname);
    setfullname({

        fname:"",
        lname:"",

    });
    // alert("submit");
}


    return (
        <div>
             <h1>this is form from objects</h1>
             <h1>{`${onsubmitname.fname}  ${onsubmitname.lname}`}</h1>
             

             <form action="" onSubmit={submit}>
             <input type="text" placeholder='enteryourFname' value={fullname.fname} name='fname'  onChange={events}  autoComplete='off' />

             <input type="text" placeholder='enteryourLname' value={fullname.lname} name='lname'  onChange={events} autoComplete='off' />


             <button >submit</button>

             </form>
        </div>
    )
}

export default Formobj;
