import Head from "next/head";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import style from "../styles/Location.module.css";

const Location = props => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
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
        <Map
          google={props.google}
          initialCenter={{
            lat: 6.5244,
            lng: 3.3792
          }}
          zoom={10}
        >
          <Marker onClick={onMarkerClick} name={"Current location"} />
          <InfoWindow onClose={onInfoWindowClose}>
            <div>
              <h1></h1>
            </div>
          </InfoWindow>
        </Map>
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

export default GoogleApiWrapper({ apiKey: process.env.API_KEY })(Location);
