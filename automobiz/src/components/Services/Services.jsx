import React from 'react'
import './services.css'

let data = [
    {
        img: "./images/icon-1.png",
        heading: "AUTOMOTIVE DELIVERY",
        des: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
        img: "./images/icon-2.png",
        heading: "AUTOMOTIVE DELIVERY",
        des: "Lorem ipsum dolor sit amet, consectetur"
    }
    ,
    {
        img: "./images/icon-3.png",
        heading: "AUTOMOTIVE DELIVERY",
        des: "Lorem ipsum dolor sit amet, consectetur"
    }
    ,
    {
        img: "./images/icon-4.png",
        heading: "AUTOMOTIVE DELIVERY",
        des: "Lorem ipsum dolor sit amet, consectetur"
    }
    ,
    {
        img: "./images/icon-1.png",
        heading: "AUTOMOTIVE DELIVERY",
        des: "Lorem ipsum dolor sit amet, consectetur"
    }
]

const Services = () => {
    return (
        <div className='services text-light my-5'>
            <div className="overlay">
                <div className="container z-3 h-100 d-flex align-items-center justify-content-center">
                    {
                        data.map((item) => (
                            <div className="services_card text-center">
                                <img src={item.img} alt="" srcset="" />
                                <h3>{item.heading}</h3>
                                <p>{item.des}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Services