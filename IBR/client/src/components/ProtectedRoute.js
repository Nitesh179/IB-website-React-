import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
    const {isLogin} = useSelector(state=>state.admin.value);
    const isAdminLogin = sessionStorage.getItem('isAdminLogin');
    console.log(isAdminLogin);
    if(isLogin)
        return children
    else
        return <Navigate to="/admin-login"/>
}
