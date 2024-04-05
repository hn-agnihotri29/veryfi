import React, { useState } from 'react'
import { client } from '@/lib/client.mjs';
import {AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiFillStar} from 'react-icons/ai';
import { Product } from '@/components';
import Review from '@/components/Review';
import Star from '@/components/star';

const ProductDetails = ({product, products}) => {

 const {frontImageLink, productName, simType, processor, memory, battery, display, camera, memoryCard, version, backImageLink, amazon, flipkart, croma} = product;
 const [index, setIndex] = useState(0);
 return (
    <div>
         <div className='product-detail-container'>
            <div className='carousel-container'>
                <div className='image-container'>
                    <img src={frontImageLink} alt="smartphone" className='product-detail-image' />

                </div>
                <div className='small-images-container'>
                        <img src="https://cdn1.smartprix.com/rx-iDOkC3zRl-w204-h420/apple-iphone-13.webp" alt="smartphone" className='small-image'/>
                </div>
                {/* <div className='small-images-container'>
                {image?.map((item, i) => (
                    <img src='{urlFor(item)}' className='' onMouseEnter='' />
                                         ))
                }

                </div> */}
            </div>

            <div className='product-detail-desc'>
                <h1>{productName}</h1>
                <div className='reviews'>
                    <div className="rating">
                        <Star />
                        <span className="rating-value">4.8</span>
                    </div>
                    <div className="review-count">
                        <Review />
                        <span className="review-count-value">67 Reviews</span>
                    </div>
                </div>
                    <h4>Highlights: </h4>

                       <ul>
                            <li className="list-items"> <span className='list-items-header'> Sim&nbsp;: </span>  &nbsp;{simType}</li>
                            <li className="list-items"> <span className='list-items-header'> Processor&nbsp;: </span>  &nbsp;{processor}</li>
                            <li className="list-items"> <span className='list-items-header'> Display&nbsp;: </span>  &nbsp;{display}</li>
                            <li className="list-items"> <span className='list-items-header'> Camera&nbsp;: </span>  &nbsp;{camera}</li>
                            <li className="list-items"> <span className='list-items-header'> Memory Card Support&nbsp;: </span>  &nbsp;{memoryCard}</li>
                            <li className="list-items"> <span className='list-items-header'> Version&nbsp;: </span>  &nbsp;{version}</li>
                            <li className="list-items"> <span className='list-items-header'> Storage&nbsp;: </span>  &nbsp;{memory} </li>
                            <li className="list-items"> <span className='list-items-header'> Battery&nbsp;: </span>  &nbsp;{battery}</li>
                       </ul>


                    <div className='price'>
                        <button type="submit" className='price-button'>Amazon <span> &#8377;{amazon} </span> </button>
                        <button type="submit" className='price-button'>Flipkart <span> &#8377;{flipkart} </span> </button>
                        <button type="submit" className='price-button'>Croma <span> &#8377;{croma} </span> </button>
                    </div>

                    <div className='buttons'>
                        <button type='button' className='add-to-cart' onClick="">Compare Now</button>
                        <button type='button' className='buy-now' onClick="">Wishlist</button>
                        <button type='button' className='buy-now' onClick="">Buy Now</button>
                    </div>

                </div>

            </div>



            <div className='maylike-products-wrapper'>
                <h2>You may also like</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map((item) => (
                            <Product key={item._id} product={item}/>
                        ))}
                    </div>

                </div>

            </div>

        </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "smartphone"]{
        slug{
            current
        }
    }`;
    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "smartphone" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "smartphone"]';
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    // console.log(product);

    return {
      props: { product, products }
    }
  }

export default ProductDetails