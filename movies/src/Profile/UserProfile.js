import React, { Fragment, useEffect, useState } from 'react';
import { getUserBookings } from '../api-helpers/api-helpers.js';
import { Box, Typography, Paper, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const UserProfile = () => {
  const [bookings, setBookings] = useState();

  useEffect(() => {
    getUserBookings()
      .then((res) => setBookings(res.bookings))
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
      {/* User Data Section */}
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
        {bookings && bookings.length > 0 ? (
          <Fragment>
            <Typography variant="h5" fontWeight="bold" marginTop={2}>
              {bookings[0].user.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" marginTop={1}>
              {bookings[0].user.email}
            </Typography>
          </Fragment>
        ) : (
          <Typography variant="h6" color="textSecondary" marginTop={2}>
            User data not available
          </Typography>
        )}
      </Paper>

      {/* Booking Data Section */}
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
          Your Bookings
        </Typography>
        {bookings && bookings.length > 0 ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                    Movie Title
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Seat Number
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{booking.movie.title}</TableCell>
                    <TableCell align="center">{booking.seatNumber}</TableCell>
                    <TableCell align="right">
                      {new Date(booking.date).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="h6" color="textSecondary" textAlign="center">
            No bookings available
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default UserProfile;
