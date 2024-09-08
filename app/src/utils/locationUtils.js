import GeoLocation from "react-native-geolocation-service";
import {PermissionsAndroid} from "react-native";

export const getLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        GeoLocation.getCurrentPosition(
          position => {
            console.log(position);
            return position;
          },
          error => {
            console.log(error.code, error.message);
            return null;
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('You cannot use Geolocation');
        return null;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  
 export const sendLocation = async () => {
    const posn = await getLocation();
    if(!posn) return;
    socket.emit("updateLocation",posn);
  }

