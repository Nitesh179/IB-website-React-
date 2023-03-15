import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterAdvertise() {
  return (
    <div>
       <section className="cta-section section-padding section-bg my-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-12 ms-auto">
                        <h2 className="mb-0">Register yourself for ITEP</h2>
                    </div>
                    <div className="col-lg-5 col-12">
                        <Link to="/about" className="me-4">Join ITEP Course Now </Link>
                        <Link to="/register" className="custom-btn btn smoothscroll">Register Now</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
