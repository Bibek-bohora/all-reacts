import React,{useState}from 'react'



const Effect = () => {


     const [name,setname]=useState(0);

    //  useEffect(()=>{

    //     return(

    //         alert("this is right way")
    //         // document.title=` you click me ${name} times`
 

    //     )
       

    //  },[name])


          const clk=()=>{

            setname(name+1)
          

          }


    return (
        <div>


        <h1>this is counter {name} </h1>


        <button onClick={clk}>click me </button>




            
        </div>
    )
}

export default Effect;
