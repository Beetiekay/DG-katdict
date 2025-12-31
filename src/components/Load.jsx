import { useEffect, useState } from 'react'
import animation from "../assets/katdickA.gif"

const Load = () => {
  
    const [open, setOpen] = useState(false);

    useEffect(() => {
    setOpen(true)

    setTimeout(() => {
    setOpen(false)

    }, 12000);
  },[])
      
  return (
    <div>
        {
         open &&(
         <div className='w-full h-full flex justify-center transition-all fixed peer-checked:hidden items-center top-0 z-50 bg-whitegray'>
          <div data-aos="slide-up" className='lg:w-[25%] md:w-[48%] w-[85%] h-fit relative py-6 bg-opacity-80 bg-whitegray p-2'>
             <img src={animation} className='w-full h-full'/>
            <div className='flex justify-center -mt-3'>
                <div className='w-28 flex gap-3 items-center'>
                <div className='w-3 h-3 animate-pulse bg-seagreen rounded-full'></div>
                <div className='w-3 h-3 animate-pulse bg-seagreen rounded-full'></div>
                <div className='w-3 h-3 bg-seagreen animate-pulse rounded-full'></div>
                <div className='w-3 h-3 bg-seagreen rounded-full  animate-bounce'></div>
                <div className='w-3 h-3 bg-seagreen rounded-full  animate-bounce'></div>
                <div className='w-3 h-3 bg-seagreen rounded-full animate-bounce'></div>
                </div>
            </div>
         </div>
        </div>
         )}
    </div>
  )
}

export default Load