import React from 'react';
import AddBaner from './AddBaner';
import Slider from './Slider';

const TopBaner = () => {
    return (
        <div className="container">
             <div className="row">
    <div className="col-8">
        
       <Slider></Slider>
    </div>
    <div className="col-4">
<AddBaner></AddBaner>
   
    </div>
  </div>
        </div>
    );
};

export default TopBaner;