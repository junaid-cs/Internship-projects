import React from 'react'
import './newsandupdates.css'

const NewsAndUpdates = () => {
  let data = [
    {
      id:1,
      img:"./images/hero-section.jpeg",
      heading:"NEWS HEADING",
      des:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    },
    {
      id:2,
      img:"./images/hero-section.jpeg",
      heading:"NEWS HEADING",
      des:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    },
    {
      id:3,
      img:"./images/hero-section.jpeg",
      heading:"NEWS HEADING",
      des:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    },
  ]
  return (
    <div className='NewsAndUpdates '>
        <div className="container py-5">
        <h3>News&Updates</h3>
        <div className="row mt-5 pt-3 align-items-center">

          {
            data.map((item=>(
              <>
              <div className="col-md-3 col-12 my-md-2 my-4 " key={item.id}>
                <img src={item.img} className='img-fluid' alt="" srcset="" />
            </div>
            <div className="col-md-7 col-12 text-white text-md-start text-center">
                <h4>{item.heading}</h4>
                <p className='mb-4'>{item.des}</p>
                <a href="#">Read More</a>
            </div>
              </>
            )))
          }
            
        </div>
        </div>
    </div>
  )
}

export default NewsAndUpdates