import mongoose from "mongoose";
import Booking from "../models/Booking.js";
import Movie from "../models/Movie.js";
import User from "../models/User.js";


export const newbooking = async(req,res,nex)=>{
    const{movie,date,seatNumber,user} =req.body;
    let exeMovie;
    let exeUser;
    try{
        exeMovie =await Movie.findById(movie);
        exeUser = await User.findById(user);
    }catch(err){
        return console.log(err)
    }
    if (!exeMovie){
        return res.status(404).json({message:"Movie not found"});
    }
    if (!exeUser){
        return res.status(404).json({message:"Invalid User Id"});
    }

    let booking;
    try{
        booking = new Booking({movie, date : new Date(`${date}`),seatNumber,user});
        const session =await mongoose.startSession();
        session.startTransaction();
        exeUser.bookings.push(booking);
        exeMovie.bookings.push(booking);
        await exeUser.save({session});
        await exeMovie.save({session});
        await booking.save({session});
        session.commitTransaction();
    }catch(err){
        return console.log(err);
    }
    if(!booking){
        return res.status(500).json({message:"unable to book the movie"});
    }
    return res.status(201).json({message:"Movie booked sucsesfully",booking});
};

export const getBooking = async(req,res,next)=>{
    const id = req.params.id;
    let booking;
    try{
        booking= await Booking.findById(id);
    }catch(err){
        return console.log(err);
    }
    if(!booking){
        return res.status(500).json({message:"unexpeted error"});
    }
    res.status(200).json({message:"Booking of the Movie",booking});

};
export const getAllBooking = async(req,res,next)=>{
    let booking;
    try{
        booking= await Booking.find();
    }catch(err){
        return console.log(err);
    }
    if(!booking){
        return res.status(500).json({message:"unexpeted error"});
    }
    res.status(200).json({message:"Bookings of the All Movie",booking});

};

export const delBooking =async(req,res,next)=>{
    const id= req.params.id;
    let booking;
    try{
        booking=await Booking.findByIdAndDelete(id).populate("user movie");
        console.log(booking);
        const session =await mongoose.startSession();
        session.startTransaction();
        await booking.user.bookings.pull(booking);
        await booking.movie.bookings.pull(booking);
        await booking.movie.save({session});
        await booking.user.save({session});
        session.commitTransaction();
    }catch(err){
        return console.log(err);
    }
    if(!booking){
        return res.status(500).json({message:"No Booking to Deleate"});
    }
    res.status(200).json({message:"Booking of the Movie Deleated",booking});

};
