import './App.css';
import * as React from "react";
import Apple_logo from './Apple_logo.svg';
import Samsung_logo from './Samsung_logo.svg';
import One_Plus_logo from './One-plus_logo.svg';
import Google_logo from './Google_logo.svg';
import Motorola_logo from './Motorola_logo.svg';
import Oppo_logo from './Oppo_logo.svg';
import Vivo_logo from './Vivo_logo.svg';
import Realme_logo from './Realme_logo.svg';
import Xiaomi_logo from './Xiaomi_logo.svg';
function Brands()
{
    return (
      <>
      <main className='BrandContainer'>
              <p className='BrandTitle'>Brands</p>
           <div className='logos'>
              <div className='brand_row1'>
                 <a href="https://github.com/"><img src={Apple_logo} className="Apple-logo" alt="logo"/></a> 
                 <a href="https://github.com/"><img src={Samsung_logo} className="Samsung-logo" alt="logo"/></a>
                 <a href="https://github.com/"><img src={One_Plus_logo} className="One-Plus_logo" alt="logo"/></a>
                 <a href="https://github.com/"> <img src={Google_logo} className="Google_logo" alt="logo"/></a>
                 <a href="https://github.com/"><img src={Motorola_logo} className="Motorola_logo" alt="logo"/></a>
                </div>
              <div className='brand_row2'>
              <a href="https://github.com/"> <img src={Oppo_logo} className="Oppo_logo" alt="logo"/></a>
              <a href="https://github.com/"> <img src={Vivo_logo} className="Vivo_logo" alt="logo"/></a>
              <a href="https://github.com/"> <img src={Realme_logo} className="Realme_logo" alt="logo"/></a>
              <a href="https://github.com/"> <img src={Xiaomi_logo} className="Xiaomi_logo" alt="logo"/></a>
               </div>
         </div>
      </main>
      </>
      );
    
}

export default Brands;
