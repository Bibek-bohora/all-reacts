import React,{useState,useEffect} from 'react'
import {Country} from "./Country.jsx"


import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';
const Covidbox = () => {

       const [data,setdata]=useState([]);

    const getData=async()=>{
           


        try{

            const response= await fetch('https://data.covid19india.org/data.json');

            const sdata= await response.json();
            // console.log(sdata);
            // console.log(sdata.statewise[0]);
            
    
            setdata(sdata.statewise[0]);

        }

        catch(error)
        {

            console.log("error")
        }



    }

    useEffect(() => {
        
         getData();
    }, []);

   
    const [country,setcountry]=useState(Country)


    const events=()=>{

         setcountry(country)
    }


    return (
        <div>
            <h1 className='text'>this is covid19 live app <span className='live'><LiveTvSharpIcon /></span></h1>

            <div className="boxes">
                

                <div className="top">

                <div className="box">
                <ul>
                    <li><h2><span>our country</span></h2></li>
                <li><h2>Nepal</h2></li>
                </ul>
                
                
                
                </div>

                <div className="box">

                 <ul>

                     <li><span>total</span><h2>Recovery</h2></li>
                     <li> {data.recovered}</li>
                 </ul>
               
                </div>

                <div className="box">
                    
                
                <ul>

                     <li><span>total</span><h2>confirmed</h2></li>
                     <li> {data.confirmed}</li>
                 </ul>
                   
                </div>

                </div>
               

               <div className="bottom">

               <div className="box">
             
               
               <ul>

<li><span>total</span><h2>deaths</h2></li>
<li>   {data.deaths}</li>
</ul>
               </div>

                <div className="box"> 
               
                <ul>

<li><span>total</span><h2>active</h2></li>
<li>   {data.active}</li>
</ul>
                  
                </div>

                <div className="box">
              
                <ul>

<li><span>total</span><h2>lastupdatedtime</h2></li>
<li>     {data.lastupdatedtime}</li>
</ul>
                </div>
               
               </div>
               



                
            </div>

            <div className="select">


            <select name="" id="" onClick={events}  placeholder='selected value' >

            {

                country.map((bug,index)=>{
                  return <option value={bug}>{bug}</option>

                })
            }

           
           
        
            </select>

            
            </div>

        </div>
    )
}

export default Covidbox;


// active: "363849"
// confirmed: "32249900"
// deaths: "432112"
// deltaconfirmed: "24692"
// deltadeaths: "438"
// deltarecovered: "36862"
// lastupdatedtime: "13/08/2021 23:27:22"
// migratedother: "12679"
// recovered: "31441260"
// state: "Total"
// statecode: "TT"
// statenotes: ""