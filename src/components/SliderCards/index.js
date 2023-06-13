import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderCards = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>
        <Slider {...settings}> 
     
        <div>
            <img
              src="https://www.gangasupermarket.in/image/thumbnails/18/8a/black_pepper_jpg-100524-250x250.jpg"
              alt="1111"
            />
          </div>
          <div>
            <img
              src="https://www.gangasupermarket.in/image/thumbnails/18/8b/CUMIN_SEEDS_2_jpg-100533-250x250.jpg"
              alt="1112"
            />
          </div>
          <div>
            <img
              src="https://www.gangasupermarket.in/image/thumbnails/18/8b/Ajowan_jpg-100543-250x250.jpg"  alt="1113"
            />
          </div>
          <div>
            <img
              src="https://www.gangasupermarket.in/image/thumbnails/18/8c/Almond_jpg-100549-250x250.jpg"
              alt="1115"
            />
          </div>
          <div>
            <img
              src="https://www.gangasupermarket.in/image/thumbnails/18/8b/fenugreek_jpg-100530-250x250.jpg"
              alt="1115"
            />
          </div>
          <div>
            <img
              src="https://www.gangasupermarket.in/image/thumbnails/18/8b/Ajowan_jpg-100543-250x250.jpg"
              alt="1115"
            />
          </div>
          <div>
            <img
              src="https://www.gangasupermarket.in/image/thumbnails/18/8b/cinnamon_jpg-100528-250x250.jpg"
              alt="1115"
            />
          </div>
          <div>
            <img
              src="https://www.gangasupermarket.in/image/thumbnails/18/8c/Marathi_moggu__Kapok_buds__jpg-100556-250x250.jpg"
              alt="1115"
            />
          </div>
         
        </Slider>
    </div>
  )
}

export default SliderCards