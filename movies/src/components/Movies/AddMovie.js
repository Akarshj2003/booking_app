import { Box, Button, Checkbox, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { addMovie } from '../../api-helpers/api-helpers'

const AddMovie = () => {
    const [actors, setactors] = useState([])
    const [actor, setactor] = useState("")
    const [inputs, setinputs] = useState(
        {
            title:"",
            description:"",
            posterUrl:"",
            releaseDate:"",
            featured:false,
        }
    
    );
    const handleChange =(e)=>{
        setinputs((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs,actors);
        addMovie({...inputs,actors:actors}).then(res=>console.log(res)).catch(err=>console.log(err));
    }
    const labelPage ={
        mt:1,
        mb:1,
    };
  return (
    <div>
        <form onSubmit={HandleSubmit}>
            <Box 
            width={"50%"} 
            padding={10}
             margin="auto" 
             display={"flex"} 
             flexDirection={"column"}
             boxShadow={"10px 10px 20px #ccc"}>
                <Typography 
                textAlign={"center"}
                variant='h5'
                fontFamily={"vardana"}
                marginBottom={6}
                >
                    Add New Movie
                </Typography>
                <FormLabel sx={{labelPage}}>Title</FormLabel>
                <TextField value={inputs.title} onChange={handleChange} name="title" variant='standard' margin='normal' />
                <FormLabel sx={{labelPage}}>Description</FormLabel>
                <TextField value={inputs.description} onChange={handleChange}name="description" variant='standard' margin='normal' />
                <FormLabel sx={{labelPage}}>Release Date</FormLabel>
                <TextField type="date" value={inputs.releaseDate} onChange={handleChange} name='releaseDate' variant='standard' margin='normal' />
                <FormLabel sx={{labelPage}}>Poster URL</FormLabel>
                <TextField value={inputs.posterUrl} onChange={handleChange} name="posterUrl" variant='standard' margin='normal' />
                <FormLabel sx={{labelPage}}>Actors</FormLabel>
                <Box display={"flex"} > 
                    <TextField 
                    value={actor}
                    onChange={(e)=>setactor(e.target.value)}
                    name="actor" variant='standard' margin='normal' />
                    <Button
                    onClick={()=>
                    {setactors([...actors,actor]);
                    setactor(" ")
                    }
                }
                >Add</Button>
                </Box>
                <FormLabel sx={{labelPage}}>Featured</FormLabel>
                <Checkbox 
                name='featured' 
                checked={Boolean(inputs.featured)} 
                onChange={(e)=>setinputs((prevState)=>({...prevState,featured:e.target.checked,}))} 
                sx={{mr:"auto"}}/>
                <Button type="submit" sx={{bgcolor:"#2b2d42", width:"50%",margin:"auto",":hover":{bgcolor:"#b7bfb7"}}} variant='contained'>Add Movie</Button>
            </Box>
        </form>
    </div>
  )
}

export default AddMovie