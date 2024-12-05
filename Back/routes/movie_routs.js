import express from 'express';
import { addMovie, getMovie, seeAllmovies } from '../controllers/movie-controllers.js';
const movieRouter = express.Router();

movieRouter.post("/",addMovie);
movieRouter.get("/",seeAllmovies);
movieRouter.get("/:id",getMovie);

export default movieRouter;