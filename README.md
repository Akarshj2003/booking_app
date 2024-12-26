
# Booking App

A full-stack booking application built with Express, MongoDB, React, Redux, and Material UI (MUI). The app allows users to view movies, book tickets, manage their profiles, and for admins to manage movies and user accounts.

## Features

- **User Registration & Authentication**: Users can log in to their profile and make bookings.
- **Admin Dashboard**: Admins can manage movies, view bookings, and manage user accounts.
- **Movie Listings**: Users can browse movies and book tickets.
- **Booking System**: Users can make, view, and manage bookings.
- **Profile Management**: Both users and admins can manage their profiles.
- **Responsive UI**: Uses Material UI (MUI) for a modern and responsive design.

## Technologies Used

- **Frontend**: React, React Router, Redux, Axios, Material UI (MUI)
- **Backend**: Express.js
- **Database**: MongoDB (Mongoose for Object Data Modeling)
- **Authentication**: JWT (JSON Web Tokens)
- **CORS**: To handle cross-origin requests from the frontend.

## Installation

### Backend (Server Setup)

1. Clone the repository:

   ```bash
   git clone https://github.com/Akarshj2003/booking_app.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd booking_app/backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and add the following configuration:

   ```env
   db_password=your_mongodb_password
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The backend will be running on `http://localhost:5000`.

### Frontend (Client Setup)

1. Navigate to the frontend directory:

   ```bash
   cd booking_app/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Material UI (MUI) dependencies:

   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

4. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will be running on `http://localhost:3000`.

## Project Structure

### Backend

- **/routes**: Contains all the routes for user, admin, movie, and booking functionalities.
- **/models**: Contains Mongoose models for interacting with the MongoDB database.
- **/controllers**: Handles the logic for each route.
- **/middleware**: Contains middleware for authentication and other purposes.

### Frontend

- **/components**: React components that represent different sections of the app, including movies, bookings, user profiles, admin profiles, etc.
- **/store**: Redux store to manage the global state, including user and admin login states.
- **/Profile**: Contains profile-related components for both users and admins.
- **/styles**: MUI theme customizations and styling utilities.

## Usage

- **User Role**:
  - Users can browse movies and make bookings by logging in.
  - They can manage their profile and view their bookings.
  
- **Admin Role**:
  - Admins can add new movies to the platform, manage users, and view bookings.

## API Endpoints

- **User Routes**:
  - `/user`: Get user profile
  - `/user/login`: User login
  - `/user/signup`: User registration

- **Admin Routes**:
  - `/admin`: Admin login
  - `/admin/add`: Add a new movie (Admin Only)
  - `/admin/users`: View all users (Admin Only)

- **Movie Routes**:
  - `/movie`: Get a list of movies
  - `/movie/:id`: Get details of a specific movie

- **Booking Routes**:
  - `/booking`: Create a booking
  - `/booking/:id`: View or update booking details

## Contributing

Feel free to fork the repository, create a branch, and submit pull requests. Please follow the code style and ensure proper documentation for all contributions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
