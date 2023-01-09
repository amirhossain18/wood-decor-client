import React from 'react';
import { Link } from 'react-router-dom';





const Product = ({product}) => {
  
    const { title ,url,brand,category,price,seller_no , _id }= product
    console.log(_id)
    return (
<div className="card">
       
        <div className="card-body">
        <img src={url} className="productPhoto" alt="..."/>

          <h3 className="card-title">{title}</h3>
          <h6> Brand: {brand}</h6>
          <h6>category: {category}</h6>
          <h4>Price: {price}</h4>
          <h6>Phone: {seller_no}</h6>
          <Link product={product} to={`checkout/${_id}`}>
          <button className="btn btn-primary">Go somewhere</button>
          </Link>


      
        
        </div >
    
      </div>
      );
};

export default Product;