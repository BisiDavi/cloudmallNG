import {
  LOCATION_REQUEST,
  LOCATION_SUCCESSFUL,
  LOCATION_ERROR
} from '../constant';
import { trackUserPosition, getPositionError } from '../../utils/GetLocation';

const GetLocation = () => {
  navigator.geolocation.getCurrentPosition(
    position => trackUserPosition(position),
    error => getPositionError(error)
  );
};
export const LocationReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOCATION_REQUEST:
      return { loading: true };
    case LOCATION_SUCCESSFUL:
      const { location } = GetLocation();
      return { loading: false, address: location };
    case LOCATION_ERROR:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
