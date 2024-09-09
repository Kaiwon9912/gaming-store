import { useState } from 'react';
function StyledInput(props)
{
    
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const handleFocus = () => {
      setIsFocused(true);
    };
    const handleBlur =() =>{
        if(inputValue.length==0)
        setIsFocused(false);

   
    }
    return (
        <div className="relative mt-10">
                  
        <div className='flex w-full border-b-2'>
        <i class={`fa-solid ${props.icon} text-2xl mr-2 absolute top-2`}></i>
        <label    htmlFor={props.name} className={`text-xl transition-all duration-900 absolute  ${isFocused?'top-[-30px] left-0':'top-2 left-10' }` }>{props.name}</label>

        <input type={props.type} id={props.name} className="w-full px-10 py-2 text-lg bg-transparent outline-none p" 
         onFocus={handleFocus}  
         onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        
         />
        </div>
</div>  
    );
} export default StyledInput;