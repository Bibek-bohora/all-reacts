import React  from 'react'
import "./App.css"
import Button from '@mui/material/Button';

 

const App = () => {


  const obj={

    
  backgroundColor:"#faaf",
  color: "red",
  backgroundBlendMode: "multiply",
  padding:"50px",
  fontSize:"50px"

  }


  return (
    <div className='app'>
    <div className="appwrap">


   
        <h1 style={obj}>this is apap</h1>

        <div className="btn">

        <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        <div className="box">

          <div className="boxes" >click me</div>
          <div className="boxes">click me</div>
          <div className="boxes">click me</div>
          <div className="boxes">click me</div>
          <input type="text"  placeholder='enter your name' autoCapitalize='off' />
          <h1>index1</h1>
        </div>
        </div>
        </div>
    </div>
  )
}

export default App;
