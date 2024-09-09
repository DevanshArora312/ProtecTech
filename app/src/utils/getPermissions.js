import {PermissionsAndroid} from "react-native";

export const requestLocationPermission = async () => {
    try {
        if(await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)) return;
        const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            title: "Location Permission",
            message: "This app needs access to your location.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
        }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Location permission granted");
        } else {
        console.log("Location permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};

// Function to request SMS permission
export  const requestSmsPermission = async () => {
    try {
        if(await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.SEND_SMS)) return;
        const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
            title: "SMS Permission",
            message: "This app needs access to send SMS.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
        }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("SMS permission granted");
        } else {
            console.log("SMS permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};