import React,{useState} from 'react'
import reviews from "./data"
import "./App.css";



import { BsChevronLeft,BsChevronRight} from "react-icons/bs";

import { FaQuoteRight} from "react-icons/fa";



const Review = () => {


    const [index, setindex] = useState(0)

    const {name,text,image, job,id}=reviews[index];


    

    const cheknumber=(number) => {
        if(number > reviews.length - 1){

           return 0;
            
        }

        if(number<0){

            return reviews.length - 1;
             
         }

         return number;
    }


    const perperson=(dispatch) => {
        
        

        if(dispatch ==="left"){

            setindex((index)=>{

                let newindex=index-1
                return cheknumber(newindex);
                // return newindex;
            })


            // setindex(index!==0 ?index-1: reviews.length-1)
        }

        if(dispatch ==="right"){

            // setindex((index)=>{

            //     let newindex=index+1
            //     return cheknumber(newindex);
            // })

            setindex(index!==reviews.length-1 ?index+1:0)
        }
       
       

    }


    const random =() => {
        
        let randomnumber = Math.floor(Math.random() * reviews.length);
        console.log(randomnumber)


        if(randomnumber === index){

           
            randomnumber=index+1;
            // console.log(randomnumber)

            
        }

        setindex(cheknumber(randomnumber))
        // setindex(randomnumber)

        }


    


    
  console.log( reviews)
  return (
    <article className='review'>
    
        
           <div className='review_cointener'>  
        <div className="img-container">

        <img src={image} alt="" className='person-img' />
        <span className='quote-icon ' > <FaQuoteRight /></span>

        </div>

         <p> RANK:{id}</p>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

       
         
        

        <div className="btn_cointener">
        <button  className='prev-btn' onClick={()=>perperson ("left")}>
        <BsChevronLeft/>


        </button>

        <button className='next-btn' onClick={()=>perperson ("right")}><BsChevronRight /></button>

        



        </div>

        
        <button className='random-btn' onClick={random}>suprise me</button>
        </div>  
       
    </article>


  )
}

export default Review