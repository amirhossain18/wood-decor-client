import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../Components/Products/Product';

const Other = () => {
    const otherProducts= useLoaderData()
    console.log(otherProducts)
    return (
        <div>
        <p className='header'>Our  available products</p>

     <div className='new'>
     {
        otherProducts.map(product=><Product
        product={product}
        >

        </Product>)
       }  
     </div>
    </div>
);
};

export default Other;