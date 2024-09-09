import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { blueGrey } from '@mui/material/colors';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FullDuplexConnection, socket } from '../socket';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store' 
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

interface Data {
  sosId: string,
  firstname: string,
  lastname: string,
  username: string,
  mobile: string,
  time: string,
  longitude: string,
  latitude: string,
  gender: string,
  occupation: string,
  maritalStatus: boolean,
  image: string,
  employer: string,
  criminalBackground: boolean,
  isEmployed: boolean,
  bookmarkedContacts: string[]
}
export default function AlertModal({data} : {data: Data}) {
  const [open, setOpen] = React.useState(false);
  const [textareaValue, setTextareaValue] = React.useState(''); // State to track textarea input
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  const [location, setLocation] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null
  });
  const [error, setError] = useState<string | null>(null);

  const {officer} = useSelector((state : RootState)=>{
    return state.profile
  })
  const submitHandler = async()=>{
    if(!socket){
      if(officer){
        FullDuplexConnection(officer.thana_id);
      }
    }
    console.log("emitting...")
    socket.emit("messageByOfficer", {
        user_id: "12345", 
        text: "hello, how are you?",
        latitude: -50,
        longitude: 105
    })
  }
  
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{ bgcolor: blueGrey[900] }}>
        Take Action
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ width: 330, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
            <Accordion sx={{ width: '100%' }}>
              <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                <Typography>User Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="text-lg text-slate-800 font-bold">{data.firstname + data.lastname}</div>
                <div className="text-sm text-slate-800">{data.occupation}</div>
                <div className="text-xs text-slate-600">{data.gender}</div>
                <div className="font-bold text-slate-900">{data.mobile}</div>
                <div className='pt-4 text-xs'>
                  <Accordion variant='outlined'>
                    <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                      <Typography>Family Contacts</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {data.bookmarkedContacts.map((con, index) => (
                        <div key={index} className="text-slate-600 text-sm">
                          {con}
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box id="modal-modal-title" component="h2" className="flex flex-col items-center justify-center">
            <textarea
              rows={6}
              className="border rounded-lg text-sm p-2 w-[300px]"
              placeholder="Can we call you?"
              value={textareaValue} 
              onChange={handleTextareaChange}
            />
            <Box sx={{ marginTop: 2, placeSelf: 'end', marginRight: 2 }}>
              <Button variant="contained" sx={{ bgcolor: blueGrey[900] }} onClick={submitHandler}>
                Submit
              </Button>
            </Box>
          </Box>

          <Box className="flex flex-col mt-2 mx-4 gap-2">
            <Button variant="contained" sx={{ bgcolor: blueGrey[700] }}>
              Call
            </Button>
            <Button variant="contained" sx={{ bgcolor: blueGrey[800] }} onClick={()=>{
              navigate(`/dashboard/trace/${data.latitude}/${data.longitude}`)
            }}>
              Trace
            </Button>
            <Button variant="contained" sx={{ bgcolor: blueGrey[900] }}
              onClick={()=>{
                navigate(`/dashboard/detect/${data.latitude}/${data.longitude}`)
              }}
            >
              Detect Threat
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
