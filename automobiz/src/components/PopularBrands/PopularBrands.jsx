import React from 'react'
import './popularbrands.css'

const PopularBrands = () => {
    return (
        <div className='my-5 h-40 PopularBrands text-white text-center pt-5 overflow-hidden'>
            <h3 className='mb-2 mb-lg-3 '>
                PopularBrands
            </h3>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-2 my-5 my-lg-auto">
                    <img src="./images/brand-1.png" className='img-fluid' alt="" srcset="" />
                </div>
                <div className="col-12 col-md-4 col-lg-2 my-5 my-lg-auto">
                    <img src="./images/brand-2.png" className='img-fluid' alt="" srcset="" />
                </div>
                <div className="col-12 col-md-4 col-lg-2 my-5 my-lg-auto">
                    <img src="./images/brand-3.png" className='img-fluid' alt="" srcset="" />
                </div>
                <div className="col-12 col-md-4 col-lg-2 my-5 my-lg-auto">
                    <img src="./images/brand-4.png" className='img-fluid' alt="" srcset="" />
                </div>
                <div className="col-12 col-md-4 col-lg-2 my-2 my-lg-auto">
                    <img src="./images/brand-5.png" className='img-fluid' alt="" srcset="" />
                </div>
                <div className="col-12 col-md-4 col-lg-2 my-2 my-lg-auto">
                    <img src="./images/brand-6.png" className='img-fluid' alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default PopularBrands