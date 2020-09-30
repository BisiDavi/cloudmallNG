import { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useRouter } from "next/router";
import { Layout } from "../imports";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import style from "../styles/Location.module.css";
import homeStyle from "../styles/Home.module.css";

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

  console.log("users location", userAddress);

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
        height: "450px",
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

  const spinner = () => (
    <div className={homeStyle.ldsSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  return (
    <Layout headerTitle="Enter your Address">
      <div className="location">
        <div className={style.header}>
          <div className={style.arrow}>
            <Link href="/">
              <a>
                <ArrowBackIcon />
              </a>
            </Link>
          </div>
          <h3>Select Address</h3>
        </div>
        <hr />

        <div className={style.mapContainer}>
          <div style={{ height: "450px" }}>
            {props.google ? googleMap() : spinner()}
          </div>
        </div>

        <div className={style.formAddress}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="userEmail">
              <Form.Label>Enter Preferred Address</Form.Label>
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
                className="btn btn-primary p-2 mt-2 mb-2 m-auto text-white"
              >
                Confirm Address
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDjGviSQ3NuCZ1smhHroLRlK-bmBsf1R9c"
})(Location);
