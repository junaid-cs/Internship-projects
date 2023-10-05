import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className='footer_orange py-5 mt-5'>
        <div className="d-flex justify-content-center">
            <h4 className='mx-4'>Privacy Policy</h4>
            <h4 className='mx-4'>Terms of Use</h4>
            <h4 className='mx-4'>Contact Info</h4>
        </div>
        <div className="d-flex justify-content-center mt-4">
        <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
        </div>
        
    </div>
    <div className="footer_blue">
        <p className='py-3 mb-0'>©2023 Automobiz | All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer