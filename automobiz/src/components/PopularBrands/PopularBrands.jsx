import React from 'react'
import './popularbrands.css'

const PopularBrands = () => {
    return (
        <div className='my-5 h-40 PopularBrands text-white text-center pt-5 overflow-hidden'>
            <h3 className='mb-5'>
                PopularBrands
            </h3>
            <div className="row">
                <div className="col-2">
                    <img src="./images/brand-1.png" className='img-fluid' alt="" srcset="" />
                </div>
                <div className="col-2">
                    <img src="./images/brand-2.png" className='img-fluid' alt="" srcset="" />
                </div>
                <div className="col-2">
                    <img src="./images/brand-3.png" className='img-fluid' alt="" srcset="" />
                </div>
                <div className="col-2">
                    <img src="./images/brand-4.png" className='img-fluid' alt="" srcset="" />
                </div>
                <div className="col-2">
                    <img src="./images/brand-5.png" className='img-fluid' alt="" srcset="" />
                </div>
                <div className="col-2">
                    <img src="./images/brand-6.png" className='img-fluid' alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default PopularBrands