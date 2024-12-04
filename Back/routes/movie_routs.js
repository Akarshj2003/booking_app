import express from 'express';
import { addMovie } from '../controllers/movie-controllers.js';
const movieRouter = express.Router();

movieRouter.post("/",addMovie);

export default movieRouter;