import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from '@mui/material';
import {Button} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export function NearbyCard() {
  const date = new Date();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const today = date.getDate().toString() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear().toString();

  return (
    <Card sx={{ width: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="ask-ai">
            AI
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ask AI"
        subheader={today}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://via.placeholder.com/500x194.png?text=Nearby+Crowd" 
        alt="Ask AI"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            We could detect 35 persons in the vicinity of the user.
        </Typography>
        <Typography variant='body2'>
            We could detect <span className='text-2xl font-bold text-red-500'>2</span> criminals in the vicinity of the user.
        </Typography>
        <div>
            { /* map over the criminals */ }
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant='contained'>
            <IconButton aria-label="chat">
                <AutoAwesomeIcon />
            </IconButton>
            Get Ai Help
        </Button>
      </CardActions>
    </Card>
  );
}
