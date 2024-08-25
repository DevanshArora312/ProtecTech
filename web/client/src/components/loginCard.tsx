import { TextField, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Typography, Button } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
export default function LoginCard() {
  return (
    <Card sx={{ minWidth: 450 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blueGrey[900] }} aria-label="recipe">
              P
            </Avatar>
          }
          title="Welcome back!"
          subheader="Please log in to access your account."
        />
        <div className='bg-[#263238] h-[100px] text-white flex flex-col items-center justify-center text-4xl font-bold'>
            ProtecTech
        </div>
        <CardContent className='flex flex-col gap-2 items-center justify-center'>
          <Typography variant="body2" color="text.secondary">
              <TextField id="outlined-basic" label="Username" variant="outlined" sx={{width: 400}}/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
              <TextField id="outlined-basic" label="Password" variant="outlined" sx={{width: 400}}/>
          </Typography>
          <div className='flex flex-col items-center justify-center'>
              <div className='text-lg hover:text-blue-800 hover:underline cursor-pointer'>
                  New Here?
              </div>
              <div className='text-sm text-slate-600'>
                  Access is by invitation only. Please contact your department administrator to receive an invitation.
              </div>
          </div>
        </CardContent>
        <CardActions disableSpacing className='flex flex-col items-center'>
          <Button variant="contained" sx={{bgcolor: blueGrey[900]}}>Login</Button>
        </CardActions>
    </Card>
  );
}