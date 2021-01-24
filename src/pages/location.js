import { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { UserPreferredAddress } from '../store/action/userActions';
import { Layout, PageSpinner } from '../imports';
import style from '../styles/Location.module.css';

const Location = props => {
  const [map, setMap] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  });

  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch();
  const userLocation = useSelector(state => state.location);

  const { loading } = userLocation;

  console.log('loading', loading);

  const router = useRouter();

  const onSubmit = data => {
    dispatch(UserPreferredAddress(data.locationAddress, router));
  };

  const onMarkerClick = (props, marker, e) => {
    return setMap({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  const onMapClicked = props => {
    if (map.showingInfoWindow) {
      setMap({
        ...map,
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  const googleMap = () => (
    <Map
      style={{
        height: '70vh !important',
        width: '100%',
        padding: '10px',
        margin: 'auto'
      }}
      google={props.google}
      onClick={onMapClicked}
      className={style.map}
      initialCenter={{
        lat: 6.5244,
        lng: 3.3792
      }}
      zoom={14}
    >
      <Marker onClick={onMarkerClick} name={'Current location'} />
      <InfoWindow marker={map.activeMarker} visible={map.showingInfoWindow}>
        <div>
          <h1>{map.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </Map>
  );

  return (
    <Layout headerTitle="Enter your Address">
      <Container className="location" fluid>
        <Row className={style.header}>
          <Col>
            <div className={style.arrow} onClick={() => router.back()}>
              <ArrowBackIcon />
            </div>
            <h3 className="text-center">Enter your Address</h3>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={9} xs={12} className={`${style.mapContainer} 100vh`}>
            <div style={{ height: '100vh !important' }}>
              {props.google ? googleMap() : <PageSpinner />}
            </div>
          </Col>
          <Col lg={3} xs={12} className={`${style.formAddress} 100vh`}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="userEmail">
                <Form.Label className={`${style.formText} mb-5`}>
                  Enter Preferred Address
                </Form.Label>
                <Form.Control
                  name="locationAddress"
                  type="text"
                  defaultValue=""
                  className={style.inputField}
                  placeholder="Your Location"
                  ref={register({ required: true })}
                />
                {errors.locationAddress && (
                  <span className="font-weight-bold text-danger">
                    Your Address is required
                  </span>
                )}
                {loading ? (
                  <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span> Please wait
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className={`${style.formbutton}
                  btn btn-primary p-2 mt-lg-5 mb-2 m-auto text-white`}
                  >
                    Confirm Address
                  </Button>
                )}
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjGviSQ3NuCZ1smhHroLRlK-bmBsf1R9c'
})(Location);
