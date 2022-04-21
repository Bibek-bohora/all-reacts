import React from 'react'
// import Sdata from './components/Sdata';

const DateHook = (props) => {


    const currentstime= new Date().toLocaleTimeString();

    // setInterval(DateHook,1000);


// const obj={


//     name:"asim",

//     age:21,
//     address:"chitwan,nepal",
// }


// console.log(obj.name);
// console.log(obj.age);




    return (
        <div>

<div className='frame'>
            <h1 className='Daya'>top 5 nepali superstar</h1>
            <div>
            <h1 className='Name'>
             <ul>
                 <li> {props.Name}
                 </li>
             </ul>
             </h1>
            </div>
            <div>
                <h1 className='image'>
                    <img src={props.image} alt="" />
                    <div>
                        <h1 className='Bio'> {props.bio} </h1>
                        <a href={props.learnmore} className='Asim'>
                            <button>click here for more info</button>
                        </a>
                    </div>
                </h1>
            </div>
        </div>
        </div>
    )
}

export default DateHook;
