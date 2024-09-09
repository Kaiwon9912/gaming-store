import React, { useState } from "react";
import SearchBar from "./searchBar";
import { useNavigate } from 'react-router-dom';
function Header() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
      
        <div className={`fixed ${isOpen?'w-[85vw]':'w-0'} h-full  transition-all duration-300 bg-gray-950  z-50 overflow-hidden`}>
        <div className="text-white ">
        <div className="flex items-center p-2 ">
        <img className="w-14" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Viva_La_Dirt_League_logo.svg/1280px-Viva_La_Dirt_League_logo.svg.png"/>
        <h1 className="px-1 py-2 ml-4 font-bold uppercase border-4 rounded-full text-md">TechTown</h1>
        
        </div>
        <ul className="px-2 space-y-2 text-white ">
           <a href="./">Home</a>
           <p>Product<i className="px-2 text-sm text-white fa-solid fa-caret-down"></i></p>
           <ul className="p-2 space-y-2 text-sm bg-gray-800 ">
              <li>Mouse</li>
              <li>Headphone</li>
              <li>Keyboard</li>
              <li>Monitor</li>
              <li>Speaker</li>
            </ul>
       
          
          <li><a href="./Login"> My Account</a></li>
          <li>Cart</li>

        </ul>
        </div>
      </div>
      <div className="absolute z-10 flex items-center justify-between w-full py-3 bg-transparent md:px-20">

        <a href="/">
        <div className="flex md:space-x-5">
          <img
            className="w-16 scale-75 md:scale-100"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Viva_La_Dirt_League_logo.svg/1280px-Viva_La_Dirt_League_logo.svg.png"
          />

          <div className="px-1 py-2 font-bold text-white scale-75 border-4 md:text-xl rounded-3xl md:scale-100 ">
            TECHTOWN
          </div>
        </div></a>
    
       <SearchBar/>
     
        <div className="relative block md:hidden">
          {
            isOpen? <i class="fa-solid fa-x text-white px-5 text-lg"onClick={()=>setIsOpen(!isOpen)} > </i>:<i class="fa fa-bars text-white px-5 text-lg hidden group right-0" aria-hidden="true" onClick={()=>setIsOpen(!isOpen)}></i>
          }
      
        </div>
      

  
        <div className="hidden px-5 space-x-5 md:space-x-10 md:block">
          <a>
            <i className="text-2xl text-white fa-regular fa-heart"></i>
          </a>
          <a href="./Login">
            <i className="text-2xl text-white fa-regular fa-user"></i>
          </a>

          <a href="./Cart">
            <i className="text-2xl text-white fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </div>
      

     
    </>
  );
}
export default Header;
