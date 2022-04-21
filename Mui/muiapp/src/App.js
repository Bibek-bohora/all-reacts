import React,{useState} from 'react'


import { Autocomplete,TextField,Box } from '@mui/material';

const App = () => {

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    
  ];


  const [input, setinput] = useState("")

  
  const [submith, setsubmith] = useState([])
  


  const events=(e) => {
   

    // setinput(e.target.value)
    console.log(e.target.value)
    setinput(e.target.value)

    // setinput((old)=>{

    //   return{
    //     ...old,
    //     [e.target.name]:e.target.value,
    //   }
    // })
   

    
  }

  const submit=() => {
    setsubmith(input)
    setinput("")
  }

   
  return (
    <div>



<Autocomplete
  // disablePortal
  id="combo-box-demo"
  options={top100Films}
  sx={{ width: 800 }}
  renderInput={(params) => <TextField {...params} label="NEPALI MOVIES" />}
  
  
/>



<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />

    </Box>

{/*       
    <TextField
        id="outlined-basic"
        label="bibek"
        value={input.fname}
        onChange={events}
        
      /> */}
{/* 
      <input type="text"  name="fname" onChange={events}/> */}
      {/* <input type="text"  name="lname" onChange={events}/> */}


      <input type="text"  onChange={events} value={input}/>
      <button onClick={submit}>submit</button>

{/* 
      <h1>{submith.fname}</h1>
      <h1>{submith.lname}</h1> */}
{/* 
      <h1>{submith}</h1> */}

      {submith.map((mapp,index)=>{

        return <h1 key={index} {...mapp}>{mapp}</h1>
      })}
    </div>
  )
}

export default App;
