import Booking from "../models/Booking.js";


export const newbooking = async(req,res,nex)=>{
    const{movie,date,seatNumber,user} =req.body;
    let booking;
    try{
        booking = new Booking({movie, date : new Date(`${date}`),seatNumber,user});
        booking=await booking.save();
    }catch(err){
        console.log(err);
    }
    if(!booking){
        return res.status(500).json({message:"unable to book the movie"});
    }
    return res.status(201).json({message:"Movie booked sucsesfully",booking});
};