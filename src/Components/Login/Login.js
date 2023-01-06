import React, { useContext, useState } from 'react';
import image from '../../Images/Login/login.jpg'
import { useForm } from 'react-hook-form';

import "./Login.css"
import { Navigate, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
    const { register, formState:{errors}, handleSubmit} = useForm();
    const {emailSignin , providerGoogle }= useContext(AuthContext);
    const [loginError , setLoginError]= useState('');
 

    
    const onSubmit = (data) => {
      console.log(data ,errors);
      setLoginError('');
       emailSignin(data.email, data.password)
       .then(result =>{
        const user=result.user;
        console.log(user)
     })
     
      .catch(error=>{
        console.log(error.message)
        setLoginError(error.message)
      })


    }

    const googleProvider= new GoogleAuthProvider()
    
    const handelSignin = ()=>{
        providerGoogle(googleProvider)
        .then(result=>{
            const user = result.user
            console.log(user)
            Navigate("/")
        })
        .catch(err=>console.error(err))
    }
    return (  
<div className='container d-flex'>
<div className='w-50'>
  <h3 className='text-center text-danger'>Log In now</h3>
<form onSubmit={handleSubmit(onSubmit)}>
 


 <div class="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" {...register("email")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input  {...register("password", { required: true })} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  {errors.exampleRequired && <span>This field is required</span>}
  <button type="submit" class="btn btn-primary">Submit</button>
  {
    loginError && <p className='text-danger'> Don't Match Email and password</p>
  }
  <button type="button"  onClick={handelSignin} class="btn btn-primary ml-2">Google Sign</button>
  <hr/>
     <p>Are You new Our Site  , </p>
     <NavLink to="/registration">Create Account</NavLink>
    </form>
</div>
<div className='w-50'>
  <img src={image} alt="good"/>
</div>
</div>
    
    );
};

export default Login;