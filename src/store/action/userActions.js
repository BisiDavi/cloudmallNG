import {
  USER_PREFERRED_ADDRESS_ENTERED,
  USER_PREFERRED_ADDRESS_ERROR,
  USER_PREFERRED_ADDRESS_SUCCESS
} from '../constant';

export const UserPreferredAddress = (location, router) => dispatch => {
  try {
    console.log('location', location);
    dispatch({
      type: USER_PREFERRED_ADDRESS_ENTERED
    });

    dispatch({
      type: USER_PREFERRED_ADDRESS_SUCCESS,
      payload: location
    });

    router.push('/home');
  } catch (error) {
    dispatch({
      type: USER_PREFERRED_ADDRESS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
