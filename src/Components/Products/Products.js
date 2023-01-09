import React from 'react';

import { useLoaderData } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import Product from './Product';
import './products.css'
const Products = () => {
    const products= useLoaderData()
    console.log(products)
    return (
        <div className='container'>
            
            <p className='header'>Our all available products</p>
          
       
       <div className='new'>
       {
        products.map(product=><Product
        product={product}
        ></Product>)
      },
       
     

       </div>
     
      </div>
       
    );
};

export default Products;