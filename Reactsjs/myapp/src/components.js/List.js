import React from 'react'
import "./list.css";

const List = () => {

  const x=10;
  const y=20;
  const sum=x+y;
  const name ="ashim sharma";

    return (
        <>

             <div>

         <h2>the list of 5 netflix series</h2>

         <ol>

             <li>money heist</li>
             <li>rampapam</li>
             <li>14peaks</li>
             <li>mirjapur</li>
             <li>wow</li>
         </ol>
            
        </div>
        <form action="">

            <input type="text" placeholder='enter the username' />

            <h1>the sum is {sum}<br/> {name}</h1>
        </form>
        </>
        
        
    )
}




export default List;
