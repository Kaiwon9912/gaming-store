import React from "react";
function Footer()
{
    return <>
     <div className="px-2 py-10 bg-black md:flex md:px-40 md:space-x-24 md:text-xl">
        <div className="text-center text-white group">
        <div className="flex items-center justify-between border-b-2 md:border-none">
          <h2 className="font-bold text-blue-400 uppercase">Product </h2>
          <span className="p-2 md:hidden"><i className="text-white fa-solid fa-caret-down"></i> </span>
          </div>
          <ul className="h-0 mt-4 space-y-2 overflow-hidden text-sm duration-300 md:overflow-visible md:space-y-4 group-hover:h-40 md:block text-start md:h-auto">
                <li>Mouse</li>
                <li>Headphone</li>
                <li>Keyboard</li>
                <li>Monitor</li>
                <li>Speaker</li>
             
            </ul>
            
             
        </div>
        <div className="text-center text-white group" >
          <div className="flex items-center justify-between border-b-2 md:border-none">
          <h2 className="font-bold text-blue-400">SUPPORT </h2>
          <span className="p-2 md:hidden"><i className="text-white fa-solid fa-caret-down"></i> </span>
          </div>
            <ul className="h-0 mt-4 space-y-2 overflow-hidden text-sm duration-300 md:overflow-visible md:space-y-3 group-hover:h-40 md:block text-start md:h-auto">
                <li>Order tracking</li>
                <li>Shipping</li>
                <li>Policy</li>
                <li>Return</li>
                <li>Limited waranty</li>
           
             
            </ul>
            
             
        </div>
        <div className="text-center text-white group ">
        <div className="flex items-center justify-between border-b-2 md:border-none">
          <h2 className="font-bold text-blue-400 uppercase">TechTown </h2>
          <span className="p-2 md:hidden"><i className="text-white fa-solid fa-caret-down"></i> </span>
          </div>
         <ul className="h-0 mt-4 space-y-2 overflow-hidden text-sm duration-300 md:overflow-visible md:space-y-4 group-hover:h-40 md:block text-start md:h-auto">
                <li>About us</li>
                <li>Contact us</li>
                <li>Policy</li>
                <li>Return</li>
                <li>Help center</li>
             
            </ul>
            
             
        </div>
 

        {/* <div>
        <h2 className="font-bold text-blue-400">Subsribe For Exclusive Benefits</h2>
            <div className="flex py-4">
                
                <input placeholder="Email address" className="p-2 text-white bg-transparent border-b border-white w-28 md:w-72 focus:outline-blue-400"/> <button className="p-1 text-white bg-red-700 border-b border-b-red-700">Subscribe</button>
            </div>
        </div> */}
     </div>
    </>
} export default Footer;