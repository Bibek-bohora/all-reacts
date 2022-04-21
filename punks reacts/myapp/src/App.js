import logo from './logo.svg';
import './App.css';
//import './componente/Header.js';
import Header from  './componente/Header.js';
import Collection from './componente/Collection.js'

import React from 'react';

export const App = () => {
  return (

    <div className='fheader'>

           <Header />
           <Collection />
    </div>
  
  )
    
    
  
}


export default App;
