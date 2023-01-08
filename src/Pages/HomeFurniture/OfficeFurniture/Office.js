import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Office = () => {
    const officeProducts= useLoaderData()
    console.log(officeProducts)
    return (
        <div className='container'>
      

     <div className='new'>
     {
        officeProducts.map(Product=><Product
        product={Product}
        >

        </Product>)
       }  
     </div>
    </div>
);
};

export default Office;