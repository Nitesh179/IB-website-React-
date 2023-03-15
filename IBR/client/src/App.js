import { useEffect } from 'react';
import { Form, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/admin/Footer';
import  Forms  from './components/admin/Form';
import  Message  from './components/admin/Message';
import Navbar from './components/admin/Navbar';
import Progress  from './components/admin/ProgresBar';
import StudentTable  from './components/admin/StudentTable';
import NavbarUser from './components/user/NavbarUser';
import Slider from './components/user/Slider'
import OurStory from './components/user/OurStory'
import RegisterAdvertise from './components/user/RegisterAdvertise'
import Enquiry from './components/user/Enquiry'
import News1 from './components/user/News1'
import Contact from './components/user/Contact'
import FooterUser from './components/user/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGallery } from './web/gallerySlice';
import { fetchNews } from './web/NewsSlice';
import { fetchPlacement } from './web/placementSlice';
import AdminLogin from './components/AdminLogin';
import Gallery from './components/user/Gallery';
import RegForm from './components/user/RegForm';
import { fetchContact } from './web/contactSlice';
import ContactReply from './components/admin/ContactReply';
import Placement from './components/user/Placement';
import EditPlacements from './components/admin/EditPlacements';
import EditGallery from './components/admin/EditGallery';
import AboutUs from './components/user/AboutUs';
import { fetchRegistration } from './web/adminSlice';
import './components/Table.css';
import './App.css';
import ChatBotBox from './components/user/ChatBotBox';

function App() {
  const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(fetchGallery());
  dispatch(fetchNews());
  dispatch(fetchPlacement());
  dispatch(fetchContact());
  dispatch(fetchRegistration());
 },[])
  return (
    <div className="App">
    {/* <AdminRoute/> */}
      
    <Routes>
        <Route path="/admin" element={
        <div className='content'>
          <Navbar />
        </div>
        }>
                <Route index element={<><Progress/> <Forms /> <Message /> <Footer /></>} />
                <Route path="studentTable" element={<StudentTable />} />
                <Route path="forms" element={<Forms />} />
                <Route path="message" element={<Message />} />
                <Route path="footer" element={<Footer />} /> 
                <Route path="new-query" element={<ContactReply />} /> 
                <Route path="edit-placement" element={<EditPlacements />} /> 
                <Route path="edit-gallery" element={<EditGallery />} /> 
                <Route path="all" element={<> <Footer /> </>} />
        {/*   <Route path="*" element={<NoPage />} />  ERROR PAGE Route*/}
        </Route>
      <Route path="/" element={<><NavbarUser/> <ChatBotBox/> </>}>
                   <Route index element={<><Slider/> <OurStory/> <RegisterAdvertise/>  <News1/>   <FooterUser/> </>} /> 
                  <Route path='login' element={<><AdminLogin/><FooterUser/></>}/>
                  <Route path='gallery' element={<><Gallery itemsPerPage={2}/><FooterUser/></>}/>
                  <Route path='register' element={<><RegForm/><FooterUser/></>}/>
                  <Route path='about' element={<><AboutUs/><FooterUser/></>}/>
                  <Route path='placement' element={<><Placement/><FooterUser/></>}/>
                  <Route path='contact' element={<><Contact/><FooterUser/></>}/>
                 <Route path="all" element={<> <Footer /> </>} /> 
                {/* //  <Route path="*" element={<NoPage />} />  ERROR PAGE Route  */}
        </Route> 
        


</Routes>
     
       
  
</div>
  );
}

export default App;
