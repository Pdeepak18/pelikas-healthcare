import './Button.css';
import {Link} from 'react-router-dom'
import React from 'react';

export function Button(){
    return(
        <Link to='sign-up'>
            <button className='btn pt-[8px] pb-[8px] pr-[20px] pl-[20px] rounded-[4px] 
            outline-none text-[18px] text-white cursor-pointer 
            bg-[#1888ff] hover:pt-[6px] hover:pb-[6px] hover:pr-[18px] hover:pl-[18px] 
            hover:text-white hover:bg-transparent hover:rounded hover:transition-all hover:ease-in hover:duration-300
            hover:border-2 hover:border-[#1888ff]
            '>Sign Up</button>
        </Link>

    );

}