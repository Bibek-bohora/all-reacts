import React,{useState} from 'react'

const Day1 = () => {

    

    const [name,setname]=useState("");

    const [maya,setmaya]=useState("");
  

    const events=(e)=>{

        //  console.log(e.target.value)
         setname(e.target.value);

    }

    
    const clk=(e)=>{

        //  console.log(e.target.value)
         setmaya(e.target.value);

    }
    


    const [to,setto]=useState(); //inputstate
    
    const [toa,settoa]=useState();//submitstate


    const submit=()=>{
    
         setto(name); 

         settoa(maya)


        //  setto("");

        setname("");
        setmaya("");

    }
    return (
        <div>
            <h1>this form submit  </h1>
            
            <h1> name:{to}</h1>
            <h1>password:{toa}</h1>

            <input type="text" placeholder='enter the name' onChange={events} value={name} />

            <input type="password" onChange={clk} placeholder='Enter your password' value={maya}/>
          

            <button onClick={submit}>click me</button>
        </div>
    )
}

export default Day1;
