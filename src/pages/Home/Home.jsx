import React from 'react'
import { Link } from 'react-router-dom'
import GIF from "../../assets/animation.gif"
import image from "../../assets/DG.png"
import imag1 from "../../assets/layerbg.png"
import Logo from '../../components/Logo'
import CountUp from 'react-countup'


const Home = () => {
  return (
    <div className='w-full h-[100vh] bg-seagreen flex items-center justify-center overflow-hidden'>
      <img src={imag1} className='absolute w-full h-full object-cover opacity-10'/>

      <div className='flex justify-center duratin-200 z-20 lg:pt-2 lg:hover:scale-105 md:hover:scale-105 hover:scale-95 md:pt-0 pt-2 bg-white border border-gray relative Lg:w-[20%] md:w-[50vh] w-[95%]  lg:h-[65vh] md:h-[60] h-[65vh]  rounded-2xl overflow-hidden'>
         <div className='lg:w-[95%] md:w-[100%]  w-[92%]  h-[45vh] z-0 bg-gray rounded-2xl overflow-hidden'>
            <img src={GIF} className='h-full object-cover'/>
         </div>
         <div className='lg:w-[95%] md:w-[100%] w-[92%] h-[45vh] z-10 lg:border-2 md:border-0 border-seagreen absolute rounded-2xl overflow-hidden'>
            <img src={image} className='h-full w-full relative lg:top-[4em] md:top-[4em] top-[5em] lg:scale-125 md:scale-120 rounded-2xl object-cover '/>
         </div>

         <div className='absolute px-6 pt-2 w-full z-30'>

            <div className='flex justify-between'>
              <div className=''><Logo/></div>  

              <div>
                <h3 className='text-xs font-semibold ml-2 '><span className='text-xl font-bold'>HAPPY</span><br/> NEW YEAR</h3>
                 
                 <div className='flex items-center'>
                 <h1 className='text-4xl mb-1 font-extrabold text-green'>20</h1>
                 <CountUp start={0} end={26} delay={1} className='text-4xl mb-1 font-extrabold text-green'/>
                 </div>

              </div>
            </div>


         </div>
      </div>

    </div>
  )
}

export default Home