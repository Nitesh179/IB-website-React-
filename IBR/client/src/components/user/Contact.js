import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import webApi from '../../web/webApi';
import WebService from '../../web/webService';
import {toast,ToastContainer} from 'react-toastify'
import { updatecontact } from '../../web/contactSlice';
export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const sendMessage = async(e)=>{
        e.preventDefault()
        let newMessage = {
            name,
            email,
            message
        }
        try {
            let res = await WebService.postApi(webApi.SEND_MESSAGE,newMessage);
            if(res.data.status){
                dispatch(updatecontact(res.data.result));
                toast.success("ThankYou from contacting Infobeans Foundation! we will reach you shortly.")
            }
            else
            toast.failure("Oops!... something went wrong")
            
        } catch (error) {
            console.log(error);
            toast.failure("Oops!... something went wrong")
        }


    }
  return (
    <div>
        
        <section className="contact-section section-padding" id="section_6">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
                        <div className="contact-info-wrap">
                            <h2>Get in touch</h2>

                            <div className="contact-image-wrap d-flex flex-wrap">
                                <img src="images/avatar/logo.png"
                                    className="img-fluid avatar-image" alt=""/>

                                <div className="d-flex flex-column justify-content-center ms-3">
                                    <p className="mb-0"><h6>Ayush Rajput</h6></p>
                                    <p className="mb-0"><strong><h4>Office Manager</h4></strong></p>
                                </div>
                            </div>

                            <div className="contact-info">
                                <h5 className="mb-3">Contact Infomation</h5>

                                <p className="d-flex mb-2">
                                    <i className="bi-geo-alt me-2"></i>
                                    ATC Building 4th Floor SGSITS college Indore
                                </p>

                                <p className="d-flex mb-2">
                                    <i className="bi-telephone me-2"></i>

                                    <a href="tel: 305-240-9671">
                                        888-955-1164
                                    </a>
                                </p>

                                <p className="d-flex">
                                    <i className="bi-envelope me-2"></i>

                                    <a href="mailto:info@yourgmail.com">
                                        ayush.rajput@infobeansfoundation.com
                                    </a>
                                </p>

                                <a href="#" className="custom-btn btn mt-3">Get Direction</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 mx-auto">
                        <form className="custom-form contact-form" onSubmit={sendMessage}>
                            <h2>Contact form</h2>
                            <p className="mb-4">Or, you can just send an email:
                                <a href="#">infobeans@foundation.org</a>
                            </p>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <input type="text" name="first-name" id="first-name" className="form-control"
                                        placeholder="Name..." onChange={(e)=>setName(e.target.value)} required/>
                                </div>
                            </div>
                            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control"
                                placeholder="Email..." onChange={(e)=>setEmail(e.target.value)} required/>
                            <textarea name="message" rows="5" onChange={(e)=>setMessage(e.target.value)} className="form-control" id="message"
                                placeholder="What can we help you?"></textarea>
                            <button  type="submit" className="form-control">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
      
    </div>
  )
}
