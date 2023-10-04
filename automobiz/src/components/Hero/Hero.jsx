import React from 'react'
import './hero.css'
import FindCar from '../FindCar/FindCar'

const Hero = () => {
  return (
    <div className='position-relative'>
    <div className='hero-section '>
        <img src="./images/hero-section.jpeg" className='img-fluid w-100 h-100' alt="" />
    </div>
    <div className='findcar_form'>
        <FindCar />
    </div>
    </div>
  )
}

export default Hero