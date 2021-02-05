import {
  LOCATION_REQUEST,
  LOCATION_SUCCESSFUL,
  LOCATION_ERROR
} from '../constant';

export const RequestUserLocation = () => dispatch => {
  try {
    dispatch({
      type: LOCATION_REQUEST
    });
    dispatch({
      type: LOCATION_SUCCESSFUL
    });
    
  } catch (error) {
    dispatch({
      type: LOCATION_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

