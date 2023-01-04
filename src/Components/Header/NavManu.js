import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import './Navmanu.css'
const NavbarItems = () => {
  let activeStyle = {
    textDecoration: "underline 5px solid green",
    color: "green",
    marginBottom: "1px solid green",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      
        <div>
            <Button className="d-sm-none d-md-block d-xxl-block" variant="primary" onClick={handleShow}>
        Launch
      </Button>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
         <div className="navbar bg-base-100">
          
    
  <div className="navbar-center d-xl-block hidden lg:flex">
    <ul className=" nav-last">
   

    <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="blog"
              >
              Blogs
              </NavLink>
               <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="Doctors"
              >
                Doctors
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="appointment"
              >
               Appointments
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="serial"
              >
              Serial
              </NavLink>
  
    </ul>
 

  </div>
  
</div>
        </div>
    );
};

export default NavbarItems;