import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client.mjs';
import { Georama } from 'next/font/google';

const amar = Georama({
  subsets: ['latin'],
  weight: ['700']
});

const HeroBanner = ({ herobanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className="beats-solo">{herobanner.smallText}</p>
        <h3>{herobanner.midText}</h3>
        <h1>{herobanner.largeText1}</h1>
        <img src={urlFor(herobanner.image)} alt="smartphone" className='hero-banner-image' />

        <div>
          <Link href = {`/product/${herobanner.product}`}>
           <button type='button'>{herobanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5 className={amar.className}>Lowest Prices Ever</h5>
            {/* <p>{herobanner.desc}</p> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroBanner