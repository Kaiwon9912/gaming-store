
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

const NewsSlide=()=>{
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a4b78dc6993e4437adc03c4b7ce2487c') 
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching data:', error));
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return (
        <>
        <div className='lg:w-[85vw] m-auto'>
        <div className='flex justify-center w-full p-2 m-auto text-xl font-bold bg-gray-800 md:p-4 md:text-4xl rounded-xl'>
         <span className='tracking-widest text-red-500 '>TECH</span> <span className='mt-2 tracking-widest text-blue-400'>NEWS</span>
        </div>
        <div className="slider-container">
      <Slider {...settings}>
        
      {articles.map((article, index) => (
      <li key={index} className="p-2 mb-5 list-none ">
      <div 
      className="w-full h-[10rem] md:h-[30rem] bg-center bg-cover rounded-lg flex items-end " 
      style={{ backgroundImage: `url(${article.urlToImage})` }}
    >
      <h2 className="w-full h-full p-4 text-sm font-bold text-center text-white bg-black bg-opacity-50 md:text-lg md:h-20">
        <a href={article.url}>{article.title}</a>
      
      </h2>

</div>

  </li>
))}

        </Slider>
        </div>
        
        </div>
  
    </>
    )
}; export default NewsSlide;