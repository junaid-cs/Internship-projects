import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary z-1" data-bs-theme="dark">
            <div className="container-fluid mx-4 py-3 ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Buy
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sell
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Automotive Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Automotive Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Q/A</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Community</a>
                        </li>

                    </ul>
                </div>
                <div className="search  me-md-4 ">
                    <i className="fa fa-search text-dark"></i>
                    <input type="text" className="form-control bg-light" placeholder="Search"/>
                </div>
            </div>
        </nav>
    )
}

export default Nav