import { useState } from "react";
import Head from "next/head";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import style from "../styles/Location.module.css";
import homeStyle from "../styles/Home.module.css";

const Location = props => {
  const [map, setMap] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  });
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

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

  if (!props.google) {
    return (
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
  }

  return (
    <div className="location">
      <Head>
        <title>CloudMallNG 🛒 - Enter your Address</title>
      </Head>

      <div className={style.header}>
        <div className={style.arrow}>
          <ArrowBackIcon />
        </div>
        <h3>Select Address</h3>
      </div>
      <div className={style.mapContainer}>
        <div style={{ height: "450px" }}>
          <Map
            style={{ height: "450px" }}
            google={props.google}
            onClick={onMapClicked}
            initialCenter={{
              lat: 6.5244,
              lng: 3.3792
            }}
            zoom={14}
          >
            <Marker onClick={onMarkerClick} name={"Current location"} />
            <InfoWindow
              marker={map.activeMarker}
              visible={map.showingInfoWindow}
            >
              <div>
                <h1>{map.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
      <div className={style.formAddress}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Enter Preferred Email Address</label>
          <TextField
            name="emailAddress"
            variant="outlined"
            label="Enter Preferred Email Address"
            inputRef={register({ required: true })}
          />
          {errors.emailAddress && <span>Your Email is required</span>}
          <button type="submit">Confirm Address</button>
        </form>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDjGviSQ3NuCZ1smhHroLRlK-bmBsf1R9c"
})(Location);
