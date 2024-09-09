import {React } from "react";

import Carousel from '../components/carousel'


import CategoryCard from "../components/categoryCard";

import ProductSlide from "../components/productSlide";

import ProductCard from "../components/productCard";
function Home()
{
  
  const brands = [
    {id:1,brandName:"Logitech"},
    {id:2,brandName:"Razor"},
    {id:3,brandName:"HyperX"},
    {id:4,brandName:"Red Dragon"},
    {id:5,brandName:"DareU"},
   ]
   const products = [
    {id:0,name:"G733", price:55, star:5, img:"https://npcshop.vn/media/product/5316-g733-black-gallery-1.png" , brand:"Logitech", category:"Headphone"},
    {id:2,name:"LEGEND CHROMA", price:55, star:5, img:"https://redragonshop.com/cdn/shop/files/LegendChromaM990-RGBGamingMouse_2.png?v=1684908549", brand:"Red dragon", category:"Mouse"},
    {id:3,name:"DITI K585", price:55, star:5, img:"https://redragonshop.com/cdn/shop/products/DITIK585wiredOne-HandedGamingKeypad_blueSwitch.png?v=1687747068", brand: "Red dragon", category:"Keyboard"},
    {id:4,name:"Kraken Kitty V2", price:55, star:5, img:"https://techspace.vn/wp-content/uploads/2023/05/1-2.png", brand:"Razor" , category:"Headphone"},


];
    const listItem = products?.map(product => <ProductCard product={product} key={product.id} />) || null;
    const listBrand = brands?.map(brand => <li key={brand.id}>{brand.brandName}</li>) || null;
     return(
      <>
      <div>
      <Carousel/>

      <div>
        <h1 className="w-full mt-5 text-2xl font-bold text-center uppercase md:mt-10 md:text-4xl md:px-20">Discover our products !</h1>
      </div>
      <div className="flex justify-around py-6 md:py-12">
        <CategoryCard category="Keyboard" imageUrl ="https://i.shgcdn.com/2f3d455c-716c-4d5b-802e-1663476cd796/-/format/auto/-/preview/3000x3000/-/quality/lighter/"/>
        <CategoryCard category="Headphone" imageUrl ="https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/headset-landingpg-500x500-blacksharkv2pro2023.jpg"/>
        <CategoryCard category="Mouse" imageUrl ="https://arcticfox.com/cdn/shop/files/1_f87f08be-bf1b-4065-ae81-21d7c1ad0f69.jpg?v=1699270558"/>
        <CategoryCard category="Speaker" imageUrl ="https://apexgamingpcs.com/cdn/shop/articles/image_2024-03-21_124707780_1200x630.png?v=1711043679"/>
        <CategoryCard category="Monitor" imageUrl ="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/best-gaming-Laptop-under-80000?scl=1&fmt=png-alpha"/>
      </div>
       <div className=" text-white bg-gray-800  sm:text-3xl lg:h-[36rem]">
         <h1 className="p-10 text-4xl font-bold text-center text-red-500">Top picks for you</h1>
         <div className="grid justify-center w-full grid-cols-2 bg-gray-800 sm:flex md:px-20 md:space-x-5 md:columns-0">
            {listItem}
          </div>
        </div>
       <div className="lg:px-20">
        <div className="mt-10 md:flex md:justify-between">
          <h1 className="px-4 py-2 text-lg font-bold text-white bg-red-500 border-2 lg:text-3xl md:ml-12 ">Best seller 🔥</h1>
          <ul className="flex mr-12">
          {listBrand}
          </ul>
        </div>
        <ProductSlide/>
        </div>
    
          </div>

            </>
     )
} export default Home;