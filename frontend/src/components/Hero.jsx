import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 '>
        {/* Hero left */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>

            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                      <p className='bg-[#414141] w-8 md:w-11 h-[1px] '></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>

                </div>
                
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                 <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                      <p className='bg-[#414141] w-8 md:w-11 h-[1px] '></p>
                      

                </div>
            </div>

        </div>
        {/* Hero right side */}
        <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
        

    </div>
  )
}

export default Hero