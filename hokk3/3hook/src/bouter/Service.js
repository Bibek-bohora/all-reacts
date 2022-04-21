import React,{} from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Erorr from './Erorr';
import About from '../about';

const Service = () => {

   const {fname,lname}=useParams();

   const location =useLocation();

   console.log(location);
 

  return <div>

      <h2>this is Service js</h2>

            <h1>myname is{fname} is the lastname{lname}</h1>


            <p>{ location.pathname}</p>

            {
                location.pathname==="/service/bibek/chhetri"? <button > <a href="/contact" >contact</a></button>:<Erorr />
            }
  </div>;
};

export default Service;
