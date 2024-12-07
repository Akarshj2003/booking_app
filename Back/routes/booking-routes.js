import express from 'express';
import { delBooking, getAllBooking, getBooking, newbooking } from '../controllers/booking-controller.js';

const bookingRouter = express.Router();


bookingRouter.post('/',newbooking);
bookingRouter.get('/:id',getBooking);
bookingRouter.get('/',getAllBooking);
bookingRouter.delete('/:id',delBooking);

export default bookingRouter;