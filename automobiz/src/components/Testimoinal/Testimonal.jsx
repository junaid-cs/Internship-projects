import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Testimonal.css";
import "./CustomTestimonialCSS.css"

function Testimonal() {

  return (
    <div className="text-white py-3">
    <h4 className="text-center text-uppercase  fs-1 mb-5" style={{color:'#F87E1D',fontWeight:'400'}}>Testimonals</h4>
     <Carousel>
                <div className="single-carousel-child">
                    <p className="mb-5 text-center fw-bold">Lorem ipsum dolor lorem30
                     sit amet consectetur adipisicing elit. Optio, inventore! Lorem ipsum dolor lorem30
                     sit amet</p>
                   <div className="mb-4">
                   <h5 className="text-primary mb-0 fw-bold">User Name 1</h5>
                   <p className="fw-bold text-white">Finance Head at XYZ.co</p>
                   </div>
                </div>
                <div className="single-carousel-child">
                    <p className="mb-5 text-center fw-bold">Lorem ipsum dolor lorem30
                     sit amet consectetur adipisicing elit. Optio, inventore! Lorem ipsum dolor lorem30
                     sit ame </p>
                   <div className="mb-4">
                   <h5 className="text-primary mb-0 fw-bold">User Name 2</h5>
                   <p className="fw-bold text-white">Finance Head at XYZ.co</p>
                   </div>
                </div>
                <div className="single-carousel-child">
                    <p className="mb-5 text-center fw-bold">Lorem ipsum dolor lorem30
                     sit amet consectetur adipisicing elit. Optio, inventore! Lorem ipsum dolor lorem30
                     sit amet </p>
                   <div className="mb-4">
                   <h5 className="text-primary mb-0 fw-bold">User Name 3</h5>
                   <p className="fw-bold text-white">Finance Head at XYZ.co</p>
                   </div>
                </div>
               
               
             
            </Carousel>
    </div>
  );
}

export default Testimonal;
