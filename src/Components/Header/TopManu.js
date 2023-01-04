import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const TopManu = () => {
    return (
        <Navbar className="navbar navbar-light"  style={{backgroundColor: '#e3f2fd'}}>
 
      <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.ibb.co/3ypbsKD/1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Wood Decor
          </Navbar.Brand>
        <Navbar.Toggle />
        {/* <Navbar className="d-md-none d-sm-block d-xl-block justify-content-end">
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
        </Navbar> */}
        <Navbar.Collapse className="justify-content-end">
        <NavLink to='login'> Log In </NavLink>
        </Navbar.Collapse>

    </Navbar>
    );
};

export default TopManu;