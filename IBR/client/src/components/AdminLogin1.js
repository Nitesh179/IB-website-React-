import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast,ToastContainer} from "react-toastify"
import { adminLogin,fetchRegistration } from '../web/adminSlice';
import { fetchGallery } from '../web/gallerySlice';
import { fetchNews } from '../web/NewsSlice';
export default function AdminLogin1() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const {isLogin} = useSelector(state=>state.admin.value);
    const adminLoginn = (e)=>{
        e.preventDefault();
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
    <div className='container my-5'>
        <ToastContainer/>
        <div className='row p-5'>
            <div className='col-md-6 m-auto p-5'>
                <form onSubmit={adminLoginn}>
                    <div className='form-group'>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control my-3' placeholder='email'></input>
                    </div>
                    <div className='form-group'>
                        <input onChange={(e)=>setPass(e.target.value)} type="password" className='form-control my-3' placeholder='password'></input>
                    </div>
                    <div className='form-group'>
                        <input type="submit" className='btn btn-outline-success'></input>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
