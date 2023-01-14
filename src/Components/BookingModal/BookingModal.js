import React, { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({productInfo, setProductInfo}) => {
    
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
      console.log(data);
      const booking = {
        bookingDate: new Date(),
        productId: productInfo._id,
        name: productInfo.title,
        userName: user.displayName,
        price: productInfo.price,
        email: user?.email,
        phone: data.phone,
        location: data.location,
      };
      console.log(booking);
      fetch("https://wood-decor-server.vercel.app/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            setProductInfo(null);
            alert("Booking confirmed");
          } else {
            alert(data.message);
          }
        });
    };



    return (
        <div>
               <div className="newModal">
              <button onClick={() => setProductInfo(false)}>
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </button>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      {...register("email")}
                      defaultValue={user?.email}
                      disabled
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("productName")}
                      placeholder="Product Name"
                      defaultValue={productInfo.title}
                      disabled
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("name")}
                      defaultValue={user?.displayName}
                      disabled
                      placeholder="Enter Name"
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="number"
                      {...register("price")}
                      placeholder="Product Name"
                      defaultValue={productInfo.price}
                      disabled
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("phone")}
                      placeholder="Phone Number"
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Meeting location</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("location")}
                      placeholder="Meeting Location"
                    />
                  </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
        </div>
    );
};

export default BookingModal;