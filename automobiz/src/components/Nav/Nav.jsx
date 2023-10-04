import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary z-1" data-bs-theme="dark">
            <div class="container-fluid mx-lg-4 py-3 ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Buy
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sell
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Automotive Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Automotive Jobs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Q/A</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Community</a>
                        </li>

                    </ul>
                </div>
                <div class="search  me-md-4 ">
                    <i class="fa fa-search text-dark"></i>
                    <input type="text" className="form-control bg-light" placeholder="Search"/>
                </div>
            </div>
        </nav>
    )
}

export default Nav