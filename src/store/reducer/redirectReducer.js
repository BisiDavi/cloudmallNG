import {
  REDIRECT_USER_REQUEST,
  REDIRECT_USER_SUCCESSFUL,
  REDIRECT_USER_ERROR
} from '../constant';
export const RedirectUserReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case REDIRECT_USER_REQUEST:
      return {
        redirectTo: payload.route,
        loading: true
      };
    case REDIRECT_USER_SUCCESSFUL:
      if (window.location.href.includes(payload.route)) {
        return { loading: false };
      } else {
        return { loading: true };
      }
    case REDIRECT_USER_ERROR:
      return { loading: false };
    default:
      return state;
  }
};
