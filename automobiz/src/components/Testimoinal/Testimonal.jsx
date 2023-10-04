import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Testimonal.css"

function Testimonal() {

  return (
    <div className="text-white">
     <Carousel>
                <div>
                    <h3>carousel 1</h3>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, inventore!</p>
                </div>
                <div>
                    <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, inventore!</p>
                <h3>carousel 1</h3>
                </div>
                <div>
                <h3>carousel 1</h3>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, inventore!</p>
                </div>
            </Carousel>
    </div>
  );
}

export default Testimonal;
