import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";

const app = express();
dotenv.config();



app.use(express.json());
app.use("/user",userRouter);



mongoose.connect(
    `mongodb+srv://adminaka:${process.env.db_password}@cluster0.zq975.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
).then(()=>
    app.listen(5000,()=>
        console.log(`connected to datbase ${5000}`)
    )
)
.catch((e)=>console.log(e));
