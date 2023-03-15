import React from 'react'

export default function Slider() {
  return (
    <div>
         <section className="hero-section hero-section-full-height">
            <div className="container-fluid">
                <div className="row" >
                    {/* borderStyle:"solid", borderRadius:"0 0 55% 10px", borderColor:"red" */}
                    <div className="col-lg-12 col-12 p-0" >
                        <div id="hero-slide" className="carousel carousel-fade slide" data-bs-ride="carousel"  >
                            <div className="carousel-inner" style={{borderColor:"#ab2330",borderBottomWidth:"15px",borderBottomStyle:"solid",borderRadius:"0 0 55% 0%"}} > 
                                <div className="carousel-item active">
                                    {/* <img src="images/slide/volunteer-helping-with-donation-box.jpg" */}
                                    <img src="images/slide/info2.jpg" style={{background:"linearGradient( rgba(0, 0, 1, 0.31),rgba(0, 0, 1, 0.35))"}}
                                        className="carousel-image img-fluid" alt="..."/>

                                    <div className="carousel-caption d-flex flex-column justify-content-end">
                                        {/* <h1 className='text-white'>be a Kind Heart</h1> */}

                                        {/* <p>Professional charity theme based on Bootstrap 5.2.2</p> */}
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    {/* <img src="images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg"
                                        className="carousel-image img-fluid" alt="..."/> */}
                                     <img src="images/slide/info4.jpg"
                                        className="carousel-image img-fluid" alt="..."/>
                                    <div className="carousel-caption d-flex flex-column justify-content-end">
                                        <h1>Non-profit</h1>

                                        <p>You can support us to grow more</p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src="images/slide/medium-shot-people-collecting-donations.jpg"
                                        className="carousel-image img-fluid" alt="..."/>

                                    <div className="carousel-caption d-flex flex-column justify-content-end">
                                        <h1>Humanity</h1>

                                        <p>Please tell your friends about our website</p>
                                    </div>
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#hero-slide"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button className="carousel-control-next" type="button" data-bs-target="#hero-slide"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}