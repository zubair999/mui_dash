import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3BdgvUwmK1GNMPQX3b0fERSz9dTACwMCb0jXvEE3UA&usqp=CAU&ec=48600113"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SS TON 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The SS Ton Professional Cricket bat is made from superior quality English Willow which is designed to give you performance, comfort and style. SS Ton Professional English Willow Cricket Bat is developed with super spine concept. Super spine is the concept which is developed on top of the traditional bat spine.

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Submit</Button>
        <Button size="small">Cancle</Button>
      </CardActions>
    </Card>
  );
}