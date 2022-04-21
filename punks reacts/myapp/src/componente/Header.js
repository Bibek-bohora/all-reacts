import React from 'react'

import punksimg from './images/header/cryptopunk-logo.png';
import searchp from './images/header/search.png';
import switchimg  from './images/header/theme-switch.png'
import './header.css';

const Header = () => {
    return (
        <div className='cheader'>

        <div className="hedrelogo">
            <img src={punksimg} className='punnklogo' alt="" />
        </div>

        <div className="searchbar">

          <div className="searchicons">
               <img src={searchp} className='searchicons' alt="" />

           </div>
             <input type="text" className='inputitem' placeholder='collection items,or coloths......' />
        </div>


        <div className="headerlist">
        <p>drops</p>
        <p>marketplace</p>
        <p>create</p>


        </div>

        <div className="switch">

            <img src={switchimg } className='switchpng' alt="" />
        </div>

        <div className="getin">

            <button className='button'>getin</button>
        </div>
            
        </div>
    )
}

export default Header;
