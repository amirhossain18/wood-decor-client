import React, { useContext, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import {  Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import './Navmanu.css'
const NavManu = () => {
  let activeStyle = {
    textDecoration: "underline 5px solid green",
    color: "green",
    marginBottom: "1px solid green",
  };
  const [show, setShow] = useState(false);
  const {user}= useContext(AuthContext)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      
        <div>
            <Button className="d-sm-none d-md-block d-xxl-block d-lg-none" variant="primary" onClick={handleShow}>
        Category
      </Button>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="items">
         <Link to="home"> Home</Link>
         <Link to="product"> Product</Link>
         <Link to="order"> Order</Link>
       {
        user?.email ? 
        <Link to="login"> Log out</Link>
        :<Link to="login"> Sign in</Link>
       }
        </Offcanvas.Body>
      </Offcanvas>
         <div className="navbar bg-base-100">
          
    
  <div className="navbar-center d-xl-block hidden lg:flex">
    <ul className="nav-last">
   

    <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="products"
              >
              Product
              </NavLink>
               <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="order"
              >
               Order
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="hotdeal"
              >
               HotDeal
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="review"
              >
              Review
              </NavLink>
  
    </ul>
 

  </div>
  
</div>
        </div>
    );
};

export default NavManu;