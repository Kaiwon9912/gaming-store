import Carousel from "../components/carousel";
import {React,useState} from "react";
import { productsData } from "../data/productData";
import ProductCard from "../components/productCard";
function Search()
{
    const [isOpen,setIsOpen] = useState(false);
    const handleFilter=()=>{
        setIsOpen(!isOpen);
    }
    const products = productsData.map(product =>  <div className="lg:py-20"><ProductCard product={product} key={product.id} /> </div> );
    return(
        <>
        <Carousel/>
            <div className="text-white bg-black md:px-20">
            <div className={`absolute  p-5 mt-12 space-y-2 bg-gray-950 border-2 border-red-500  lg:w-72 md:text-lg z-10  ${isOpen?'block':'hidden'}`}>
                  <h4 className="py-2 text-xl font-bold border-b-2 border-blue-400">Connectivity</h4>
                  <ul className="flex space-x-5 ">  
                
                      <li>    <input type="checkbox" className="text-white bg-black border-2 border-white focus:ring-0"/> Wired</li>
                      <li>    <input type="checkbox"/> Wireless</li>
          
                  </ul>
                  <h4 className="py-2 text-xl font-bold border-b-2 border-blue-400">Brand</h4>
                  <ul className="flex space-x-4 md:block md:space-x-0">  
                  <li>    <input type="checkbox"/> Logitech</li>
                  <li>    <input type="checkbox"/> Razor</li>
                  <li>    <input type="checkbox"/> HyperX</li>
                  <li>    <input type="checkbox"/> Red Dragon</li>

                  </ul>
                  <h4 className="py-2 text-xl font-bold border-b-2 border-blue-400">Category</h4>
                  <ul className="flex space-x-4 md:block md:space-x-0">  
                  <li>    <input type="checkbox"/>Mouse</li>
                  <li>    <input type="checkbox"/> Headphone</li>
                  <li>    <input type="checkbox"/> Keyboard</li>
                  <li>    <input type="checkbox"/> Monitor</li>
                  <li>    <input type="checkbox"/> Speaker</li>

                  </ul>
                 </div>
                <div className="flex justify-between p-5 md:text-xl">
                <i class="fa-solid fa-filter" onClick={handleFilter}></i>
         
                <div className="space-x-5">
                <label for="sort">Sort:</label>
                <select id="sort" name="gaming-mouse" className="w-32 text-sm text-center text-white bg-transparent">
                <option className="text-black bg-transparent" value="logitech">A-Z</option>
                <option className="text-black bg-transparent" value="razer">Z-A</option>
                <option className="text-black bg-transparent" value="corsair">Newsest</option>
                <option className="text-black bg-transparent" value="steelseries">Oldest</option>
            
                    </select>
                </div>
                </div>
            
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products}
                </div>
                <div className="flex justify-center mt-20 space-x-3 text-white Paging">
                <button className="px-3 py-1 text-xl bg-gray-800 border border-white">  &lt;</button>

                <button className="px-3 py-1 text-xl bg-gray-800 border-2 border-red-600"> 1</button>
                <button className="px-3 py-1 text-xl bg-gray-800 border border-white"> 2</button>
                <button className="px-3 py-1 text-xl bg-gray-800 border border-white"> 3</button>
                <button className="px-3 py-1 text-xl bg-gray-800 border border-white">...</button>
                <button className="px-3 py-1 text-xl bg-gray-800 border border-white"> &gt;</button>
 
            </div>
            </div>
        
         
        </>
        

        
   


    );
} export default Search;