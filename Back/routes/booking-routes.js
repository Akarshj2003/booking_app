import express from 'express';
import { newbooking } from '../controllers/booking-controller.js';

const bookingRouter = express.Router();


bookingRouter.post('/',newbooking);


export default bookingRouter;