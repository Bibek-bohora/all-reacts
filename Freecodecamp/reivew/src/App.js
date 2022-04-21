import React from 'react'
import "./App.css";

import Review from './Review';


import reviews from "./data"


// import { FaAccessibleIcon } from "react-icons/fa";
// import { BsFillAlarmFill} from "react-icons/bs";






const App = () => {

  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App