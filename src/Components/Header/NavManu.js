import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import './Navmanu.css'
const NavManu = () => {

  const {user }= useContext(AuthContext)

 
    return (
      <div>
      <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost d-lg-none .d-xl-block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52">
          <li><NavLink>Home</NavLink></li>
          <li tabIndex={0}>
            <NavLink to="blog" className="justify-between">
             Blog
            
            </NavLink>
          
          </li>
          <li><NavLink>Item 3</NavLink></li>
        </ul>
      </div>
      <NavLink className="btn btn-ghost normal-case text-xl ">
      {user?.uid ? (
              <>
                <Nav className="nav-last mr-5 ">  {user.email}
             
                </Nav>
               
            
              </>
            ) : (
              <div >
                <NavLink
              
               
                >
             <h4>Welcome</h4>
                </NavLink>
              </div>
            )}
      </NavLink>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal mr-5">
        <li><NavLink  to="/home" 
                 >home</NavLink>
                 </li>
        <li tabIndex={0}>
          <NavLink to="/about" >About </NavLink>
         
        </li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/products">product</NavLink></li>
        <li><NavLink to="/order">order</NavLink></li>
        <li><NavLink to="/review">review</NavLink></li>
      </ul>
    </div>
    <div className="navbar-end">
    {user?.uid ? (
              <>
                <Nav className="nav-last mr-5"> 
             <img className="rounded-circle w-10 m-2" src={user.photoURL} alt="" /> 
                </Nav>
               
             
              </>
            ) : (
              <div >
                <NavLink
                 
                
                >
                 
                </NavLink>
              </div>
            )}
    </div>
  </div>
     </div>
     
      );
  };
  
export default NavManu;