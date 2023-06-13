import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MultipleCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div style={{}}>
      <Slider {...settings} >
        <div>
          <div>
            <img
              src="https://www.gangasupermarket.in/resources/image/18/bc/b.jpg" alt="image1"
              style={{ height: "200px", width: "475px", marginLeft:"-113px" }}
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://www.gangasupermarket.in/resources/image/18/d1/6.png" alt="image2"
              style={{ height: "200px", width: "475px" , marginLeft:"-50px"}}
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://www.gangasupermarket.in/resources/image/18/bc/9.jpeg" alt="image3"
              style={{ height: "200px", width: "475px" }}
            />
          </div>
        </div> 
        
       
      </Slider>
    </div>
  );
};

export default MultipleCards;
