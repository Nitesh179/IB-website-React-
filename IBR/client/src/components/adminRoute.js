import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Footer from './admin/footer';
import { Forms } from './admin/form';
import { Message } from './admin/message';
import Navbar from './admin/navbar';
import News from './admin/News';
import { Progress } from './admin/progresBar';
import { StudentTable } from './admin/studentTable';
import './Table.css';

export default function AdminRoute() {
  const isAdminLogin = sessionStorage.getItem('isAdminLogin');
  console.log(isAdminLogin);
  return (
    <div>
  <Routes>
        <Route path="/admin" element={<Navbar />}>
                <Route index element={<><Progress/> <StudentTable /> <Forms /> <Message /> <Footer /></>} />
                <Route path="studentTable" element={<StudentTable />} />
                <Route path="forms" element={<Forms />} />
                <Route path="message" element={<Message />} />
                <Route path="footer" element={<Footer />} />
                <Route path="news" element={<News/>} />
        {/*   <Route path="*" element={<NoPage />} />  ERROR PAGE Route */}
        </Route>
</Routes>
    </div>
  )
}
