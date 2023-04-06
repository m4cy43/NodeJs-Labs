import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BasicCard() {
  return (
    <Card sx={{ width: '220px', margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          User
        </Typography>
        <Typography variant="h5" component="div">
          <span id='user-name'>Борис</span>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="delete">
            <DeleteIcon fontSize='small' />
        </IconButton>
      </CardActions>
    </Card>
  );
}