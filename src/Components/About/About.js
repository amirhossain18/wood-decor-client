import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container'>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
  <img src="https://placeimg.com/260/400/arch" alt="" className="max-w-sm rounded-lg shadow-2xl" />
  <div>
    <h1 className="text-5xl font-bold">About Wood Decor!</h1>
    <p className="py-6">Wood Decor is a platform on which you can buy and sell almost everything! We help people buy and sell vehicles, find properties, get jobs or recruit employees, buy and sell mobile phones, purchase electronic products, and much more.</p>
    <Link to="/products" className="btn btn-primary">Let,s Go</Link>
  </div>
</div>
</div>
        </div>


    );
};

export default About;