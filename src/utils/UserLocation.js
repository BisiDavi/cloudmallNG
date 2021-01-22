const checkBrowser = () => {
  if (navigator.geolocation) {
    console.log('Geolocation supported on this browser');
  } else {
    console.log('Geolocation NOT supported on this browser');
  }
};

const storeUserLocation = position => {
  localStorage.setItem('latitude', position.coords.latitude);
  localStorage.setItem('longitude', position.coords.longitude);
};

const trackUserPosition = (position, router) => {
  storeUserLocation(position);
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

const watchPosition20MinsInterval = () => {
  const after30Mins = () => {
    navigator.geolocation.watchPosition();
  };
  setTimeout(after30Mins, 1200000);
};

export const UserLocation = {
  checkBrowserGeoCompatibility: () => checkBrowser(),
  getUserCurrentLocation: router =>
    navigator.geolocation.getCurrentPosition(
      position => trackUserPosition(position, router),
      error => getPositionError(error, router)
    ),
  watchUserLocationChanges: () => watchPosition20MinsInterval()
};

export default UserLocation;
