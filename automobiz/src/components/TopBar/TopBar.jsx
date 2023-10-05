import React from 'react'
import './top_bar.css';

const TopBar = () => {
  return (
    <div>
        <section className=" bg-body-dark py-0 position-fixed w-100 bg-light z-1 " >
    <div className="container-fluid" >
      <div className=' mx-5  d-flex nav_container justify-content-between align-items-center'>

      <a className="navbar-brand py-0" href="#">
        <img src="./images/logo.png" alt="Logo"  className="d-inline-block img-fluid align-text-top"/>
      </a>
      <div className='nav_btns pb-3'>
        <a href="#" className='topbar_login'  rel="noopener noreferrer">Login</a>
        <a href="#" className='topbar_signup' rel="noopener noreferrer">Sign up</a>
      </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default TopBar