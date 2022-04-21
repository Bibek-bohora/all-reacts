import React from 'react';
import '../App.css';

import { NavLink } from "react-router-dom";


const Menu = () => {
  return <div><h1>


 

  </h1>
         

         <nav>
         <ul>

            <li><NavLink  exact activeClassName="active" to="contact"> contact </NavLink></li>

            <li><NavLink exact activeClassName="active" to="about" >  about </NavLink></li>

             <li><NavLink  exact activeClassName="active"  to="service"> service</NavLink></li>
         </ul>

         </nav>
        
  </div>;
};

export default Menu;
