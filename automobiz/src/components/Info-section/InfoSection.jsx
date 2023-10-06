import React from 'react'
import './infosection.css';
import Circle from '../Circles/Circle';

const InfoSection = () => {
  return (
    <div className='container-fluid bg-darkish min-h-100vh overflow-hidden'>
      <div className="container d-flex justify-content-md-between justify-content-center flex-md-nowrap flex-wrap mt-5 h-100">

      <div className='car_img_section text-white w-25 position-relative  ms-5 '>
      <Circle value={"45+"} second_value={"Vehicles Washed"} class_name={"first_circle"}/>
      <Circle value={"55+"} second_value={"Vehicles Repaired"} class_name={"second_circle"}/>
      <Circle value={"100+"} second_value={"Vehicles Serviced"} class_name={"third_circle"}/>
          <img src="./images/info_car_section.png" alt="" srcSet="" />
      </div>
      <div className='car_info_section text-white  px-5 w-480'>
          <h2><span className='orange'>FIND</span> THE BEST AUTOMOTIVE <span className='orange'>SERVICES</span>  WITH AUTOMO <span className='orange'>BIZ</span></h2>
          <div className="row mt-5 justify-content-center ">
            <div className="col-md-6 col-12 px-0">

              <div className="col-12 d-flex align-items-md-end align-items-center flex-md-row flex-column">
              <img src="./images/icon-1.png" className='img-fluid' alt="" />
              <div className="content text-md-start text-center">
              <h3>BEST SERVICES</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              </div>

              <div className="col-12 d-flex align-items-md-end align-items-center flex-md-row flex-column">
              <img src="./images/icon-3.png" className='img-fluid' alt="" />
              <div className="content text-md-start text-center">
              <h3>BEST REPAIRS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              </div>

            </div>
            <div className="col-6 px-0">
            <div className="col-12 d-flex align-items-md-end align-items-center flex-md-row flex-column">
              <img src="./images/icon-2.png" className='img-fluid' alt="" />
              <div className="content text-md-start text-center">
              <h3>BEST TECHNICIANS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              </div>
              <div className="col-12 d-flex align-items-md-end align-items-center flex-md-row flex-column">
              <img src="./images/icon-4.png" className='img-fluid' alt="" />
              <div className="content text-md-start text-center">
              <h3>BEST RATINGS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              </div>


            </div>
          </div>
      </div>

      </div>
    </div>
  )
}

export default InfoSection