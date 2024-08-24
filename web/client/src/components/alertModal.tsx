import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { blueGrey } from '@mui/material/colors';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { borderRadius } from '@mui/system';

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

export default function AlertModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const user = {
        username: 'Mike Wheeler',
        address: 'Hawkins, united states of america',
        gender: 'Male',
        contact: '+91-8368789504',
        family_contact: [
            '+91-8368789504',
            '+91-8368789504',
            '+91-8368789504',
            '+91-8368789504',
        ]
    }
    return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{bgcolor: blueGrey[900]}}>Take Action</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{width: 330, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2}}>
                <Accordion sx={{width: '100%'}}>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                    >
                    <Typography>User Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='text-lg text-slate-800 font-bold'>{user?.username}</div>
                        <div className='text-sm text-slate-800'>{user?.address}</div>
                        <div className='text-xs text-slate-600'>{user?.gender}</div>
                        <div className='font-bold text-slate-900'>{user?.contact}</div>
                        <div>{
                            user?.family_contact?.map((con)=>{
                                return <div key={con} className='text-slate-600 text-sm'>{con}</div>
                            })
                        }</div>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box id="modal-modal-title" component="h2" className='flex flex-col items-center justify-center'>
                <textarea rows={6} className='border rounded-lg text-sm p-2 w-[300px]' placeholder='can we call you?'/>
                <Box sx={{marginTop: 2, placeSelf: "end", marginRight: 2}}>
                    <Button variant="contained" sx={{bgcolor: blueGrey[900]}}>Submit</Button>
                </Box>
            </Box>
            <Box className={"flex flex-col mt-2 mx-4 gap-2"}>
                <Button variant="contained" sx={{bgcolor: blueGrey[700]}}>Call</Button>
                <Button variant="contained" sx={{bgcolor: blueGrey[800]}}>Trace</Button>
                <Button variant="contained" sx={{bgcolor: blueGrey[900]}}>Detect Threat</Button>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}