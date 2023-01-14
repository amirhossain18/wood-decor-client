import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../Components/BookingModal/BookingModal';
import Product from '../../Components/Products/Product';

const Other = () => {
    const otherProducts= useLoaderData()
    const [productInfo, setProductInfo] = useState(null);
    console.log(otherProducts)
    return (
        <div>
        <p className='header'>Our  available products</p>

        <div className="new">
        {otherProducts.map((product) => (
          <Product
            product={product}
            setProductInfo={setProductInfo}
          ></Product>
        ))}
        
        <div className="container">
          {productInfo && (
         <BookingModal
         productInfo={productInfo}
         setProductInfo={setProductInfo}
         ></BookingModal>
          )}
        </div>
      </div>
    </div>
);
};

export default Other;