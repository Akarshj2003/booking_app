import React, { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Dialog, FormLabel, TextField, Typography, Button, Stack, Paper, IconButton } from '@mui/material';

const AuthForm = ({onSubmit, isAdmin}) => {
  const [Inputs, setInputs] = useState({
    name:"",
    email:"",
    password:"",
  })
    const [isSignup, setisSignup] = useState(false);
    const handleChange =(e)=>{
      setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
      }))
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      onSubmit({Inputs,signup: isAdmin ? false : isSignup });
    }
  return (
    <Dialog PaperProps={{style:{borderRadius:20}}} open={true}>
        <Box sx={{ml:"auto",padding:1}}>
            <IconButton>
                <CloseRoundedIcon/>
            </IconButton>
        </Box>
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 3,
          width: 400,
          margin: "auto",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            marginBottom: 3,
            fontWeight: "bold",
            color: "#900C3F",
          }}
        >
          {isSignup ? "Signup":"Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
          {!isAdmin && isSignup && <Box>
              <FormLabel sx={{ fontWeight: "bold", color: "#333" }}>Name</FormLabel>
              <TextField
              value={Inputs.name}
              onChange={handleChange}
                type="name"
                name="name"
                fullWidth
                variant="outlined"
                size="small"
                sx={{ marginTop: 1 }}
              />
            </Box>}
            <Box>
              <FormLabel sx={{ fontWeight: "bold", color: "#333" }}>Email</FormLabel>
              <TextField
                value={Inputs.email}
                onChange={handleChange}
              
                type="email"
                name="email"
                fullWidth
                variant="outlined"
                size="small"
                sx={{ marginTop: 1 }}
              />
            </Box>
            <Box>
              <FormLabel sx={{ fontWeight: "bold", color: "#333" }}>Password</FormLabel>
              <TextField
                value={Inputs.password}
                onChange={handleChange}
                type="password"
                name="password"
                fullWidth
                variant="outlined"
                size="small"
                sx={{ marginTop: 1 }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                borderRadius:3,
                backgroundColor: "#900C3F",
                color: "white",
                "&:hover": {
                  backgroundColor: "#740A2F",
                },
              }}
            >
              {isSignup ? "Signup":"login"}
            </Button>
            {!isAdmin && 
            <Button
            onClick={()=>setisSignup(!isSignup)}
            fullWidth
              sx={{
                borderRadius:3,
              }}
            >
              Go To {isSignup ? "login":"signup" }
            </Button>}
          </Stack>
        </form>
      </Paper>
    </Dialog>
  );
};

export default AuthForm;
