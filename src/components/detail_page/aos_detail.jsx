
import React, { useState,useEffect  } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
function Aos_Detail(props)
{
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, [])
      return(
        <>
        <div className='text-white md:flex'>
    
        <div className={`md:order-${props.order +1} md:w-1/2` } >
            <img src={props.img}/>
        </div>
        <div className='flex items-center p-5 lg:p-20 md:w-1/2'>
        <div className='space-y-5' data-aos="fade-up">
        <h1 className='text-2xl font-bold'>{props.title}</h1>
        <p className='text-xl'>{props.description}</p>
        </div>
           
        </div>

        </div>
        </>
      );
} export default Aos_Detail;