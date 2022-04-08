import React from 'react';
import Event from './Event';
import Slide from './Slide';
function EventAndSlide(){
  return(  <div className="Container">
    <div className="row">
    <div className="col-lg-2 col-md-6 col-sm-12">
    <Event />
    </div>
    <div className="col-lg-8 col-sm-12 col-md-6">
   <Slide />
   </div>
   <div className="col-lg-2 col-sm-12 col-md-12">
     <img src="images/mglogo.jpg" alt="mg-logo" />
   </div>
   </div>
    </div>);
}
export default EventAndSlide;
