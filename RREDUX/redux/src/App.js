// // import React,{useState} from 'react'

// // const App = () => {




// // const [count, setcount] = useState(0)


// // const events=(diapatch) => {


// //   if(diapatch==='count+'){


// //         setcount(count+1)
// //   }
// //   if(diapatch==='reset'){

// //     setcount(0)
// //   }


// //   if(diapatch==='count-'){
   


// //     if(count<0){

  
// //       alert("not accepts less than Zero")
// //     }


// //     else if(count>0){


// //       setcount(count-1)

// //     }
   

// //   }
 
// // }
// //   return (
// //     <div>App
    
    
// //          <h1 >{count}</h1>

// //         <div className="buttons">

// //         <button  onClick={()=>events("count+")}>count+</button>
// //        <button  onClick={()=>events("reset")}>reset</button>
// //        <button onClick={()=>events("count-")}>count-</button>
// //         </div>
      
       
    
// //     </div>
// //   )
// // }

// // export default App


// import React,{useReducer,createContext} from 'react'

// import Btn from './Btn'


// export const  Firstcount= createContext();
// const App = () => {




//     const reducer=(state,action) => {
      

//       //  if(action==='count+'){
          


//       //   return state+1
         

//       //  }



//           switch(action){

             

//             case"count+":

//             return state+1

//             case "reset":
//             return state=0


//             case"count-":
//             return state-1


//             default:
            

//             return state;

//           }



//     }



//     const [state, dispatch] = useReducer(reducer,10)




//   return (
//     <div>


//     <h1>{state}</h1>
//       <div className="btns">

//       <button  onClick={()=>dispatch("count+")}>count+</button>
//       <button  onClick={()=>dispatch("reset")}>reset</button>
//       <button onClick={()=>dispatch("count-")}>count-</button>
//       </div>

//        <Firstcount.Provider value={state}>
//        <Btn  heloo="bibek" />
     
     
//        </Firstcount.Provider>


     

//     </div>
//   )
// }

// export default App















import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {incNUM,decNUM} from "./actions/index"  //import the actions
const App = () => {


  const myState = useSelector((state) = state.changeTHENumber);


  const dispatch=useDispatch(); //all the actions by redux  hook

  return (
    <div>
    
    
        <h1>{ myState }</h1>
       
     <div className="btns">


       <button onClick={()=>dispatch(incNUM())}>count+</button>
       <button>reset</button>
       <button onClick={()=>dispatch(decNUM())}>count-</button>
     </div>
    </div>
  )
}

export default App

