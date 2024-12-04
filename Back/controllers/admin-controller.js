import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';


export const addAdmin = async (req,res,next)=>{
    const{email,password} = req.body;
    if(!email && email.trim()==="" && !password && password.trim()==="" ){
        return res.status(422).json({message:"invalid Input"});
    }
    let existingAdmin;
    try{
        existingAdmin = await Admin.findOne({email});
    }catch(err){
        return console.log(err);
    }
    if(existingAdmin){
        return res.status(400).json({message:"admin already exist"});
    }
    let admin;
    const hashedPassword = bcrypt.hashSync(password);
    try{
        admin=new Admin({email,password:hashedPassword});
        admin =await admin.save();
    }catch(err){
        return console.log(err)
    }
    if(!admin){
        return res.status(500).json({message:"unable to store admin"});
    }
    return res.status(201).json({admin});
};

export const adminlogin = async (req,res,next)=>{
    const {email,password}=req.body;

    
    if(!email && email.trim()==="" && !password && password.trim()==="" ){
        return res.status(422).json({message:"invalid Input"});
    }
    let existingAdmin;
    try{
        existingAdmin = await Admin.findOne({email});
    }catch(err){
        return console.log(err);
    }
    if(!existingAdmin){
        return res.status(400).json({message:"admin do not exist"});
    }
    const correct=bcrypt.compareSync(password,existingAdmin.password);
    if(!correct){
        return res.status(400).json({message:"Incorrct Password"});
    }
    const token= jwt.sign({id:existingAdmin._id},process.env.SECRET_KEY,{expiresIn:"7d",});

    return res.status(200).json({message:"login succesfull",token,id:existingAdmin._id});


};

export const getAlladmin = async(req,res,next)=>{
    let admins;
    try{
        admins= await Admin.find();
    }
    catch(err){
        return next(err);
    }
    if(!admins){
        return res.status(500).json({massage:"unexpeted Error Occured"})
    }
    return res.status(200).json({admins});
};