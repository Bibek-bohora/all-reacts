import React, { useEffect, useState } from 'react';
import "./css.css"
import axios from "axios";

import {ACESS_KEY} from "./APikey"





const Tempweather = () => {


     useEffect(()=>{

             

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${ACESS_KEY}`).then((response)=>{

              
            console.log(response);
            
            setwea(response)
        });


     },[]);


        const [wea,setwea]=useState([]);
        const [search,setsearch]=useState("mumbai");

    const events=(query)=>{

     console.log(query);

     setsearch(query);
     

    }
             
  return <div className='mincointener'>

          


          <div className="input">
          

          <div className="inp">
              
          </div>

              <input type="text"  onChange={(e)=> events(e.target.value)} placeholder='search any ....' value={search}/>
            
          </div>


          <div className="map">

            


          </div>
  </div>;
};

export default Tempweather;
