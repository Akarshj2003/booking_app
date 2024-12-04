import { decrypt } from 'dotenv';
import jwt from 'jsonwebtoken';


export const addMovie = async(req,res,next)=>{
const getToken =req.headers.authorization.split(" ")[1];
 if(!getToken && getToken.trim()===""){
    return res.status(404).json({message:"Token Not found"});
    }
    let adminId;


    jwt.verify(getToken,process.env.SECRET_KEY,(err,decrypted)=>{
        if(err){
            return res.status(400).json({message:`${err.message}`});
        }else{
            adminId=decrypted.id;
            return;
        }
    });


    // cerate new move
};