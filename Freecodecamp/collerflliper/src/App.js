import './App.css';



import React,{useState} from 'react'






const App = () => {







  

  


  const events=() => {

    
       
  const randomenumber=() => {
    return Math.floor(Math.random()*hexcolor.length);
  }


      const hexcolor=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

      
             //hexcode #131311
      let hexcod="#";

      let i=0;

        for(i=0; i<6; i++){
  
          hexcod+=hexcolor[randomenumber()];                  
          
          
             console.log(hexcod)
        
          
          
        }

    setcolor(hexcod)
   
  }


  const [color, setcolor] = useState('#021313');


  const [picker, setpicker] = useState('#141414');


  const events2=(e) => {
    
    setpicker(e.target.value);

    console.log(e.target.value)
  }


  return (

    <>


<input type="text"  onChange={events2} className='input' placeholder='Enter the color or hex color code ' value={picker}/>
    <div className='cointaner' style={{backgroundColor:`${color}`,backgroundColor:`${picker}`,}}  >
   
              <div className="box" style={{backgroundColor:`${color}`}}>

                <h1>background:{color}<h4 style={{color:`${picker}`,textAlign:"center",textTransform:"capitalize"}}>{picker}</h4></h1>
                <div className="btn">

                  <button className='coll' onClick={events}>colorflliper</button>
                </div>
              </div>
    </div>




    </>
  )
}

export default App;