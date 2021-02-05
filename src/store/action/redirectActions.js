import {
  REDIRECT_USER_REQUEST,
  REDIRECT_USER_SUCCESSFUL,
  REDIRECT_USER_ERROR
} from '../constant';
export const RedirectUser = route => dispatch => {
  try {
    dispatch({
      type: REDIRECT_USER_REQUEST,
      payload: route
    });
    dispatch({
      type: REDIRECT_USER_SUCCESSFUL,
      payload: route
    });
  } catch (error) {
    dispatch({
      type: REDIRECT_USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
