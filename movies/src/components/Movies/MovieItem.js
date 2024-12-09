import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';

const MovieItem = ({title,releaseDate,posterUrl,id}) => {
  return(
  <Card 
  sx={{
     width: 260, 
     height: 360, 
     borderRadius:5,
     margin:2,
     ":hover":{ 
        boxShadow:'10px 10px 20px #ccc',
        }, 
        }}
    >
 <img height={'62%'} width={"100%"} src={posterUrl} alt={title} />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {title}
    </Typography>
    <Typography variant="body2" color ='text.secondary'>
      {new Date(releaseDate).toDateString()}
    </Typography>
  </CardContent>
  <CardActions>
    <Button sx={{margin:"auto"}} size="small">Book</Button>
  </CardActions>
</Card>
);
};

export default MovieItem;