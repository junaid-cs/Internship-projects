import React from 'react'
import "./latestcollection.css";

const LatestCollection = () => {
    return (
        <div className='LatestCollection container my-5'>
            <h3 className='orange'>
                LatestCollection
            </h3>
            <div className="row mt-5 mx-4">
                <div className="col-4 p-3">
                    <div className="card item-card card-block bg-dark">
                        <div className="img_container d-flex flex-column align-items-end">
                            <i className='fa fa-eye my-2'></i>
                            <i className='fa fa-share'></i>
                            <i className='fa fa-save my-2'></i>
                        </div>
                        <div className="card_content p-3">
                            <h5 className="item-card-title mt-3 mb-0">SUsed 2019 BMW 228i Gran Coupe</h5>
                            <p className="card-text mb-3">11,475 Miles</p>
                            <div className="card_location mb-3">
                                <i className="fa fa-location-dot me-2"></i><span className=''>Edgware Road, London</span>
                            </div>

                            <div className="d-flex justify-content-between text-white">
                                <div className='d-flex'>
                                    <span className='me-2'>
                                        <p className='mb-0  text-white'>Original</p>
                                        <span className="badge bg-graish py-2 px-3"> £20,000 </span>
                                    </span>
                                    <span>
                                        <p className='mb-0  text-white'>New</p>
                                        <span className="badge bg_card_orange py-2 px-3"> £18,000 </span>
                                    </span>
                                </div>
                                <div className='see_more'>
                                    <button className='py-2 px-3'>See More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="view_more">
                <h3 className='text-center mt-2'>View More <i className='fa fa-arrow-right'></i></h3>
            </div>
        </div>
    )
}

export default LatestCollection