import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function Slide(){
   return (<Carousel fade interval={1000} >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/first.jpg"
      alt="First slide"
        style={{height:"20rem"}}
    />
    <Carousel.Caption>
      <h3>School building</h3>
      <p>this is the main building of school.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/fourth.jpg"
      alt="Second slide"
      style={{height:"20rem"}}
    />

    <Carousel.Caption>
      <h3>Workshop</h3>
      <p>All practicals are being done here.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/third.jpg"
      alt="Third slide"
        style={{height:"20rem"}}
    />

    <Carousel.Caption>
      <h3>School Campus</h3>
      <p>first impression of School.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>);
}
export default Slide;
