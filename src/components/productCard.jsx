import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const colors = ["red", "orange", "blue", "purple"];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

function ProductCard({product}) {
    const [isHover,setIsHover]=useState(false);
  
    const navigate = useNavigate();

    const handleClick = () => {
     
      navigate('/Detail');
    };
  return (
    <>
   
      <div className="relative text-sm bg-black w-44 h-72 lg:w-72 hover:cursor-pointer" onClick={handleClick}  onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false) }>
        <div className="absolute top-0 flex justify-center rounded-md lg:w-16 right-3 h-fit bg-gradient-to-t from-blue-500 to-blue-400">
          <h2 className="p-1 text-sm font-semibold text-white lg:text-2xl">{product.price}$</h2>
        </div>
        <div className={`gradient-${getRandomColor()}`}>
          <img
            className={`h-32 lg:h-56 m-auto ${isHover? 'scale-110':''} `}
            src={product.img}
          />
        </div>
        <div className="w-full p-3 rounded-t-2xl bg-gradient-to-t from-black to-gray-600">
          <div className="flex justify-between">
            <div className="w-1/2 space-y-1 md:px-2">
              <div className="h-8">
                <h1 className="text-[10px] mt-1 font-bold text-center text-white uppercase lg:text-sm ">
                  {product.name}
                </h1>
              
              </div>

              <div className="space-x-1 text-center md:p-1">
                {Array.from({ length: product.star }, (_, index) => (
                  <i key={index} className="text-[5px]  lg:text-sm text-yellow-300 fa-solid fa-star"></i>
                ))}
                {Array.from({ length: 5 - product.star }, (_, index) => (
                  <i key={index} className="text-sm text-gray-300 fa-solid fa-star"></i>
                ))}
              </div>
            </div>
            <div className="w-px bg-blue-500"></div>
            <div className="w-1/2 px-2 space-y-1 lg:px-4">
              <div className="font-bold text-blue-500 lg:text-lg text-[10px]">
                Brand
                <div className="font-thin text-white lg:text-sm text-[8px]">{product.brand}</div>
              </div>
              <div className="font-bold text-blue-500 lg:text-lg text-[10px]">
                Category
                <div className="font-thin text-white lg:text-sm text-[8px]">{product.category}</div>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-full   bg-gradient-to-t text-center text-white uppercase lg:p-1 lg:text-sm text-[10px] from-blue-500 to-blue-400">

              Add to cart
      
          </div>
        </div>
      </div>
  
    </>
  );
}

ProductCard.defaultProps = {
  name:"G733",
  price:12,

  star:4,
  brand:"Logitech",
  category:"Headphone"

}
export default ProductCard;
