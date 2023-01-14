import React, { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";


import Product from "./Product";
import "./products.css";
import BookingModal from "../BookingModal/BookingModal";
const Products = () => {


  const [productInfo, setProductInfo] = useState(null);
  const products = useLoaderData();
  console.log(products);
  // const buyNow = (product) => {
  //   setOpenModal(true);
  //   setProduct(product);
  //   console.log(product);
  // };


  return (
    <div className="container">
      <p className="header">Our all available products</p>
      <div className="new">
        {products.map((product) => (
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

export default Products;
