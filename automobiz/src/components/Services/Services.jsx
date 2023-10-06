import React from 'react'
import './services.css'

let data = [
    {
        id:1,
        img: "./images/icon-1.png",
        heading: "AUTOMOTIVE DELIVERY",
        des: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
        id:2,
        img: "./images/icon-2.png",
        heading: "AUTOMOTIVE DELIVERY",
        des: "Lorem ipsum dolor sit amet, consectetur"
    }
    ,
    {
        id:3,
        img: "./images/icon-3.png",
        heading: "AUTOMOTIVE DELIVERY",
        des: "Lorem ipsum dolor sit amet, consectetur"
    }
    ,
    {
        id:4,
        img: "./images/icon-4.png",
        heading: "AUTOMOTIVE DELIVERY",
        des: "Lorem ipsum dolor sit amet, consectetur"
    }
    ,
    {
        id:5,
        img: "./images/icon-1.png",
        heading: "AUTOMOTIVE DELIVERY",
        des: "Lorem ipsum dolor sit amet, consectetur"
    }
]

const Services = () => {
    return (
        <div className='services text-light my-5'>
            <div className="overlay">
                <div className="container mt-4 mt-lg-auto z-3 h-100 d-flex align-items-center justify-content-center  flex-md-nowrap flex-wrap">
                    {
                        data.map((item) => (
                            <div className="services_card text-center mb-md-0 mb-3" key={item.id}>
                                <img src={item.img} alt="" srcSet="" />
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