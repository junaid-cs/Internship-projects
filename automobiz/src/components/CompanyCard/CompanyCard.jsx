import React from 'react'
import "./companycard.css"

const CompanyCard = () => {
    return (
        <div className='my-5 CompanyCard text-white container '>
            <div className="row justify-content-center flex-wrap-reverse">

                <div className="orange_card col-md-5 col-12 ps-5 me-4 d-flex justify-content-end align-items-center mb-md-0 mb-5 ">
                    <div className='ps-3'>
                        <img src="./images/icon-1.png" className='img-fluid' alt="" srcset="" />
                    </div>
                    <div className='ms-3'>
                        <h3 className='mb-3'>DO YOU WANT TO BUY AN AUTOMOTIVE ?</h3>
                        <p className='pe-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illum qui nam aperiam molestias perspiciatis pariatur alias maxime doloribus officiis.
                        </p>
                    </div>
                </div>
                <div className="blue_card col-md-5 col-12 pe-5 mx-4 d-flex justify-content-end align-items-center"> <div className='ps-3'>
                    <img src="./images/icon-1.png" className='img-fluid' alt="" srcset="" />
                </div>
                    <div className='ms-3'>
                        <h3 className='mb-3'>DO YOU WANT TO BUY AN AUTOMOTIVE ?</h3>
                        <p className='pe-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illum qui nam aperiam molestias perspiciatis pariatur alias maxime doloribus officiis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCard