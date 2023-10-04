import React from 'react'
import "./findcar.css"

const FindCar = () => {
    return (
        <div className='bg-orange '>
            <div className='px-3 pt-3'>
                <i className='fa fa-cars'></i> <span className='car-icon-text'>Find Your Automotive</span>
            </div>
            <div className='overflow-hidden'>
                <form action="" className='row continer-fluid p-3 ms-0' >
                    <div className="col-2">
                        <select class="form-select" className='w-100 py-2 ' aria-label="Default select example">
                            <option selected>Year</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <select class="form-select" className='w-100 py-2 px-2' aria-label="Default select example">
                            <option selected>SELECT BRAND</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <select class="form-select" className='w-100 py-2 px-2' aria-label="Default select example">
                            <option selected>SELECT MODEL</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <select class="form-select" className='w-100 py-2 px-2' aria-label="Default select example">
                            <option selected>PRICE RANGE</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <input type="button" name="" className='w-100 py-2 text-center search_btn' value={"SEARCH AUTOMOTIVE"} id="" />
                        </div>
                </form>
            </div>

        </div>
    )
}

export default FindCar