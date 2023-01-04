import React from 'react';

import { useForm } from 'react-hook-form';

import "./Login.css"
const Login = () => {
    const { register, formState:{errors}, handleSubmit} = useForm();
    const onSubmit = data => console.log(data ,errors);
    return (
     
<div className='container'>

<form onSubmit={handleSubmit(onSubmit)}>
 


 <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" {...register("example")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input  {...register("exampleRequired", { required: true })} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  {errors.exampleRequired && <span>This field is required</span>}
  <button type="submit" class="btn btn-primary">Submit</button>

      
      
     
    
     
    
    
    </form>
</div>
    
    );
};

export default Login;