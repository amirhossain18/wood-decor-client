import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../Components/Products/Product';

const HomeFurniture = () => {
    const homeProducts= useLoaderData()
    console.log(homeProducts)
    return (
        <div>
            <p className='header'>Our  available products</p>

         <div className='new'>
         {
            homeProducts.map(homeProduct=><Product
            product={homeProduct}
            >

            </Product>)
           }  
         </div>
        </div>
    );
};

export default HomeFurniture;