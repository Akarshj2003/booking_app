import React, { Fragment, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { getMovieDetails, newBooking } from '../../api-helpers/api-helpers';
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
const Booking = () => {
    const id = useParams().id;
    const [movie, setMovie] = useState();
    const [inputs, setinputs] = useState({seatNumber:"",date:""})
    console.log("id",id);
    useEffect(()=>{
        getMovieDetails(id).then((res)=>setMovie(res.movie)).catch((err)=>console.log(err));
    },[id]);
    console.log(movie);
    const handleChange =(e)=>{
        setinputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }));

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
        newBooking({...inputs,movie:movie._id}).then((res)=>console.log(res)).catch(err=>console.log(err))
    }
  return (
    <div>
    {movie && <Fragment>
        <Typography 
        padding={3}
        fontFamily={"fantasy"}
        variant='h4'
        textAlign={"center"}
        >
            Book Tiket Of the Movie: {movie.title}
        </Typography>
        <Box
        display={"flex"}
        justifyContent={"center"}
        >
            <Box
            display={"flex"}
            justifyContent={"column"}
            flexDirection={"column"}
            padding={3}
            width={"50%"}
            marginRight={"auto"}
            >
                <img width={"80%"} src={movie.posterUrl} alt={movie.title} />
              
            </Box>
            <Box
            width={"50%"}
            padding={3}
            >
                 <Box
               width={"80%"}
               marginTop={3}
               padding={2}
               >
                <Typography
                fontWeight={'bold'} marginTop={1}>
                     Description:
                </Typography>
                <Typography
                paddingTop={2}>
                    {movie.description}
                </Typography>
                <Typography
                fontWeight={'bold'} marginTop={1}>
                    Starrer:
                    {movie.actors.map((actor)=>"  "+actor+" ")}
                </Typography>
                <Typography
                fontWeight={'bold'} marginTop={1}>
                    Release Date:
                    {new Date (movie.releaseDate).toDateString()}
                </Typography>
                
               </Box>
                <form onSubmit={handleSubmit}>
                    <Box
                    padding={5}
                    margin={"auto"}
                    display={"flex"}
                    flexDirection={"column"}
                    bgcolor={"#93a193"}
                    >
                        <FormLabel>Seat Number</FormLabel>
                        <TextField value={inputs.seatNumber} onChange={handleChange} name="seatNumber" type={"text"} margin="normal" variant='standard'/>
                        <FormLabel>Booking Data</FormLabel>
                        <TextField value={inputs.date} onChange={handleChange} name="date" type={"date"} margin="normal" variant='standard'/>
                        <Button type="submit" sx={{mt:3}}>book</Button>
                    </Box>
                </form>

            </Box>

        </Box>
    </Fragment>}
    </div>
  )
}

export default Booking