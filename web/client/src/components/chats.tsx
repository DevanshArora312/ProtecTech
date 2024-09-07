import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { blue, blueGrey } from '@mui/material/colors';


interface ChatMessage {
  user: string;
  created_at: string;
  text: string;
  longitude: number;
  latitude: number;
  officerOriginated: boolean;
}

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh', 
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflow: 'hidden',
};

const contentStyle = {
  maxHeight: 'calc(80vh - 96px)', 
  overflowY: 'auto', 
};

const initialChatMessages: ChatMessage[] = [
  {
    user: 'Alice',
    created_at: new Date().toISOString(),
    text: 'Hello, this is Alice.',
    longitude: -122.084,
    latitude: 37.4219999,
    officerOriginated: false
  },
  {
    user: 'Bob',
    created_at: new Date().toISOString(),
    text: 'Hi, this is Bob. How can I help?',
    longitude: -73.935242,
    latitude: 40.730610,
    officerOriginated: true
  },
  {
    user: 'Charlie',
    created_at: new Date().toISOString(),
    text: 'Just checking in!',
    longitude: -0.127758,
    latitude: 51.507351,
    officerOriginated: false
  },
  {
    user: 'Diana',
    created_at: new Date().toISOString(),
    text: 'Any updates on the situation?',
    longitude: 139.691711,
    latitude: 35.689487,
    officerOriginated: true
  }
];

const ChatModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialChatMessages);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{ bgcolor: blue[900] }}>
        Show Messages
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
            Chat Messages
          </Typography>
          <Box sx={contentStyle}>
            {chatMessages.map((message, index) => (
              <Card key={index} sx={{ marginBottom: 2, backgroundColor: blueGrey[100] }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    User: {message.user}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(message.created_at).toLocaleString()}
                  </Typography>
                  <Typography variant="body1" component="div" sx={{ marginTop: 1 }}>
                    {message.text}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    Location: Latitude {message.latitude}, Longitude {message.longitude}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    Originated by Officer: {message.officerOriginated ? 'Yes' : 'No'}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Button onClick={handleClose} variant="contained" sx={{ bgcolor: blueGrey[700], marginTop: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ChatModal;

