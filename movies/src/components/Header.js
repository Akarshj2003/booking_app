import React, { useEffect, useState } from "react";
import {AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar} from "@mui/material";
import TheatersIcon from '@mui/icons-material/Theaters';
import { getAllMovies } from "../api-helpers/api-helpers.js";
import { Link } from "react-router-dom";
const Header = () => {
    const [value,setValue] = useState(0);
    const[movies,setMovies]=useState([]);
    useEffect(() => {
        getAllMovies().then((data)=>setMovies(data.movies))
        .catch((err)=>console.log(err));
    }, []);
    return <AppBar sx={{bgcolor:"#2b2d42"}}>
        <Toolbar>
            <Box width={'20%'}>
              <TheatersIcon></TheatersIcon> 
            </Box>
            <Box width={'30%'} margin={"auto"}>
              <Autocomplete
                    disablePortal
                    options={movies && movies.map((option)=>option.title)}
                    renderInput={(params) => <TextField sx={{input:{color:"white"}}} variant="standard" {...params} placeholder="Serch Movie" />}
                />
              </Box>
              <Box display={'flex'}>
                <Tabs textColor="inherit" indicatorColor="secondary" 
                value={value} 
                onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={Link} to="/moves" label="Movies"/>
                    <Tab LinkComponent={Link} to="/admin" label="Admin"/>
                    <Tab LinkComponent={Link} to="/auth" label="Auth"/>
                </Tabs>
              </Box>
        </Toolbar>
    </AppBar>;
};

export default Header;