import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MovieItem from './Movies/MovieItem.js';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../api-helpers/api-helpers.js';

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        getAllMovies()
        .then((data)=>setMovies(data.movies))
        .catch((err)=>console.log(err));
        
    },[]);
    console.log(movies)
  return <Box width={'100%'} height='100%' margin="auto" marginTop={2}>
    <Box margin={'auto'} width={'80%'} height={'40vh'} padding={2}>
        <img 
         src='https://i.ytimg.com/vi/5IA7QjEheck/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBdzfK5YkHBRxiImi_Bhi5hTzAQ9g'
         alt='Latest Movie'
         width={'50%'}
         height={'100%'}
         />
         <img 
         src='https://c4.wallpaperflare.com/wallpaper/807/7/801/x-men-days-of-future-past-poster-xmen-movie-wallpaper-preview.jpg'
         alt='Latest Movie'
         width={'50%'}
         height={'100%'}
         />
    </Box>
    <Box padding={5} margin={"auto"}>
        <Typography variant='h4' textAlign={"center"}>Latest Releases</Typography>
    </Box>
    <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
        {movies && movies.slice(0,4).map((movie,index)=>(<MovieItem id={movie.id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} key={index}/>))}
    </Box>
    <Box display={"flex"} padding={5} margin={"auto"}>
        <Button LinkComponent={Link} to="/movies" variant='outlined'sx={{margin:"auto",color:"#2b2d42"}}>
            View All Movies
        </Button>
    </Box>
  </Box>
};

export default HomePage;
