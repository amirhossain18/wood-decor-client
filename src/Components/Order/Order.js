import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Context/AuthProvider';

const Order = () => {



  const { user } = useContext(AuthContext);

  // const url = `https://used-product-server-sapp/bookings?email=${user?.e

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
      if (user?.email) {
          fetch(`https://wood-decor-server.vercel.app/bookings?email=${user?.email}`)
              .then(res => res.json())
              .then(data => {
                  setBookings(data);
              })
      }
  }, [user?.email])


  return (
      <div className='my-5 py-5 container'>
          <h3 className="text-3xl mb-5">My Orders {bookings?.length}</h3> 
          <div className="overflow-x-auto"> 
              <table className="table w-full">
                  <thead>
                      <tr> 
                          <th></th>
                          <th>Item Name</th>
                          <th>price</th>
                          <th>Location</th>
                          <th>User Name</th>
                       
                      </tr>
                  </thead>
                  <tbody>
                      {
                          bookings &&
                          bookings?.map((booking, i) => <tr key={booking._id}>
                              <th>{i + 1}</th>
                              <td>{booking.name}</td>
                              <td>{booking.price}</td>
                              <td>{booking.location}</td>
                              <td>
                                 {
                                  booking.userName
                                 }
                              </td>
                          </tr>)
                      }
                  </tbody>
              </table>
          </div>
      </div>
  );
};

export default Order;