import React, { Fragment, useEffect, useState } from 'react';
import {  getadmin } from '../api-helpers/api-helpers.js';
import { Box, Typography, Paper, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const AdminProfile = () => {
  const [Admin, setAdmin] = useState();

  useEffect(() => {
    getadmin()
      .then((res) => {console.log(res);setAdmin(res.admin)})
      .catch((err) => console.log(err));
  }, []);

 
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      padding={4}
    >
      <Paper
        elevation={4}
        sx={{
          width: '30%',
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#f9f9f9',
        }}
      >
        <Avatar sx={{ width: 100, height: 100, bgcolor: '#00d386' }}>
          <AccountBoxIcon sx={{ fontSize: '5rem', color: 'white' }} />
        </Avatar>
        {Admin ? (
          <Fragment>
            <Typography variant="subtitle1" color="textSecondary" marginTop={1}>
              Email:{Admin.email}
            </Typography>
          </Fragment>
        ) : (
          <Typography variant="h6" color="textSecondary" marginTop={2}>
            User data not available
          </Typography>
        )}
      </Paper>

      <Paper
        elevation={4}
        sx={{
          width: '65%',
          padding: 3,
          bgcolor: '#ffffff',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#00d386"
          textAlign="center"
          marginBottom={3}
        >
          Your Movies
        </Typography>
        {Admin && Admin.addedMovies.length > 0 ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                    Movie Title
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    Release Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Admin.addedMovies.map((movie, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{movie.title}</TableCell>
                    <TableCell align="right">
                      {new Date(movie.releaseDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="right">
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="h6" color="textSecondary" textAlign="center">
            No Movie available
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default AdminProfile;
