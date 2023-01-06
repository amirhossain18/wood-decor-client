import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const TopManu = () => {



  const {user , logout}= useContext(AuthContext)
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };
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
       

        {user?.uid ? (
              <>
                <Nav className="nav-last mr-5">  {user.email}
             <img className="rounded-circle w-10 m-2" src={user.photoURL} alt="" /> 
                </Nav>
               
                <button className="btn btn-danger" onClick={handleLogOut}>
                  Sign Out
                </button>
              </>
            ) : (
              <div className="btn btn-success text-white">
                <NavLink
                  className={({ isactives, isPending }) => {
                    return isactives ? "actives" : "text-white";
                  }}
                  to="login"
                >
                  Login
                </NavLink>
              </div>
            )}
        </Navbar.Collapse>

    </Navbar>
    );
};

export default TopManu;