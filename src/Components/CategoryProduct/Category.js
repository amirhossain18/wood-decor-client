import React from 'react';
import { Link } from 'react-router-dom';
import './category.css'
const Category = () => {
    return (
        <div className='container'>
            <>
            Category product
            <div className='cardthree'>
               <Link to="/products/house"> 
                
                 
                 <img src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                 <h2 className='text-center'> Home Funrniture</h2>
                 </Link>
                 <Link to="/products/office"> 
                
                 
                <img src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <h2 className='text-center'> Office Funrniture</h2>
                </Link>
                <Link to="/products/other"> 
                
                 
                <img src="https://images.pexels.com/photos/8775038/pexels-photo-8775038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <h2 className='text-center'> Others Funrniture</h2>
                </Link>

            </div>
            </>
        </div>
    );
};

export default Category;