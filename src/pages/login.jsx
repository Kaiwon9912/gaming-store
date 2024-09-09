import { useState } from 'react';
import StyledInput from '../components/login_page/StyledInput';
function Login()
{
   const [isLogin,setIsLogin] = useState(true);
   const toggle=()=>{
        setIsLogin(!isLogin);
   }
    return (
       <div className=" flex w-full h-[100vh] bg-cover bg-[url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg')]">
         <div className='md:w-[30rem] h-[40rem] m-auto overflow-hidden  bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl'>



        <form className={`text-center text-white duration-1000 md:w-[30rem] ${isLogin?'h-[33rem] p-10 ' :'h-0'} overflow-hidden  bg-gradient-to-r from-pink-500 to-blue-500 opacity-90 rounded-3xl`}>
               
               <div className="w-24 h-24 m-auto overflow-hidden bg-white rounded-full mt-14">
               <img className='w-28 h-28' src="https://media2.giphy.com/media/5YpDAIRBS2xJMBoF2p/source.gif"/>
               </div>
               <h1 className="px-6 py-3 text-3xl font-bold uppercase rounded-lg ">Log in</h1>
       
               <StyledInput name="Username" icon="fa-user"/>
               <StyledInput name="Password" type="password" icon="fa-lock"/>
                <p className='mt-2 text-end'>     <a href='#' >Forget password?</a></p>
               <button className='w-full p-2 mt-5 font-bold text-purple-400 uppercase bg-white rounded-full'>Login</button>
            
          
         
            
        </form>

        <div className={`w-32 p-2  duration-1000 m-auto font-bold text-center text-white uppercase ${isLogin?' bg-pink-500 mt-10':'bg-blue-500 mt-5' } rounded-full`}
            onClick={toggle}
        >  {isLogin?'Sign in':'Login'}  
          <i class={`ml-3 inline-block fa-solid fa-circle-arrow-up duration-1000 ${isLogin?'animate-bounce':'rotate-180'}`}></i>
        </div>
        <form className="p-10 text-center text-white duration-1000 md:w-[30rem] h-[30rem]  opacity-90 ">
               
               <div className="w-24 p-2 m-auto bg-white rounded-full">
               <img  src="https://cdn-icons-png.flaticon.com/512/8002/8002111.png"/>
               </div>
               <h1 className="px-6 py-3 text-3xl font-bold uppercase rounded-lg ">Sign in</h1>
       
               <StyledInput name="Sign in Username" icon="fa-user" type="text"/>
               <StyledInput name="Sign in password" type="password" icon="fa-lock"/>
               <StyledInput name="Confirm password" type="password" icon="fa-lock"/>
       
               <button className='w-full p-2 mt-10 font-bold text-purple-400 bg-white rounded-full'>Sign in</button>
        </form>




         </div>
       </div> 
    );
} export default Login;