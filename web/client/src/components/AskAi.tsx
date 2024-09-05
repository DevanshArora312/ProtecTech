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
import ChatIcon from '@mui/icons-material/Chat';
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

export function AskAiCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        image="https://via.placeholder.com/500x194.png?text=Ask+AI" 
        alt="Ask AI"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The AI continuously scans recent CCTV footage to identify unusual activities or behaviors, helping officers stay ahead of potential security threats.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant='contained'>
            <IconButton aria-label="chat">
                <AutoAwesomeIcon />
            </IconButton>
            Get Ai Help
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className='text-xs text-slate-600 p-4'>
          <Typography sx={{ marginBottom: 2 }}>Key Features:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Real-Time Anomaly Detection: The AI continuously scans recent CCTV footage to identify unusual activities or behaviors, helping officers stay ahead of potential security threats.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Detailed Reports: Get comprehensive reports on detected anomalies, including timestamps, locations, and types of incidents, to aid in investigations and decision-making.
          </Typography>
        </div>
      </Collapse>
    </Card>
  );
}
