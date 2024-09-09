
import React, { useState,useEffect  } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos_Detail from '../components/detail_page/aos_detail';
import { aosData } from '../data/aosData';
import ProductSlide from '../components/productSlide';
import Reviews from '../components/detail_page/reviews';

function Detail ()
{
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    const [quantity,setQuantity] = useState(1);
    
    const [mainImage, setMainImage] = useState("https://redragonshop.com/cdn/shop/files/RedragonEISAK686PRO98KeysWirelessGasketRGBGamingKeyboard_1.png?v=1710401472");
    
    
    const handleImageClick = (imageUrl) => {
      setMainImage(imageUrl);
    };
    const imgGallery = [
        "https://redragonshop.com/cdn/shop/files/RedragonEISAK686PRO98KeysWirelessGasketRGBGamingKeyboard_1.png?v=1710401472",
        "https://redragonshop.com/cdn/shop/files/RedragonK686PRO98KeysWirelessGasketRGBGamingKeyboard_5.png?v=1722327610",
        "https://redragonshop.com/cdn/shop/files/RedragonEISAK686PRO98KeysWirelessGasketRGBGamingKeyboard_5.jpg?v=1722327621",
        "https://redragonshop.com/cdn/shop/files/RedragonEISAK686PRO98KeysWirelessGasketRGBGamingKeyboard_9.jpg?v=1722327621",
    
    ];
    const listAos = aosData.map((aos_object, index)=>
    (
      <Aos_Detail title={aos_object.title} description={aos_object.description} img={aos_object.img} order= {index%2}/>
    ));
    const listImg = imgGallery.map((img, index) => (
        <div key={index}>
          <img
            onClick={() => handleImageClick(img)} 
            className="flex-none w-16 cursor-pointer md:w-32 rounded-2xl"
            src={img}
            alt={`Thumbnail ${index + 1}`}
          />
        </div>
      ));
    return(
        <>
        <div className='w-full py-20 lg:flex gradient-blue'>
        <div className="lg:w-1/2 lg:flex">
      
     
        <div className="overflow-hidden md:mt-12 md:overflow-hidden lg:w-11/12 md:order-2 ">
          <img className="p-5 m-auto h-72 lg:h-auto" src={mainImage}/>
        </div>
        <div className="flex justify-center px-5 space-x-5 lg:block lg:mt-16 md:space-x-0 md:space-y-5 bg">
            {listImg}
        </div>
  
        </div>
        <div className='px-10 text-white lg:mt-16 lg:w-1/2 rounded-t-2xl bg-gradient-to-t from-black to-gray-700 md:py-5'>
        <h1 className='py-3 m-auto font-bold md:text-3xl'>EISA K686 PRO SE Anime Keyboard</h1>
        <div className="space-x-1 ">
                {Array.from({ length: 5 }, (_, index) => (
                  <i key={index} className="text-sm text-blue-500 lg:text-2xl fa-solid fa-star"></i>
                ))}
                {Array.from({ length: 5 - 5 }, (_, index) => (
                  <i key={index} className="text-sm text-gray-300 fa-solid fa-star md:text-2xl"></i>
                ))}
        </div>
        <ul className='py-10 space-y-5 text-sm md:text-lg'>
                <li>96% 98 Keys Wireless Gasket RGB Gaming Keyboard</li>
                <li>3-Mode Compact Mechanical Keyboard</li>
                <li>Dedicated Knob Control</li>
                <li>Sound Absorbing Pads</li>
                <li>Hot-Swap Socket</li>
        </ul>
        <div className='flex border-t-2 border-b-2 lg:w-1/2 md:text-2xl'>
              
                <div className='flex justify-between w-1/3 p-2 border-l-2 border-r-2'>
                  <button onClick={()=>setQuantity(quantity-1>-1?quantity-1:0 )}>-</button>
                  <span>{quantity}</span>
                  <button  onClick={()=>setQuantity(quantity+1)}>+</button>
                </div>
            
                <button className='items-center w-2/3 p-2 text-center bg-red-600 border border-r-2'>
                Add to Cart
                </button>
        </div>
         </div>
                

    
        </div>
   
   
        <div className='bg-black md:space-y-5 md:py-10'>
          <img src='https://cdn.shopify.com/s/files/1/0012/4957/4961/files/Redragon_K686_PRO_98_Keys_Wireless_Gasket_Keyboard_3.jpg?v=1710401687'/>
          <img src='https://cdn.shopify.com/s/files/1/0012/4957/4961/files/Redragon_K686_PRO_98_Keys_Wireless_Gasket_Keyboard_7.jpg?v=1710401686'></img>
                {listAos}
        </div>
       
        <Reviews/>
        <div className="container mx-auto mt-14">
          <h1 className='p-3 text-3xl font-bold text-center text-red-500 uppercase'>Related product</h1>
              <ProductSlide/>
    </div>

              
    
        </>
    );
} export default Detail;