import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GIF from "../../assets/animation.gif"
import image from "../../assets/DG.png"
import imag1 from "../../assets/layerbg.png"
import Logo from '../../components/Logo'
import ktmap from '../../assets/ktmap1.png'
import splash from '../../assets/splash.png'
import sound from "../../Audio/Fela-Kuti-Water-No-Get-Enemy-[TrendyBeatz.com].mp3"
import CountUp from 'react-countup'
import {AiFillAudio} from "react-icons/ai"


//aos
import AOS from 'aos'
import "aos/dist/aos.css"

const Home = () => {
   useEffect(() => {
      AOS.init({duration:1200})
   }) 
 
  const [value,setValue] = useState(1);
  
 useEffect(()=>{
  if(value % 2 == 0)
   play()
 }, [value]);

  function play(){
    new Audio(sound).play()
  }
   
  return (
    <div className='w-full relative h-[100vh] bg-seagreen overflow-hidden'>
      <img src={imag1} className='absolute w-full h-full object-cover opacity-10'/>
      <div className='w-full h-[100vh] absolute flex justify-center items-center'>

      <div  className='flex justify-center transition-all duratin-300 z-20 lg:pt-2 lg:hover:scale-105 md:hover:scale-105 hover:scale-95 md:pt-0 pt-2 bg-white border border-gray relative Lg:w-[20%] md:w-[50vh] w-[95%]  lg:h-[72vh] md:h-[60] h-[65vh]  rounded-2xl overflow-hidden'>
         <div className='lg:w-[95%] md:w-[100%]  w-[92%]  h-[45vh] z-0 bg-gray rounded-2xl overflow-hidden'>
            <img src={GIF} className='h-full object-cover'/>
         </div>
         <div className='lg:w-[95%] md:w-[100%] w-[92%] h-[45vh] z-10  absolute rounded-2xl overflow-hidden'>
            <img src={image} className='h-full w-full relative lg:top-[4em] md:top-[4em] top-[5em] lg:scale-125 md:scale-120 rounded-2xl object-cover '/>
         </div>

         <div className='absolute px-6 pt-2 w-full h-[45vh] z-30'>

            <div className='flex justify-between'>
              <div className=''><Logo/></div>  

              <div>
                <h3 className='text-xs font-semibold ml-2 '><span className='text-xl font-bold'>HAPPY</span><br/> NEW YEAR</h3>
                 
                 <div className='flex items-center'>
                 <h1 className='text-4xl mb-1 font-extrabold text-green'>20</h1>
                 <CountUp start={0} end={26} delay={14} className='text-4xl mb-1 font-extrabold text-green'/>
                 </div>

              </div>
            </div>
            
            <div className='absolute cursor-pointer backdrop-blur-xs bg-seagreen rounded-2xl p-1 px-6 bottom-2 lg:ml-12 md:ml-32 ml-14'>
              <h1 className='font-bold text-2xl text-white'>Naufal Ahmad</h1>
              <p className='font-semibold text-xs text-center text-white'>Director General Katdict</p>
            </div>

         </div>
        
        <div className='absolute bottom-12 px-3'>
           <p className='text-black text-sm'>
           <span className='text-green text-xl font-bold'>Happy New Year Sir <span className='font-extrabold'>!</span> </span><br/>
            Motivated by your vision, we look forward to achieving great things together in <b className='text-green text-lg'>2026.</b>
         </p>

         <p className='text-green text-sm font-semibold  z-20'>Proud Of You !</p>
        </div>
         
         <img src={ktmap} className='absolute bottom-10 w-32 opacity-20'/>
         
        <button
          onClick={()=>setValue(value+1)} className='cursor-pointer px-4 flex items-center gap-1 absolute bottom-3 left-4 z-30 text-white bg-seagreen rounded-xl p-1'>
           <AiFillAudio className='text-xl'/>
           <p className='text-xs'>Water-No-Get-Enemy</p>
        </button>

      </div>
    </div>
    </div>
  )
}

export default Home