import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { blue } from '@mui/material/colors';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
enum gender {
  "Male",
  "Female",
}

interface user{
  firstname: string,
  lastname: string,
  email: string,
  mobile: string,
  image: string,
  bookmarkedContact: string[],
  age: number,
  gender: gender,
  isEmployed: boolean,
  employer: string,
  occupation: string,
  maritalStatus: boolean,
  criminalBackground: boolean
}

export function NearbyCard({ users }: {users:  user[]}) {

  const date = new Date();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const today = date.getDate().toString() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear().toString();

  const criminals = users.filter(user => user.criminalBackground);

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
        alt="Nearby Crowd"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          We could detect {users.length} person(s) in the vicinity of the user.
        </Typography>
        <Typography variant='body2'>
          We could detect <span className='text-2xl font-bold text-red-500'>{criminals.length}</span> criminal(s) in the vicinity of the user.
        </Typography>
        <div className='pt-4'>
          {criminals.length > 0 && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">Criminals List</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {criminals.map((user, index) => (
                  <div key={index}>
                    <Typography variant='body2'>
                      <strong>{user.firstname} {user.lastname}</strong> - Age: {user.age}, Contact: {user.mobile}
                    </Typography>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          )}
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant='contained'>
          <IconButton aria-label="chat">
            <AutoAwesomeIcon />
          </IconButton>
          Get AI Help
        </Button>
      </CardActions>
    </Card>
  );
}
