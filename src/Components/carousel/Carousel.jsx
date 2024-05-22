// src/Components/Carousel/CarouselItem.js
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ban1 from "../../../src/assets/ban1.png";
import ban2 from "../../../src/assets/ban2.png";
import ban3 from "../../../src/assets/ban3.png";
import "./carousel.css";

const CarouselItem = () => {
  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={ban1} className="ban-img" alt="banner1" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={ban2} className="ban-img" alt="banner2" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={ban3} className="ban-img" alt="banner3" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselItem;
