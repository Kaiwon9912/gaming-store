function CartItem(props)
{
    return(
    <div className="flex items-center justify-between space-x-5 overflow-hidden text-white bg-gray-800 shadow-lg h-28 md:h-60 md:mx-10">
        <div className="flex items-center w-1/3 h-full gradient-blue">
        <img src={props.img}/>
        </div>
     
        <div className="w-1/2 space-y-2 md:space-y-10">
        <div >
        <h2 className="text-white md:text-3xl">{props.name}  </h2>

        </div>
       
        <div className="flex items-center justify-between">
        <span className="w-1/2 p-1 font-bold text-center bg-blue-900 rounded-lg md:text-2xl">
         {props.price}$
       </span>
       <input className="w-8 p-1 text-center bg-transparent border md:w-16 md:text-2xl" value={1} type="number"/>
        </div>
       
       <div>
        
       </div>
        
        </div>
        <div className="flex items-center h-full bg-red-500 cursor-pointer md:px-10 hover:border">
        <i class="fa-solid fa-trash  p-2 bg-red-500 md:text-2xl"></i>

  
        </div>
      
    

    </div>
    );
} export default CartItem;