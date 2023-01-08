import React from 'react';



const Product = ({product}) => {
    const { title ,url,brand,category,price,seller_no }= product
    console.log(title)
    return (
<div className="card">
       
        <div className="card-body">
        <img src={url} className="productPhoto" alt="..."/>

          <h3 className="card-title">{title}</h3>
          <h6> Brand: {brand}</h6>
          <h6>category: {category}</h6>
          <h4>Price: {price}</h4>
          <h6>Phone: {seller_no}</h6>
         
         
          <button href="#s" className="btn btn-primary">Buy Now</button>
        
        </div >
        
      </div>
      );
};

export default Product;