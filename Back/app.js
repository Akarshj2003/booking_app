import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie_routs.js";
import bookingRouter from "./routes/booking-routes.js";
import cors from 'cors';

const app = express();
dotenv.config();


app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/movie",movieRouter);
app.use("/booking",bookingRouter);


mongoose.connect(
    `mongodb+srv://adminaka:${process.env.db_password}@cluster0.zq975.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
).then(()=>
    app.listen(5000,()=>
        console.log(`connected to datbase ${5000}`)
    )
)
.catch((e)=>console.log(e));
