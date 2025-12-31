import React from 'react'
import logo from "../assets/fav.png"


const Logo = () => {
  return (
    <div className='flex gap-2'>
        <div><img src={logo} className='lg:w-10 md:w-16 w-10'/></div>
        <div className='flex items-center'>
        <div className='lg:mt-0 md:mt-0 mt-2'>
         <h1 className='lg:text-[12px] md:text-[12px] text-[12px] text-green font-serif font-semibold'>KATDICT</h1>
         <div className='w-20 h-3 gap-1 flex'>
            <div className='lg:w-3 md:w-6 w-4 h-1 bg-green rounded-lg'></div>
            <div className='lg:w-10 md:w-14 w-10 h-1  bg-green animate-pulse rounded-lg'></div>
         </div>
         </div>
        </div>
    </div>
  )
}

export default Logo;