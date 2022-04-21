import React ,{useEffect} from 'react'



const Covid = () => {


    const getCovidData=async()=>{


        try{


            const response= await fetch('https://disease.sh/v3/covid-19/jhucsse/counties');
            

            // https://api.nepalcovid19.org/data.json

            const users= await response.json();
            // console.log(users.name);
            // console.log(users.id);
     
        }


        catch(error){
            console.log("error");

        }
        


    } 


    useEffect(() => {
       
         getCovidData();
    }, )


    return (
        <div>
             <h1>this is live</h1>
             
             <h1>this is covid 19</h1><h1>this is covid 19</h1>
             

             


             
        </div>
    )
}

export default Covid;
