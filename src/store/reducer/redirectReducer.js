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
        route: payload,
        loading: true
      };
    case REDIRECT_USER_SUCCESSFUL:
      if (window.location.href.includes(payload)) {
        return { loading: false, route: payload };
      } else {
        return { loading: true, route: payload };
      }
    case REDIRECT_USER_ERROR:
      return { loading: false };
    default:
      return state;
  }
};
