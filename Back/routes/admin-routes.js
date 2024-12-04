import express from 'express';
import { addAdmin, adminlogin, getAlladmin } from '../controllers/admin-controller.js';


const adminRouter =express.Router();
adminRouter.get("/all",getAlladmin);
adminRouter.post("/signup",addAdmin);
adminRouter.post("/login",adminlogin);

export default adminRouter;