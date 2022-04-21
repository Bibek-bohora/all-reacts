import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const name="ashim sharema"

let x=10;
let y="ashim ";


ReactDOM.render(
  
 <>
 <h1>this is me {name}</h1>
 <h1>
   {10+10}
 </h1>

 

<App />

 </>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
