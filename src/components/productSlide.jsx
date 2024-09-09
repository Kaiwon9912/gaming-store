import React from "react";
import Slider from "react-slick";
import ProductCard from "./productCard";
import { productsData } from "../data/productData";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: "50%", }}
      onClick={onClick}
    />
  );
}
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
       
       
        background:"gray",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
        borderRadius: "50%", 

        
      }}
      onClick={onClick}
    >
  
    </div>
  );
}


function ProductSlide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow/>,
    responsive: [
      {
     
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
     
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
  
        }
      },
 
     
    ]
    
  };

const listItem = productsData.map(product =>  <div className="scale-[85%]"><ProductCard product={product} key={product.id} /> </div>);
  return (
    <div className="m-auto ">
  
      <div className="px-7">
      <div className="slider-container">
      <Slider {...settings}>
        {listItem}
      </Slider>
    </div>
      </div>

    </div>

  );
}

export default ProductSlide;
