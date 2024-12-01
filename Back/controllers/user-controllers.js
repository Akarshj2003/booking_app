import user from "../models/User.js";

export const getAllUsers =async(req,res,next)=>{
let users;
try{
    users= await user.find();
}
catch(err){
    return next(err);
}
if(!users){
    return res.status(500).json({massage:"unexpeted Error Occured"})
}
return res.status(200).json({users});
};