import React, { ChangeEvent, useState } from 'react';
import { TextField, Card, CardHeader, CardContent, CardActions, Avatar, Typography, Button } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { AUTH } from '../services/apis';
import { apiConnector } from '../services/apiConnector';
export default function LoginCard() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async()=>{
    if(!password || !username) return;
    try{
      console.log("pls wait");
      const response = await apiConnector({method: "POST", url : AUTH.login, bodyData: {username, password}});
      console.log(response);
    } catch(err){

    }
  }
  const handleUsernameChange = (event : ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event : ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  
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
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                sx={{ width: 400 }}
                value={username}
                onChange={handleUsernameChange}
              />
          </Typography>
          <Typography variant="body2" color="text.secondary">
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                sx={{ width: 400 }}
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
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
          <Button variant="contained" sx={{ bgcolor: blueGrey[900] }} onClick={submitHandler}>Login</Button>
        </CardActions>
    </Card>
  );
}
