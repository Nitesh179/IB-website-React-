import express from 'express';
import multer from 'multer';
import { contact, registration } from '../controller/mainController.js';
const router = express.Router();
const docsUpload = multer({dest:'public/documents'});
router.post('/registration',docsUpload.array('docs'),registration);
router.post('/contact',contact);
export default router;