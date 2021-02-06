import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import {
  logo,
  homeBottomPattern,
  homeTopPattern,
  Layout,
  PageSpinner
} from '../imports';
import { storeUserLocation } from '../utils/UserLocation';
import { UserPreferredAddress } from '../store/action/userActions';
import style from '../styles/Home.module.css';

const Index = () => {
  const [spinner, setSpinner] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  let userData = {};
  useEffect(() => {
    console.log('loaded - useEffect');
    getLocation(router);
  }, []);

  const getLocation = router => {
    console.log('loaded - getLocation');
    setSpinner(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => trackUserPosition(position, router),
        error => getPositionError(error, router)
      );
    } else {
      router.push('/location');
    }
  };

  console.log('userData', userData);

  const storeAddress = result => {
    const { results } = result;
    const resultObj = results[0];
    const location = resultObj.formatted_address;
    userData = { ...userData, location };
    dispatch(UserPreferredAddress(userData));
    console.log('userData', userData);
  };

  const coordinatesToAddress = (lat, long) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.API_KEY}`
      )
      .then(result => storeAddress(result.data));
  };

  const trackUserPosition = (position, router) => {
    console.log('trackUserPosition');
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    userData = { ...userData, latitude, longitude };
    storeUserLocation(position);
    coordinatesToAddress(latitude, longitude);
    console.log('position', position);
    router.push('/home');
  };

  const getPositionError = (error, router) => {
    switch (error.code) {
      case error.TIMEOUT:
        router.push('/location');
        break;
      case error.PERMISSION_DENIED:
        router.push('/location');
        break;
      default:
        return router.push('/location');
    }
  };

  const appBackground = spinner ? '#B26D06' : '#f29100';
  return (
    <Layout
      style={{ backgroundColor: `${appBackground}` }}
      headerTitle="Welcome"
    >
      <Container className={style.container} fluid>
        <div className="wrapper">
          <div className="splashtop"></div>
          {spinner ? <PageSpinner /> : null}
          <div className={style.logo}>
            <img src={logo} alt="cloudmall logo" />
          </div>
          <div className="splashfooter"></div>
        </div>
        <style jsx>
          {`
            .wrapper {
              height: 100vh;
              width: 100%;
            }
            .splashtop {
              background: url(${homeTopPattern}) no-repeat;
              height: 20vh;
              background-size: cover;
              width: 100%;
            }
            .splashfooter {
              background: url(${homeBottomPattern}) no-repeat;
              background-size: cover;
              width: 100%;
              height: 20vh;
            }
          `}
        </style>
      </Container>
    </Layout>
  );
};

export default Index;
