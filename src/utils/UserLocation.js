import axios from 'axios';

const getLocation = router => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => trackUserPosition(position, router),
      error => getPositionError(error, router)
    );
  } else {
    console.log('Geolocation NOT supported on this browser');
    router.push('/location');
  }
};

export const storeUserLocation = position => {
  localStorage.setItem('latitude', position.coords.latitude);
  localStorage.setItem('longitude', position.coords.longitude);
};

let address = '';
const storeAddress = result => {
  const { results } = result;
  const resultObj = results[0];
  address = resultObj.formatted_address;
  console.log('address ---', address);
  return address;
};

const coordinatesToAddress = (lat, long) => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.API_KEY}`
    )
    .then(result => storeAddress(result.data));
};

const trackUserPosition = (position, router) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  storeUserLocation(position);
  coordinatesToAddress(latitude, longitude);
  console.log('Thanks for sharing your position with me');

  router.push('/home');
  console.log('position', position);
};

const getPositionError = (error, router) => {
  switch (error.code) {
    case error.TIMEOUT:
      console.log('time out');
      break;
    case error.PERMISSION_DENIED:
      console.log('Oops, You denied me accessing your location');
      router.push('/location');
      break;
    default:
      return router.push('/location');
  }
};

const interval20Mins = router => {
  const after20Mins = () => {
    navigator.geolocation.watchPosition(
      position => trackUserPosition(position, router),
      error => getPositionError(error, router)
    );
  };
  setTimeout(after20Mins, 1200000);
};

export const UserLocation = {
  getUserCurrentLocation: router => getLocation(router),
  watchUserLocationChanges: router => interval20Mins(router)
};

export default UserLocation;
