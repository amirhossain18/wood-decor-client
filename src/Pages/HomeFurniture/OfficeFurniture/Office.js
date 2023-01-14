import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../../Components/BookingModal/BookingModal';
import Product from '../../../Components/Products/Product';


const Office = () => {
    const officeProducts= useLoaderData()
    const [productInfo, setProductInfo] = useState(null);
    console.log(officeProducts)
    return (
        <div className='container'>
      

      <div className="new">
        {officeProducts.map((product) => (
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

export default Office;