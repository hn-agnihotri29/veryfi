import React from 'react';
import { Product, FooterBanner, Footer, HeroBanner } from '../components';
import { client } from '../lib/client.mjs';


const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner herobanner={bannerData.length && bannerData[0]} />

     <div className='products-heading'>
      <h2>Best Selling Smartphones</h2>
      <p>Summer Sale is here!</p>
     </div>

     {/* <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
     </div> */}


       <div className="product-list">
          {products?.map((product) => ( <div key={product._id}>
                                          <Product product={product} />
                                        </div>
          ))}
        </div>

     <FooterBanner footerBanner={bannerData && bannerData[0]} />


    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "smartphone"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;