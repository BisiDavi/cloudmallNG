import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logo, pattern, Layout, PageSpinner } from '../imports';
import { storeUserLocation } from '../utils/UserLocation';
import { UserPreferredAddress } from '../store/action/UserActions';
import style from '../styles/Home.module.css';

const Index = () => {
  const [spinner, setSpinner] = useState(false);
  const [address, setAddress] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setSpinner(true);
    getLocation(router);
    dispatch(UserPreferredAddress(address));
  }, [address]);

  const getLocation = router => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => trackUserPosition(position, router),
        error => getPositionError(error, router)
      );
    } else {
      router.push('/location');
    }
  };

  const storeAddress = result => {
    const { results } = result;
    const resultObj = results[0];
    const userAddress = resultObj.formatted_address;
    setAddress(userAddress);
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

  return (
    <Layout headerTitle="Welcome">
      <div className={style.container}>
        <div className="splashtop"></div>
        {spinner ? <PageSpinner /> : null}
        <div className={style.logo}>
          <img src={logo} alt="cloudmall logo" />
        </div>
        <div className="splashfooter"></div>
        <style jsx>
          {`
            .splashtop {
              background: url(${pattern}) no-repeat;
              height: 200px !important;
              position: absolute;
              background-size: cover;
              width: 100% !important;
              top: -40px;
            }
            .splashfooter {
              background: url(${pattern}) no-repeat;
              position: absolute;
              background-size: cover;
              bottom: 0px;
              width: 100% !important;
              height: 200px;
            }
            .modal-content {
              padding: 5px 10px !important;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Index;
