import * as React from 'react';
import { Drawer, Button, Box, List, ListItem, Typography, Avatar, Divider, Rating } from '@mui/material';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import { blueGrey } from '@mui/material/colors';
import {BarChart} from '@mui/x-charts/BarChart';

export default function SideDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [police, setPolice] = React.useState({
    name: "Spongebob Squarepants",
    badgeNumber: "12345",
    rank: "Sergeant",
    department: "Crime Investigation Unit",
    stationLocation: "Dwarka Police Station",
    contactNumber: "+91-8368789504",
    email: "spongebob@gmail.com",
    yearsOfService: 5,
    rating: 4.2
  });

  const DrawerList = (
    <Box
      sx={{
        width: 295,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '98vh',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List className="flex flex-col items-center justify-center">
        <ListItem className="flex flex-col items-center justify-center">
          <Avatar sx={{ bgcolor: blueGrey[900], width: 100, height: 100, fontSize: 40 }}>P</Avatar>
        </ListItem>
        <ListItem className="flex flex-col items-center justify-center">
          <Typography>{police?.name}</Typography>
        </ListItem>
        <ListItem className="flex flex-col items-center justify-center">
          <Typography>{police?.email}</Typography>
        </ListItem>
        <ListItem className="flex flex-col items-center justify-center">
          <Typography>{police?.contactNumber}</Typography>
        </ListItem>
        <ListItem className="flex flex-col items-center justify-center">
          <Typography>{police?.department}</Typography>
        </ListItem>
        <ListItem className="flex flex-col items-center justify-center">
          <Typography>{police?.stationLocation}</Typography>
        </ListItem>
        <ListItem className="flex flex-col items-center justify-center">
          <Rating name="simple-controlled" value={police?.rating} precision={0.2} readOnly />
        </ListItem>
        <ListItem>
          <BarChart
            series={[
              {
                data: [3, 5, 8, 6],
                color: '#263238',
              },
              {
                data: [4, 2, 10, 9],
                color: '#495a63',
              },
            ]}
            height={290}
            width={250}
            xAxis={[{ data: ['May', 'June', 'July', 'August'], scaleType: 'band' }]}
          />
        </ListItem>
      </List>
      <Divider />
      <Box mr={2} sx={{ placeSelf: 'end' }}>
        <Button variant="contained" sx={{ bgcolor: blueGrey[900] }} onClick={toggleDrawer(false)}>
          Close
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          position: 'fixed',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 50,
          color: blueGrey[100],
          opacity: "60%",
          '&:hover': { color: blueGrey[900], opacity: "100%" },
        }}
      >
        <ViewSidebarIcon sx={{ fontSize: 50 }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
