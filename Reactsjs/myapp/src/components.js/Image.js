import React from 'react'

import myimage from './images/a.jpg';

const Image = () => {


    const imgvar=" C:\Users\bibch\OneDrive - Saptagandaki Multiple Campus\Desktop\Reactsjs\myapp\src\components.js\images\a.jpg";

    const img1="https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=";
    return (
        <div>


         <img src={myimage} style={{height:"500px",margin:"10px",borderRadius:"10px"}} alt="" />

         <img src={imgvar} alt="" />



         <img src={img1} alt="" />
         <h1>hello</h1>


            
        </div>
    )
}

export default Image;
