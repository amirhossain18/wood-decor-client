import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from "../../Images/Slider/DSCN1958.jfif"
import slider2 from "../../Images/Slider/DSCN1961.jfif"
import slider3 from "../../Images/Slider/DSCN2614.jfif"
const Slider = () => {

        const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Dining table</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={slider2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second Dining table</h3>
    
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third Dining table</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;