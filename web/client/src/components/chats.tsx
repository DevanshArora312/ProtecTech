import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { blue, blueGrey } from '@mui/material/colors';
import axios from 'axios';

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

const ChatModal = ({ user_id }: { user_id: string }) => {
  const [open, setOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(chatMessages);
  useEffect(() => {
    if (open) {
      fetchChatMessages();
    }
  }, [open]);

  const fetchChatMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:4000/api/v1/messages/${user_id}`); 
      const messages = response.data.data; 
      setChatMessages(messages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      setLoading(false);
    }
  };

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
          {loading ? (
            <Typography variant="body1" component="div">
              Loading messages...
            </Typography>
          ) : (
            <Box sx={contentStyle}>
              {chatMessages.length > 0 ? (
                chatMessages.map((message, index) => (
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
                ))
              ) : (
                <Typography variant="body1" component="div">
                  No messages found.
                </Typography>
              )}
            </Box>
          )}
          <Button onClick={handleClose} variant="contained" sx={{ bgcolor: blueGrey[700], marginTop: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ChatModal;
