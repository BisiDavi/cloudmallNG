import {
  USER_PREFERRED_ADDRESS_ENTERED,
  USER_PREFERRED_ADDRESS_ERROR
} from '../constant';

export const userPreferredAddress = () => dispatch => {
  try {
    dispatch({
      type: USER_PREFERRED_ADDRESS_ENTERED
    });

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
