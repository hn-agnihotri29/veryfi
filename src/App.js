import './App.css';
import * as React from "react";
import Features from './Features'
import Footer from './Footer'
import Brands from './Brands';
import Veryfi from './Veryfi';

function VeryfiHereThenBuy() {
  return (
    <>
    <Veryfi/>
    <Brands/>
    <Features/>
    <Footer/>
    </>
  );
}

export default VeryfiHereThenBuy;
