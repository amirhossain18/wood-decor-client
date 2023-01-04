import React from 'react';
import img from "../../Images/Slider/Robi-New-Sim-Offers.jpg";
import img1 from "../../Images/Slider/Your-Banner-Ad-Here-GIF3.gif"
const AddBaner = () => {
    return (
        <div>
            <img className='img-fluid' src={img} alt=""></img>
            <img className='img-fluid' src={img1} alt=""></img>
        </div>
    );
};

export default AddBaner;