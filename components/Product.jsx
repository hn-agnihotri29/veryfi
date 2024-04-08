import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client.mjs';
import { IoHeartCircleOutline } from "react-icons/io5";

const Product = ({ product: { frontImageLink, backImageLink, productName, slug, amazon } }) => {
  return (
    // <div className='product-card'>
    //   <Link href={`/product/${slug.current}`}>

    //     <img src={frontImageLink} className='product-image' alt="smartphone" />
    //     <p className='product-name'>{productName}</p>
    //     <p className='product-price'>{amazon}</p>
    //   </Link>
    // </div>
    <div className="product-card">
        <Link href={`/product/${slug.current}`}>
          <div className="product-image-wrapper">
            <IoHeartCircleOutline className='wishlist-icon'/>
            <img src={frontImageLink} alt="smartphone" className="product-image" />
          </div>

        <div className="product-details">
          <div className="product-info">
            <div className="product-name-desc">
              <h3 className="product-name">{productName}</h3>
              {/* <p className="product-description">{product.description}</p> */}
            </div>
            <div className="product-price">&#8377;{amazon}</div>
          </div>
          {/* <div className="product-rating">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e286e0ad475faafe1677fad535632ed04adb2899fb47e9cd8f29d74dc9046588?apiKey=f3740fe9b8ab4dd7a5e84241647030b4&" alt="Star rating" className="rating-stars" />
            <div className="rating-count">({product.rating})</div>
          </div> */}
          <div className="product-actions">
            <button className="add-to-cart-btn">View Details</button>
            <button className="add-to-shortlist-btn">Compare Now</button>
          </div>
        </div>
      </Link>
  </div>
  )
}

export default Product