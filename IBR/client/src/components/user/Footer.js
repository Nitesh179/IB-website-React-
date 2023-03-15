

// new footer

import React from 'react'

export default function Footer() {
  return (
    <div>

  <footer style={{backgroundImage:"linear-gradient(130deg, black, black, #ab2330, black)"}} className=" text-center text-lg-start text-white">
    {/* <!-- Grid container --> */}
    <div  className="container p-4">
      {/* <!--Grid row--> */}
      <div  className="row my-4">
        {/* <!--Grid column--> */}
        <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">

          <div  className="rounded-circle shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{width: "150px", height: "150px"}}>
            <img src={process.env.PUBLIC_URL + '/logo.png'} height="100" alt=""
                 loading="lazy" />
          </div>

          <p  className="text-center">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>

          <ul  className="list-unstyled d-flex flex-row justify-content-center">
            <li>
              <a  className="text-white px-2" href="#!">
                <i  className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a  className="text-white px-2" href="#!">
                <i  className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a  className="text-white ps-2" href="#!">
                <i  className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>

        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5  className="text-uppercase mb-4">Animals</h5>

          <ul  className="list-unstyled">
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  When your pet is missing</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  Recently found</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  How to adopt?</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  Pets for adoption</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  Material gifts</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  Help with walks</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  Volunteer activities</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5  className="text-uppercase mb-4">Animals</h5>

          <ul  className="list-unstyled">
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  General information</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  About the shelter</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  Statistic data</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  Job</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  Tenders</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  Contact</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5  className="text-uppercase mb-4">Contact</h5>

          <ul  className="list-unstyled">
            <li>
              <p><i  className="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street, Poland</p>
            </li>
            <li>
              <p><i  className="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
            </li>
            <li>
              <p><i  className="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}
      </div>
      {/* <!--Grid row--> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div  className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright:
      <a  className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    {/* <!-- Copyright --> */}
    <div style={{width:"100%", height:"10px",backgroundImage:"linear-gradient(180deg, red, #ab2330, black)"}} className="bg-danger"> </div>
  </footer>

</div>
  )
}
