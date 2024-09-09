
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
const colors = ["red", "orange", "blue", "purple"];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
const Carousel = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Cập nhật slide hiện tại
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height:"10px",
          borderRadius:"50%",
          background: i === currentSlide ? "white" : "transparent",
          position:"absolute",
          top:"-25px",
          border: "1px white solid"
        }}
      >
        
      </div>
    )
  };


  return (
    <div className="relative w-full bg-gray-800">
      <Slider {...settings}>
        <div className={`h-96 md:h-70 gradient-${getRandomColor()} p-20`}>
          <img
            className="h-full m-auto"
            src="https://myhypergear.com/cdn/shop/files/001_cbd40106-62a6-44a1-9606-f3565a2177f5.png?v=1653237264"
            alt="Slide 1"
          />
        </div>
        <div className={`h-96 md:h-70 gradient-${getRandomColor()} p-20`}>
          <img
            className="h-full m-auto"
            src="https://edifier-online.com/cdn/shop/files/edifier-g5btcat-black-1_db0c17a8-5f3e-440b-b602-5250ccccbd31.png?v=1709542955&width=1500"
            alt="Slide 2"
          />
        </div>
        <div className={`h-96 md:h-70 gradient-${getRandomColor()} p-20`}>
          <img
            className="h-full m-auto"
            src="https://redragonshop.com/cdn/shop/files/LegendChromaM990-RGBGamingMouse_2.png?v=1684908549"
            alt="Slide 2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
