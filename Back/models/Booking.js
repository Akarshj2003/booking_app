import mongoose from 'mongoose';

const booking =new mongoose.Schema({
    movie:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    seatNumber:{
        type:String,
        required:true,
    },
    user:{
        type:String,
        required:true,
    },

});
export default mongoose.model("Booking",booking);