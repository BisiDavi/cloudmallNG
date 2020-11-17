import { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useRouter } from "next/router";
import { Layout, Spinner } from "../imports";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import style from "../styles/Location.module.css";

const Location = props => {
  const [map, setMap] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  });

  const [userAddress, setUserAddress] = useState({
    location: ""
  });

  const { register, handleSubmit, watch, errors } = useForm();

  const router = useRouter();

  const onSubmit = data => {
    setUserAddress({
      ...userAddress,
      location: data.locationAddress
    });
    const linkHref = (router.pathname = "/home");
    console.log("users data", data.locationAddress);
    router.push(linkHref);
  };

  console.log("users location", userAddress.location);

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
        height: "70vh !important",
        width: "100%",
        padding: "10px",
        margin: "auto"
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
      <Marker onClick={onMarkerClick} name={"Current location"} />
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
            <h3 className="text-center">Select Address</h3>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={9} xs={12} className={`${style.mapContainer} 100vh`}>
            <div style={{ height: "100vh !important" }}>
              {props.google ? googleMap() : <Spinner />}
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
                  defaultValue={userAddress.location}
                  className={style.inputField}
                  placeholder="Your Location"
                  ref={register({ required: true })}
                />
                {errors.locationAddress && (
                  <span className="font-weight-bold text-danger">
                    Your Address is required
                  </span>
                )}
                <Button
                  type="submit"
                  className={`${style.formbutton}
                  btn btn-primary p-2 mt-lg-5 mb-2 m-auto text-white`}
                >
                  Confirm Address
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDjGviSQ3NuCZ1smhHroLRlK-bmBsf1R9c"
})(Location);
