
import React,{useState,useEffect} from 'react'
import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';

const Covid19 = () => {


    const [data,setdata]=useState([]);
    const getData= async()=>{
    
          try{
    
           const responsive= await fetch('https://data.covid19india.org/data.json');
           const adata= await responsive.json();
           console.log(adata.statewise);
           setdata(adata.statewise);
           console.log(adata);
          }
    
          catch(error)
          {
    
           console.log("error");
          }
         
    }
    
        
    
     useEffect(() => {
      
        getData();
     }, []);
    

    return (
        
            <div className='div'>
          <h1> this is live covid19 app<span className='live'><LiveTvSharpIcon /></span> </h1>

          <table >

          <thead>
<tr className='pa'>

               <th>state</th>
               <th>confirmed</th>
               <th>reciovery</th>
               <th>death</th>
               <th>active</th>
               <th>update</th>
             </tr>

          </thead>

          <tbody>



             


              
               {

                 data.map((current,index)=>{

                   return <tr className='tbodytr'>

               <td>{current.state}</td>
               <td className='sucess'>{current.confirmed}</td>
               <td className='sucess'>{current.recovered}</td>
               <td  className='deadt'>{current.deaths}</td>
               <td className='sucess'>{current.active}</td>
               <td className='sucess'>{current.lastupdatedtime}</td>
             </tr>
                   

                 })
               }
               
             
              
          </tbody>
          </table>
   </div>
        
    )
}

export default Covid19;


