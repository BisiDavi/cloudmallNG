import { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Layout } from "../imports";
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
    <Layout headerTitle="Enter your Address">
      <div className="location">
        <div className={style.header}>
          <div className={style.arrow}>
            <ArrowBackIcon />
          </div>
          <h3>Select Address</h3>
        </div>
        <hr />
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
            {/* <label>Enter Preferred Email Address</label> */}
            <TextField
              name="emailAddress"
              variant="outlined"
              className="my-2"
              id="outlined-size-normal"
              label="Enter Preferred Email Address"
              inputRef={register({ required: true })}
            />
            {errors.emailAddress && <span>Your Email is required</span>}
            <button type="submit" className="btn btn-primary pb-2 text-white">
              Confirm Address
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDjGviSQ3NuCZ1smhHroLRlK-bmBsf1R9c"
})(Location);
