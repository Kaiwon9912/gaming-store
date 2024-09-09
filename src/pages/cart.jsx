import CartItem from "../components/cart_page/cartItem";
import visaIcon from '../assets/visa.svg';
const colors = ["red", "orange", "blue", "purple"];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
function Cart()
{

    return (
   <>
    <div className="py-20 bg-[url('https://w0.peakpx.com/wallpaper/103/381/HD-wallpaper-2021-the-batman-batman.jpg')] bg-cover ">
    
    <div className="p-5 md:flex">
        <div className="w-full">
        <h1 className="p-5 text-3xl text-white uppercase">My shopping cart</h1>    
        <ul className="w-full m-auto space-y-10 ">
        <CartItem name="EISA K686 PRO SE Anime Keyboard" price="99" img="https://redragonshop.com/cdn/shop/files/RedragonEISAK686PRO98KeysWirelessGasketRGBGamingKeyboard_1.png?v=1710401472" />
        <CartItem name="G733" img="https://npcshop.vn/media/product/5316-g733-black-gallery-1.png" price="50"/>
        
        
   
        </ul>
        </div>
    

        <div className="w-full p-5 space-y-5 text-white bg-gray-800 rounded-lg md:w-2/3 md:text-xl" >
        <h1 className="py-2 mb-10 text-2xl">Cart detail</h1>
        Card type
            <div className="flex h-5 space-x-5 md:h-10">
            <img src="https://cdn.shopify.com/s/files/1/0012/4957/4961/files/image_33.png?v=1692063448"/>
            <img src="https://cdn.shopify.com/s/files/1/0012/4957/4961/files/Group_95.png?v=1692065782"/>
            <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/en/assets/paypal-express--XwN1he2Bl3G.svg"/>
            <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/en/assets/google-pay-H96oay44mx5u.svg"/>
            </div>
            <div className="py-10 space-y-5 text-black border-b">
                <input placeholder="Cardholder's Name" className="w-full px-2 py-1 outline-blue-400"/>
                <input placeholder="Card number" className="w-full px-2 py-1 outline-blue-400"/>
             
                <div className="flex justify-between space-x-2">
                <input placeholder="Expiration" className="w-1/2 px-2 py-1 outline-blue-400"/>
                <input placeholder="Cvv" className="w-1/2 px-2 py-1 outline-blue-400"/>
                </div>
            </div>
            <div className="space-y-5"> 
            <div className="flex justify-between"><h2>Subtotal</h2> <span>$99</span> </div>
            <div className="flex justify-between"><h2>Shipping</h2> <span>$99</span> </div>
            <div className="flex justify-between py-2 border-t-2"><h2>Total</h2> <span>$99</span> </div>
            </div>
   

        </div>
    
    </div>
        
    </div>

   </>
    );
} export default Cart;