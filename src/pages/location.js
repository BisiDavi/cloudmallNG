import GoogeMapAutocomplete from '../utils/GoogleMapAutocomplete';

const Location = props => {
  return (
    <GoogleMapAutocomplete
      google={props.google}
      center={{ lat: 6.5244, lng: 3.3792 }}
      zoom={15}
      height="92%"
    />
  );
};

export default Location;
