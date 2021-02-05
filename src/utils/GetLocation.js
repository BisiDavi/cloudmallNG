import axios from 'axios';

let address = '';

const storeAddress = result => {
  const { results } = result;
  const resultObj = results[0];
  address = resultObj.formatted_address;
  console.log('address ---', address);
  return address;
};

export const storeLocationToStorage = (lat, long) => {
  localStorage.setItem('latitude', lat);
  localStorage.setItem('longitude', long);
};

const coordinatesToAddress = (lat, long) => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.API_KEY}`
    )
    .then(result => storeAddress(result.data));
};

export const trackUserPosition = position => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  storeLocationToStorage(latitude, longitude);
  coordinatesToAddress(latitude, longitude);
  console.log('I worked till this place');
};

export const getPositionError = error => {
  switch (error.code) {
    case error.TIMEOUT:
      console.log('time out');
      break;
    case error.PERMISSION_DENIED:
      console.log('Oops, You denied me accessing your location');
      break;
    default:
  }
};

