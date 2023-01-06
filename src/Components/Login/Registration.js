import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import image from "../../Images/Login/registration.png"
const Registration = () => {
    const { register, formState:{errors}, handleSubmit} = useForm();
    const {createUser}=useContext(AuthContext)
    const onSubmit = (data) =>{
         console.log(data ,errors);
         createUser(data.email , data.password)
         .then(result =>{
            const user=result.user;
            console.log(user)
         })
         .catch(error=>console.log(error))
        }
    return (
     
<div className='container d-flex'>

<div className='w-50'>
  <h3 className='text-center text-danger'>Registration now</h3>
<form onSubmit={handleSubmit(onSubmit)}>
<div className="form-group">
    <label htmlFor="exampleInputName">Full Name</label>
    <input type="name" {...register("name")} className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Your Name"/>
   
  </div>
 <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" {...register("email")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input  {...register("password", { required: true })} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  {errors.exampleRequired && <span>This field is required</span>}
  <button type="submit" className="btn btn-primary">Submit</button>

  
      
     
  <hr/>
     <p>You have'n already Account??  , <Link to="/login">Log in</Link> </p>
    
    
    </form>
</div>

<div className='w-50'>
  <img src={image} alt="good"/>
</div>
</div>
    );
};

export default Registration;