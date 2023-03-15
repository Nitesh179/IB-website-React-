import React from 'react'

export default function Message() {
    function change(){
        window.jQueryCode();
    }
    
        return<>
        <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <div className="h-100 bg-light rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h6 className="mb-0">Messages</h6>
                                    <a href="">Show All</a>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: "40px" ,height: "40px"}}/>
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: "40px" ,height: "40px"}}/>
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: "40px" ,height: "40px"}}/>
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center pt-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: "40px" ,height: "40px"}}/>
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <div  className="h-100 bg-light rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Calender</h6>
                                    <a href="">Show All</a>
                                </div>
                                <div onClick={change} id="calender"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        
        </>
}
