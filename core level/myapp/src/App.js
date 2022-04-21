import React from 'react'
import Day1 from './components/Day1.js';
import Counter from './components/Counter.jsx';
// import  Formobj from './components/ Formobj.js';
import Formobj from './components/Formobj.js';


const App = () => {
  return (

    <div className="core">

          {/* hoook projects */}

          {/* form handling */}
           <Day1 />

             {/* counter */}
           <Counter />

           {/* <Formobj /> */}
           <Formobj />

    </div>
   



  )
}

export default App;
