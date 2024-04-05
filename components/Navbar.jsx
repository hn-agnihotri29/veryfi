import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Encode_Sans_Semi_Expanded } from 'next/font/google';
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";

const enco = Encode_Sans_Semi_Expanded({
  subsets: ['latin'],
  weight: ['400','600','700']
});

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link className={enco.className} href="/">VERYFI </Link>
      </p>
      <nav className="navigation">
        <a href="/" className="nav-link">Brands</a>
        <a href="/" className="nav-link">Category</a>
        <a href="/" className="nav-link">Contact Us</a>
      </nav>
      <p className='search-bar-container'>
        <input type="text" className='search-bar' placeholder='Search Products'/>

        <button type="submit" className="searchButton search-link">
          <CiSearch className='search-icon'/>
        </button>

        <button type='button' className='cart-icon search-link' onClick="">
          <AiOutlineShopping/>
          <span className="cart-item-qty">1</span>
        </button>

        <button type='button' className='cart-icon search-link'>
          <FaCircleUser/>
        </button>
      </p>

      {/* <p className='user-container'>
        <button type='button' className='cart-icon' onClick="">
          <AiOutlineShopping/>
          <span className="cart-item-qty">1</span>
        </button>

        <button type='button' className='cart-icon'>
          <FaCircleUser/>
        </button>
      </p> */}

    </div>
  )
}

export default Navbar