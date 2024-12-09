import React, { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Dialog, FormLabel, TextField, Typography, Button, Stack, Paper, IconButton } from '@mui/material';

const AuthForm = () => {
    const [isSignup, setisSignup] = useState(false);
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
        <form>
          <Stack spacing={3}>
          {isSignup && <Box>
              <FormLabel sx={{ fontWeight: "bold", color: "#333" }}>Name</FormLabel>
              <TextField
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
            <Button
            onClick={()=>setisSignup(!isSignup)}
            fullWidth
              sx={{
                borderRadius:3,
              }}
            >
              Switch To {isSignup ? "login":"signup" }
            </Button>
          </Stack>
        </form>
      </Paper>
    </Dialog>
  );
};

export default AuthForm;
