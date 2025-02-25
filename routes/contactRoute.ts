import express from 'express';
import { ContactUs } from '../controllers/contactController';


const contactRoute = express.Router();

contactRoute.post('/contact', ContactUs);

export default contactRoute;