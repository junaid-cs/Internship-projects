import React from 'react'
import './newsandupdates.css'

const NewsAndUpdates = () => {
  return (
    <div className='NewsAndUpdates '>
        <div className="container py-5">
        <h3>News&Updates</h3>
        <div className="row mt-5 pt-3 align-items-center">
            <div className="col-3 my-2">
                <img src="./images/hero-section.jpeg" className='img-fluid' alt="" srcset="" />
            </div>
            <div className="col-7 text-white">
                <h4>NEWS HEADING</h4>
                <p className='mb-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#">Read More</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NewsAndUpdates