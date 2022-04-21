
import React,{createContext, useContext} from 'react';
import './App.css';
import About from './about';
import Contact from './bouter/contact';
import Service  from "./bouter/Service"
import Menu from './bouter/Menu';
import Erorr from './bouter/Erorr';
import ReactDOM from 'react-dom';
import { Routes, Route, Link } from "react-router-dom";


 let Firstname=createContext();
 let Secondname=createContext();
 

const App = () => {
  return <div>


          <div className="router">

 


        <Menu />

        <Routes>

          <Route  path="/about" element={<About/>} />
          <Route  path="/service" element={<Service/>} />
          <Route  path="/service/:fname/:lname" element={<Service/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="*" element={<Erorr/>} />
        </Routes>




          </div>




         


         <div className="useContext">


         
          {/* useContext */}
    <Firstname.Provider value={" bibek"}>

    <Secondname.Provider value={"hello"}>
    <About />
    </Secondname.Provider>

    



    </Firstname.Provider>

    </div>
   
  </div>;
};

export default App;

 {/* useContext */}
export{Firstname};
export{Secondname};
