import express from 'express';
import multer from 'multer';
import { galleryImageDelete, galleryImageUpload, galleryList, placementImageUpload, placementDelete, newsUpdate, newsDelete, deleteRegistration, verifyStudent, newsList, placementList, registrationList, contactList, reply} from '../controller/adminController.js';
const router = express.Router();
const galleryUpload = multer({dest:'public/images'});
const placementUpload = multer({dest:'public/placement'});
const newsUpload = multer({dest:'public/news'});

//image list
router.get('/gallery-list',galleryList)

//image upload
router.post('/gallery-upload',galleryUpload.single('galleryImage'),galleryImageUpload);

//image delete 
router.get('/gallery-delete/:id',galleryImageDelete);
export default router;

//placement list
router.get('/placement-list',placementList);

//placement upload
router.post('/placement-upload',placementUpload.single('placementImage'),placementImageUpload);

//placment delete
router.get('/placement-delete/:id',placementDelete)

//news list
router.get('/news-list',newsList);

//news update
router.post('/news-update',newsUpdate)

//news delete
router.get('/news-delete/:id',newsDelete);

//delete registration
router.get('/registration-delete/:id',deleteRegistration)

//verify Student
router.get('/verify-student/:id',verifyStudent);

//registration list
router.get('/registration-list',registrationList);

//contact list
router.get('/contact-list',contactList)

//reply
router.post('/reply',reply);


// //verify student
// router.get('/admin_route/students/verify/:id',auth.isLogin,adminController.verifyStudent

