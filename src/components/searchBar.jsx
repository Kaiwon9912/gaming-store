import React, { useState } from 'react';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  
  return (
      <div className='hidden md:block'> 
      <div className="flex items-center " onMouseEnter={()=>setIsFocused(true)} >
       <div className={`py-2 text-white bg-blue-400 ${isFocused ? 'rounded-l-full px-5':`rounded-full px-10`}`}>
        <a href='/Search'>Search</a>
       </div>
       <div className={`flex items-center  transition-all duration-300 ease-in-out rounded-r-full ${isFocused ? 'w-96 bg-gray-300 border-gray-300' : 'w-0 '}`}>
       <input
          type="text"
          className="w-full p-2 text-gray-700 bg-transparent outline-none"
        
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
       </div>
       
      </div>
      </div>
  
  );
};

export default SearchBar;
