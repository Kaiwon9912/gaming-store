import React, { useState } from 'react';
function Reviews(){
    const [hoverIndex, setHoverIndex] = useState(null);
    const [starIndex, setStarIndex] = useState(0);
    return(
        <>
        <h1 className='py-10 text-4xl font-bold text-center'>Product Reviews</h1>
        <div className="justify-between p-10 m-auto bg-gray-800 lg:h-96 md:w-4/5 lg:flex rounded-2xl">
            <div className="flex items-center justify-center lg:w-1/3">
            <div>
            <div className="space-x-3 text-center ">
            {Array.from({ length: 5 }, (_, index) => (
                  <i key={index} className="text-2xl text-yellow-300 fa-solid fa-star"></i>
                ))}
            </div>
            <p className="mt-2 text-center text-white">Base on 0 Reviews</p>
            </div>
            </div>
            <div className="p-5 space-y-3 text-3xl font-bold text-white border-l-2 border-r-2 lg:w-1/3">
                <ul className="m-auto space-y-2 w-52">
                 
                    <li className="flex items-center space-x-2">
                          <span>5 </span>   
                          <i  className="text-xl text-yellow-300 fa-solid fa-star"></i>
                          <div className="w-full h-3 overflow-hidden bg-gray-400 rounded-full"><div className="w-[90%] h-3 bg-yellow-300 ">  </div>  </div>
                    </li>
                    <li className="flex items-center space-x-2">
                          <span>4 </span>   
                          <i  className="text-xl text-yellow-300 fa-solid fa-star"></i>
                          <div className="w-full h-3 overflow-hidden bg-gray-400 rounded-full"><div className="w-[80%] h-3 bg-yellow-300 ">  </div>  </div>
                    </li>
                    <li className="flex items-center space-x-2">
                          <span>3 </span>   
                          <i  className="text-xl text-yellow-300 fa-solid fa-star"></i>
                          <div className="w-full h-3 overflow-hidden bg-gray-400 rounded-full"><div className="w-[30%] h-3 bg-yellow-300 ">  </div>  </div>
                    </li>
                    <li className="flex items-center space-x-2">
                          <span>2 </span>   
                          <i  className="text-xl text-yellow-300 fa-solid fa-star"></i>
                          <div className="w-full h-3 overflow-hidden bg-gray-400 rounded-full"><div className="w-[20%] h-3 bg-yellow-300 ">  </div>  </div>
                    </li>
                    <li className="flex items-center space-x-2">
                          <span>1 </span>   
                          <i  className="text-xl text-yellow-300 fa-solid fa-star"></i>
                          <div className="w-full h-3 overflow-hidden bg-gray-400 rounded-full"><div className="w-[10%] h-3 bg-yellow-300 ">  </div>  </div>
                    </li>
              
                       
                </ul>
             
          

            </div>

            <div  className="space-y-3 text-center text-white lg:w-1/3">
                <h1 className="p-2 text-2xl font-bold">Write a reviews</h1>
                
        
               
        
            <p className='text-xl'>Your Reviews</p>
            <textarea className='w-4/5 h-32 p-2 text-black rounded-lg outline-blue-400' placeholder='Write you comment here'></textarea>
            <div className='flex justify-between w-4/5 m-auto'>
             
                <button className='w-1/3 p-2 bg-red-500 '>Cancel</button>
                <button className='w-1/3 p-2 bg-blue-400 '>Submit</button>
            </div>
            </div>
            
        </div>
        </>
    )   ; 
} export default Reviews;