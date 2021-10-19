import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css";
import banner1 from '../../images/carosuelimg/Background.png';
import banner2 from '../../images/carosuelimg/Background (1).png';
import banner3 from '../../images/carosuelimg/Background (2).png';
const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;