import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { TrackDTO } from '../track.dto'

interface Props  {
        data:TrackDTO;
}

const Track = ({data}: Props) => {
  return <Card sx={{ minWidth: 275 }}>
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {data.login}
      
    </Typography>
    <Typography variant="h5" component="div">
     {data.name}
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
     Public repos:{data.public_repos}
    </Typography>
    <Typography variant="body2">
     
     
      Total repose:{data.repository}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small" variant="contained" color="primary"> Edit</Button>
    <Button size="small" variant="contained"  color="secondary"> Delete</Button>

  </CardActions>
</Card>
}

export default Track