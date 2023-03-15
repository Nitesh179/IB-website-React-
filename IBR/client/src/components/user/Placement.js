import React from 'react'
import { useSelector } from 'react-redux'
import "./placement.css"
export default function Placement() {
  const {placementList} = useSelector(state=>state.placement.value);
  return <>
  
  <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6 my-5">
            <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{visibility:" visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
              <h2 className="mb-5" style={{textShadow: "1px 0px 2px"}}>Foundation Prides</h2>
                  
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row">
        {placementList.map((student,index)=><div key={index} className="col-12 col-sm-6 col-lg-3">
              <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s" ,animationName: "fadeInUp"}}>
                <div className="advisor_thumb"><img src={"/placement/"+student.image} alt="" style={{height:"300px"}}/>
                  <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
                </div>
                <div className="single_advisor_details_info">
                  <h6>{student.name}</h6>
                  <p className="designation">{student.company}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
  
  </>
  
}
