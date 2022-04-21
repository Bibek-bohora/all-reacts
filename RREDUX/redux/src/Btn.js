import React ,{useContext}from 'react'



import { Firstcount } from './App'

const Btn = (props) => {


  const Fcount=useContext(Firstcount)


  return (
    <div>
    
     <h1>{Fcount}</h1>

     <p>{props.heloo}</p>
    
    </div>
  )
}

export default Btn