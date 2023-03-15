import React from 'react'

export default function OurStory() {
  return (
    <div>
       <section className="section-padding">
            <div className="container">
                <div className="row">
 
                    <div className="col-lg-10 col-12 text-center mx-auto">
                        <h2 className="mb-5" style={{textShadow: "1px 0px 2px"}}>Welcome to Infobeans Foundation</h2>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="featured-block d-flex justify-content-center align-items-center">
                            <a href="donate.html" className="d-block">
                                <img src="images/icons/hands.png" className="featured-block-image img-fluid" alt=""/>

                                <p className="featured-block-text">Bast <strong>career</strong> Opportunities</p>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                        <div className="featured-block d-flex justify-content-center align-items-center">
                            <a href="donate.html" className="d-block">
                                <img src="images/icons/people.png" className="featured-block-image img-fluid" alt=""style={{borderRadius:"100%",width:"180px",height:"120px"}}/>

                                <p className="featured-block-text"><strong>underprivileged</strong> Student</p>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                        <div className="featured-block d-flex justify-content-center align-items-center">
                            <a href="donate.html" className="d-block">
                            <img src="images/icons/it-career.webp" className="featured-block-image img-fluid" alt=""style={{borderRadius:"100%",width:"120px",height:"120px"}}/>

                                <p className="featured-block-text">Make a <strong>career</strong> in IT Field</p>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="featured-block d-flex justify-content-center align-items-center">
                            <a href="donate.html" className="d-block">
                                <img src="images/icons/education.jpg" className="featured-block-image img-fluid" alt=""style={{borderRadius:"100%",width:"120px",height:"120px"}}/>

                                <p className="featured-block-text"><strong>ITEP</strong> <br></br> Program</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

{/* about us */}


        <section className="features">
      <div className="container">

      <div className="section-title">
          <h2 style={{textShadow:  "1px 0px 2px "}} className="text-center mb-5">Addmission process</h2>
          <p>It then moves on to some more advanced skills, such as JavaScript and MERN/MEAN or Android development, which are the bread and butter of any programmer’s toolkit.</p>
        </div>
        <div className="row" >
          <div className="col-md-5">
            <img src="img/infobeans_foundation1.jpg" className="img-fluid img-thumbnail" alt=""style={{ boxShadow:" 0px 0px 8px 0px"}}/>
          </div>
          <div className="col-md-7 pt-4">
            {/* <!-- <h3>Addmission process</h3> --> */}
            <p className="fst-italic">
              We have been ITEP program for over 10 years and have helped a lot of student achieve their goals.
            </p>
            <ul style={{listStyleType:'none'}}>
              <li><i className="bi bi-check"></i>Ragister yourself in ITEP program</li>
              <li><i className="bi bi-check"></i>Entrance exam</li>
              <li><i className="bi bi-check"></i>Interview</li>
              <li><i className="bi bi-check"></i>House visit</li>
            </ul>
          </div>
        </div>

        <div className="row" >
          <div className="col-md-5 order-1 order-md-2">
            <img src="img/infobeans_foundation2.jpg" className="img-fluid img-thumbnail" alt=""style={{ boxShadow:" 0px 0px 8px 0px" ,height:" 350px", width:"500px"}}/>
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1">
            <h3 style={{textShadow:  "1px 0px 2px ,font-weight: 600"}}>Syllabus of Exam</h3> <hr style={{height: "5px",background: "#ab2330", margin: "20px 0",boxShadow: "0px 0px 4px 2px rgba(204,204,204,1)",width: "20%" }}/>
            <p className="fst-italic">
              This is a list of the prerequisites for this entrance exam
            </p>
            
            <ul style={{listStyleType:'none'}}>
              <li><i className="bi bi-check"></i>Basic Mathmatics</li>
              <li><i className="bi bi-check"></i>Reasoning & G.K.</li>
              <li><i className="bi bi-check"></i>Computer</li>
              <li><i className="bi bi-check"></i>English</li>
              <li><i className="bi bi-check"></i>Hindi</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <img src="img/infobeans_foundation3.jpg" className="img-fluid img-thumbnail" alt=""  style={{ boxShadow:" 0px 0px 8px 0px"}}/>
          </div>
          <div className="col-md-7 pt-3">
              <h3 style={{textShadow:  "1px 0px 2px ",fontWeight: "600"}}>Interview Round</h3> <hr style={{height: "5px",background: "#da2932", margin: "20px 0",boxShadow: "0px 0px 4px 2px rgba(204,204,204,1)",width: "20%" }}/>
              <p>An interview is a conversation between two people, typically a Interviewer and interviewee. It's often used to gather information about the interviewee's life, career, thoughts or accomplishments.</p>
              <ul style={{listStyleType:'none'}}>
              <li><i className="bi bi-check"></i>A round with HR or hiring manager to assess the candidate’s qualifications for the position</li>
              <li><i className="bi bi-check"></i>A technical interview with a member of Infobeans Foundation team</li>
              <li><i className="bi bi-check"></i>A face-to-face interview with members of Infobeans Foundation team</li>
            </ul>
          </div>
        </div>

        <div className="row" >
          <div className="col-md-5 order-1 order-md-2">
            <img src="img/infobeans_foundation3.jpg" className="img-fluid img-thumbnail" alt="" style={{ boxShadow:" 0px 0px 8px 0px"}}/>
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1">
            <h3 style={{textShadow: " 1px 0px 2px" ,fontWeight: "600"}}>House Visit</h3>
            <hr style={{height: "5px",background: "#da2932", margin: "20px 0",boxShadow: "0px 0px 4px 2px rgba(204,204,204,1)",width: "20%" }}/>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section>
        

    </div>
  )
}
