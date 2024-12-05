import { decrypt } from 'dotenv';
import jwt from 'jsonwebtoken';
import Movie from '../models/Movie.js';


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


    const {title,description,actors,releaseDate,posterUrl,featured} = req.body;
    if(!title && title.trim()==="" && !description && description.trim()==="" &&  !posterUrl && posterUrl.trim()===""  ){
        return res.status(422).json({message:"Invalid Input"});
    }
    let movie
    try{
        movie = new Movie({title,description,actors,relaseDate:new Date(`${releaseDate}`),posterUrl,featured,admin:adminId});
        movie = await movie.save();
    }catch(err){
        console.log(err);
    }
    if(!movie){
        return res.status(500).json({message:"Request Failed"});
    }
    return res.status(201).json({message:"saved succesfull  ",movie});

};




export const seeAllmovies = async(req,res,next)=>{
    let movies;
    try{
        movies= await Movie.find();
    }
    catch(err){
        return next(err);
    }
    if(!movies){
        return res.status(500).json({massage:"unexpeted Error Occured"})
    }
    return res.status(200).json({movies});
};


export const getMovie = async(req,res,next)=>{
    const id = req.params.id;
    let movie;
    try{
        movie= await Movie.findById(id);
    }
    catch(err){
        return console.log(err);
    }
    if(!movie){
        return res.status(404).json({massage:"Invalid Id"})
    }
    return res.status(200).json({movie});
};