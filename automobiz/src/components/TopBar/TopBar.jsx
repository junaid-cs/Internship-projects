import React from 'react'
import './top_bar.css';

const TopBar = () => {
  return (
    <div>
        <topbar class=" bg-body-dark py-0 position-fixed w-100 bg-light z-1 " >
    <div class="container-fluid" >
      <div className=' mx-5  d-flex nav_container justify-content-between align-items-center'>

      <a class="navbar-brand py-0" href="#">
        <img src="./images/logo.png" alt="Logo"  class="d-inline-block img-fluid align-text-top"/>
      </a>
      <div className='nav_btns pb-3'>
        <a href="#" className='topbar_login'  rel="noopener noreferrer">Login</a>
        <a href="#" className='topbar_signup' rel="noopener noreferrer">Sign up</a>
      </div>
      </div>
    </div>
  </topbar>
  </div>
  )
}

export default TopBar