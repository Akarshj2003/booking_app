import React, { useEffect, useState } from 'react';
import {Box, Typography} from '@mui/material';
import { getAllMovies } from '../../api-helpers/api-helpers.js';
import MovieItem from './MovieItem.js';

const Movies = () => {
  const [movies, setmovies] = useState();
  useEffect(()=>{
    getAllMovies()
    .then((data)=>setmovies(data.movies))
    .catch(err=>console.log(err));
  },[])
  return (
  <Box margin={"auto"} marginTop={4}>
    <Typography 
    margin={"auto"}
    variant='h4'
     padding={2}
      bgcolor={"#900C3F"}
      width={"40%"} 
      color='white' 
      textAlign={"center"}
      sx={{borderRadius:"30px"}}
      >
        All Movies 
        
      </Typography>
      <Box 
      width={"100%"}
      margin={"auto"} 
      marginTop={5}
      display={"flex"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      bgcolor={"#656867"}
      >
        {movies && 
        movies.map((movie,index)=>
        <MovieItem 
        key={index} 
        id={movie.id} 
        posterUrl={movie.posterUrl} 
        releaseDate={movie.releaseDate}
        title={movie.title}
        /> )}

      </Box>
  </Box>

 );
};

export default Movies;