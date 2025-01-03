import Booking from "../models/Booking.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";


export const getAllUsers = async(req,res,next)=>{
let users;
try{
    users= await User.find();
}
catch(err){
    return next(err);
}
if(!users){
    return res.status(500).json({massage:"unexpeted Error Occured"})
}
return res.status(200).json({users});
};


export const signup = async(req,res,next)=>{
const{name,email,password}=req.body;
if(!name && name.trim()==="" && !email && email.trim()==="" && !password && password.trim()===""){
    return res.status(422).json({message:"Invalid Input"});
}
const hashedPassword = bcrypt.hashSync(password)
let user;
try{
user=new User({name, email, password: hashedPassword,});
user=await user.save();
}catch(err){
return console.log(err);
}
if(!user){
    return res.status(500).json({message:"Unexepted Error"});
}
return res.status(201).json({id:user._id});
};


export const updateUser= async(req,res,next)=>{
    const id = req.params.id;
    const{name,email,password}=req.body;
if(!name && name.trim()==="" && !email && email.trim()==="" && !password && password.trim()===""){
    return res.status(422).json({message:"Invalid Input"});
}
const hashedPassword = bcrypt.hashSync(password)
let user;
try{
    user =await User.findByIdAndUpdate(id, {name,email,password: hashedPassword,});
}catch(err){
    return console.log(err);
}
if(!user){
    return res.status(500).json({message:"Something went wrong"});
}
res.status(200).json({message:"updated sucessfully"});

};



export const deleteUser =async(req,res,next)=>{
    const id = req.params.id;
    let user;
    try{
        user= await User.findByIdAndDelete(id);
    }catch(err){
        return console.lo(err);
    }
    if(!user){
        return res.status(500).json({message:"something went wrong"});
    }
    return res.status(200).json({message:"Delete sucessfully"});

};

export const login =async(req,res,next)=>{
    const{email,password}=req.body;
    if(!email && email.trim()==="" && !password && password.trim()===""){
        return res.status(422).json({message:"Invalid Input"});
    }
    let existingUser;
    try{
        existingUser=await User.findOne({email});
    }catch(err){
        return console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message:"Unable tto find the user"});
    }

    const passCorect= bcrypt.compareSync(password,existingUser.password);
    if(!passCorect){
        return res.status(400).json({message:"Incorect password"});
    }
    return res.status(200).json({message:"login Sucessfull",id:existingUser._id});
};
export const getBookingOfUser = async (req,res,next)=>{
    const id =req.params.id;
    let bookings;
    try{
        bookings= await Booking.find({user:id}).populate("user").populate("movie");
    }
    catch(err){
        console.log(err);
    }
    if(!bookings){
        return res.status(500).json({message:"unable to find bookins"});
    }
    return res.status(200).json({bookings});
};