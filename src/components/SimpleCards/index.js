import React, {useState, useEffect}from 'react'  
import "./index.css"


const SimpleCards = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
      const showSlides = () => {
        const slides = document.getElementsByClassName('mySlides');
        const dots = document.getElementsByClassName('dot');
  
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
        }
  
        setSlideIndex((prevSlideIndex) => {
          let newIndex = prevSlideIndex + 1;
  
          if (newIndex > slides.length) {
            newIndex = 1;
          }
  
          slides[newIndex - 1].style.display = 'block';
  
          for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
          }
          dots[newIndex - 1].className += ' active';
  
          return newIndex;
        });
      };
  
      const slideInterval = setInterval(showSlides, 3000);
  
      return () => {
        clearInterval(slideInterval);
      };
    }, []);
  
    const plusSlides = (n) => {
      const slides = document.getElementsByClassName('mySlides');
      const dots = document.getElementsByClassName('dot');
  
      setSlideIndex((prevSlideIndex) => {
        let newIndex = prevSlideIndex + n;
  
        if (newIndex > slides.length) {
          newIndex = 1;
        } else if (newIndex < 1) {
          newIndex = slides.length;
        }
  
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
        }
        slides[newIndex - 1].style.display = 'block';
  
        for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(' active', '');
        }
        dots[newIndex - 1].className += ' active';
  
        return newIndex;
      });
    };
  return (
    <div className="slideshow-container">
    {/* Slides */}
    <div className="mySlides">
      <img src="https://t4.ftcdn.net/jpg/01/63/13/27/240_F_163132744_wUCTdX88MXasIx79Q00hpywGJpA0zXTl.jpg" alt="Image 1" />
    </div>

    <div className="mySlides">
      <img src="https://t3.ftcdn.net/jpg/02/61/11/36/240_F_261113642_prAp5fitiQ5G68JkLXCs9K9GZQex3OOj.jpg" alt="Image 2" />
    </div>

    <div className="mySlides">
    <img src="https://t4.ftcdn.net/jpg/01/63/13/27/240_F_163132744_wUCTdX88MXasIx79Q00hpywGJpA0zXTl.jpg" alt="image3"/>
    </div>

    {/* Navigation dots */}
    <div style={{ textAlign: 'center' }}>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>

    {/* Previous/Next buttons */}
    <a className="prev" onClick={() => plusSlides(-1)}>
      &#10094;
    </a>
    <a className="next" onClick={() => plusSlides(1)}>
      &#10095;
    </a>
  </div>
  )
}

export default SimpleCards