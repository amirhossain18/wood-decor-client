import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = ({product}) => {

    const {data } = useLoaderData();
    console.log(data)
    const {user} = useContext(AuthContext)
    return (
        <div className="container"> 
        <h1>Product Name: <span>  <h4> </h4> </span> </h1>
        <h4>Price </h4>
          <form >
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <input name="firstName" type="text" className="form-control is-valid"  placeholder="First name"  required/>
    </div>
    <div className="col-md-4 mb-3">
      <input name="lastName"  type="text" className="form-control is-valid" placeholder="Last name"  required/>
     
    </div>
    <div className="col-md-4 mb-3">
    
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" ></span>
        </div>
        <input name="email"  type="email" className="form-control is-invalid" id="validationServerUsername" placeholder="email" defaultValue={user?.email} aria-describedby="inputGroupPrepend3" required readOnly/>
     
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">

      <input name="address"  type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required/>
    
    </div>
   
  
  </div>

  <button className="btn btn-primary" type="submit">Submit form</button>
</form>
            
        </div>
    );
};

export default CheckOut;