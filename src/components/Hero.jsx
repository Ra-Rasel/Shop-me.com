import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='mt-5'>
      <img 
        className='w-full h-auto object-cover rounded-md shadow-md' 
        src={assets.heroimg} 
        alt="Shopme Hero Banner" 
      />
    </div>
  )
}

export default Hero