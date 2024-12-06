import express from 'express';
import { getBooking, newbooking } from '../controllers/booking-controller.js';

const bookingRouter = express.Router();


bookingRouter.post('/',newbooking);
bookingRouter.get('/:id',getBooking);


export default bookingRouter;