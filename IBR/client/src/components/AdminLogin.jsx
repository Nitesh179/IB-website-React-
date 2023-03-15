
import './login.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast,ToastContainer} from "react-toastify"
import { adminLogin } from '../web/adminSlice';


export default function AdminLogin() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const {isLogin} = useSelector(state=>state.admin.value);
  const adminLoginn = (e)=>{
      e.preventDefault();
      console.log("email => "+email,"email => "+pass);

      const adminEmail = "info@gmail.com";
      const adminPass = "info";
      sessionStorage.setItem("isAdminLogin",true);
      if(email === adminEmail && pass === adminPass){
          dispatch(adminLogin());
         navigate('/admin')
      }
      else{
          toast.error("Wrong credentials");
      }
  }


  return (
    <div > <ToastContainer/>
      <section className="background-radial-gradient overflow-hidden">
   
  
   <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
     <div className="row gx-lg-5 align-items-center mb-5">
       <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: 10}}>
         <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
           The best offer <br />
           <span style={{color: "#ae666e"}}>for your business</span>
         </h1>
         <p className="mb-4 opacity-70" style={{color: "#Ffff", fontWeight:"normal"}}>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Temporibus, expedita iusto veniam atque, magni tempora mollitia
           dolorum consequatur nulla, neque debitis eos reprehenderit quasi
           ab ipsum nisi dolorem modi. Quos?
         </p>
       </div>
 
       <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
         <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
         <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
 
         <div className="card bg-glass">
           <div className="card-body px-4 py-5 px-md-5"  style={{backgroundColor:"#4812174f", color:"#a32b37", fontWeight:"bolder", fontSize:"19px"}}>
             <form onSubmit={adminLoginn}>

       <h1 className='text-center mb-4' style={{color:"#a32b37"}}>SIGN UP</h1>

               {/* <!-- Email input --> */}
               <div className="form-outline mb-4">
                 <label className="form-label" for="form3Example3">Email address</label>
                 <input  onChange={(e)=>setEmail(e.target.value)} type="email" id="form3Example3" className="form-control" />
               </div>
 
               {/* <!-- Password input --> */}
               <div className="form-outline mb-4">
                 <label className="form-label" for="form3Example4">Password</label>
                 <input  onChange={(e)=>setPass(e.target.value)} type="password" id="form3Example4" className="form-control" />
               </div>
 
               
 
               {/* <!-- Submit button --> */}
           {isLogin ?  <button type="submit" className="btn btn-danger mb-4 d-grid mx-auto">
                 Sign up
               </button> :<button type="submit" className="btn btn-danger mb-4 d-grid mx-auto">
                 Sign In
               </button>}
              
 
               {/* <!-- Register buttons --> */}
               <div className="text-center">
               <p>sign up </p>
                 <p>or sign up with:</p>
                 <button type="button" className="btn btn-link btn-floating mx-1">
                   <i className="fab fa-facebook-f text-danger"></i>
                 </button>
 
                 <button type="button" className="btn btn-link btn-floating mx-1">
                   <i className="fab fa-google text-danger"></i>
                 </button>
 
                 <button type="button" className="btn btn-link btn-floating mx-1">
                   <i className="fab fa-twitter text-danger"></i>
                 </button>
 
                 <button type="button" className="btn btn-link btn-floating mx-1">
                   <i className="fab fa-github text-danger"></i>
                 </button>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
    </div>
  )
}
