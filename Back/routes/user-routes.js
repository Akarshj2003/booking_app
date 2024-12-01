import express from "express";
import { getAllUsers } from "../controllers/user-controllers.js";

const userRouter =express.Router();

userRouter.get("/",getAllUsers);

export default userRouter;