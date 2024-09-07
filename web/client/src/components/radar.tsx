import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import radar from '../assets/animated_radar.gif';
import { Slider } from '@mui/material';
import { apiConnector } from '../services/apiConnector';
import { DETECT } from '../services/apis';

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

interface radarProps {
    distance: number,
    latitude: number,
    longitude: number,
    setUsers: React.Dispatch<React.SetStateAction<user[]>>
}

export default function Radar({distance, latitude, longitude, setUsers} : radarProps) {
    const detectHandler = async()=>{
        try{
            const response = await apiConnector({method : "POST", url: DETECT.login, bodyData: {distance, latitude, longitude}});
            setUsers(response.data);
        } catch(err){
            console.log(err);
        }
    }
    return (
      <Card sx={{ maxWidth: 450 }}>
        <CardMedia
          sx={{ height: 280 }}
          image={radar}
          title="Animated Radar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Detect Nearby Threats
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Our threat detection system uses advanced algorithms and real-time data to identify potential dangers in your vicinity. 
          </Typography>
          <Typography>
            <Slider min={5} max={15} step={1} defaultValue={5}/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='outlined' onClick={detectHandler}>Detect</Button>
        </CardActions>
      </Card>
    );
  }