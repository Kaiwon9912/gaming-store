import React from 'react';

function CategoryCard(props) {
  return (
    <>
    <div className="flex justify-center duration-300 bg-center bg-cover rounded-lg lg:w-1/6 lg:h-64 md:items-end hover:scale-110" style={{ backgroundImage: `url(${props.imageUrl})`, opacity:0.8 }}>

    <div className='text-[12px] w-full p-2 font-semibold text-center text-white uppercase bg-gray-900 md:text-3xl'>{props.category}</div>
  
    </div>


    </>

  );
}

export default CategoryCard;
