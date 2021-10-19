import React, { useEffect, useState, useContext } from 'react';
import { LogBox, PermissionsAndroid } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Routes from './Routes/index';
import { UserProvider, LocationProvider, SearchDataProvider, TVShowsProvider } from './app/utils/UserContext';
// import Geolocation from '@react-native-community/geolocation';
// import Geocoder from 'react-native-geocoding';

console.disableYellowBox = true;
LogBox.ignoreAllLogs = true;

// Geocoder.init("AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM");
function App() {
  let watchID;
  const [locationStatus, setLocationStatus] = useState('');
  // const [userLocation, setLocation] = useContext(LocationContext);

  useEffect(() => {
    // const requestLocationPermission = async () => {
    //   try {
    //     if (PermissionsAndroid.RESULTS.GRANTED) {
    //       //To Check, If Permission is granted
    //       getOneTimeLocation();
    //       // subscribeLocationLocation();
    //     } else {
    //       setLocationStatus('Permission Denied');
    //     }
    //   } catch (err) {
    //     console.warn(err);
    //   }
    // }
    // requestLocationPermission();
    // return () => {
    //   Geolocation.clearWatch(watchID);
    // };
  }, []);
  // const getOneTimeLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       Geocoder.from(position.coords.latitude, position.coords.longitude)
  //         .then(async (json) => {
  //           var addressComponent = json.results[0].address_components;
  //           const addressUser = addressComponent[5].long_name;
  //           // setLocation(addressUser)
  //         })
  //         .catch(error => console.warn(error));
  //     },
  //     (error) => {
  //       setLocationStatus(error.message);
  //       // See error code charts below.
  //       console.log(error.code, error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 10000,
  //       maximumAge: 100000
  //     }



      
  //   );
  // };

  return (
    <UserProvider>
      <LocationProvider>
        <SearchDataProvider>
          <Routes />
        </SearchDataProvider>
      </LocationProvider>
    </UserProvider>
  );
}
export default App;
// 826251