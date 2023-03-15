import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import Login from '../Login ';


export default function NavbarUser() {
  return (
    <div>
      <header className="site-header" style={{backgroundImage:"linear-gradient(130deg, black,  #ab2330, black)"}}>
        <div className="container-fluid">
            <div className="row">

                <div className="col-lg-8 col-12 d-flex flex-wrap">
                    <p className="d-flex me-4 mb-0">
                        <i className="bi-geo-alt me-2"></i>
                        ATC building, 4th floor, SGSITS college, Indore
                    </p>

                    <p className="d-flex mb-0">
                        <i className="bi-envelope me-2"></i>

                        <Link to="mailto:info@company.com">
                            infobeans@foundation.com
                        </Link>
                    </p>
                </div>

                <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                    <ul className="social-icon">
                        <li className="social-icon-item">
                            <Link to="#" className="social-icon-link bi-twitter"></Link>
                        </li>

                        <li className="social-icon-item">
                            <Link to="#" className="social-icon-link bi-facebook"></Link>
                        </li>

                        <li className="social-icon-item">
                            <Link to="#" className="social-icon-link bi-instagram"></Link>
                        </li>

                        <li className="social-icon-item">
                            <Link to="#" className="social-icon-link bi-youtube"></Link>
                        </li>

                        <li className="social-icon-item">
                            <Link to="#" className="social-icon-link bi-whatsapp"></Link>
                        </li>
                        <li className="social-icon-item">
                            <Link to="admin" className="bi bi-person-fill text-white"></Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </header>

    <nav className="navbar navbar-expand-lg bg-light shadow-lg ">
        <div className="container-fluid">
            <Link className="navbar-brand" to="index.html">
                <img src={process.env.PUBLIC_URL + '/logo.png'} className="logo mx-3" style={{width:"50px"}} alt="Foundation Logo"/>
                <span>
                    Infobeans Foundation
                    <small>Non-profit Organization</small>
                </span>
            </Link>

            <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link click-scroll" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link click-scroll" to="/about">About</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link click-scroll" to="/gallery">Gallery</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link click-scroll" to="/placement">Placement</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link click-scroll" to="/contact">Contact</Link>
                    </li>

                    <li className="nav-item ms-3">
                        <Link className="nav-link custom-btn custom-border-btn btn" to="/register">Register</Link>
                    </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link custom-btn custom-border-btn btn" to="/login">Login</Link>
                        </li>
                </ul>
            </div>
        </div>
    </nav>

  

<Outlet/>


    </div>
  )
}
