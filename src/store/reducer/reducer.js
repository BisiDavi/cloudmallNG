import {combineReducers} from 'redux';

const initialState = {
  isLoggedIn: false,
  location: ""
};

const locationReducer = (state = initialState.location, action) => {
  return state;
};

const loggedInReducer = (state = initialState.isLoggedIn, action) => {
  return state;
};
export const rootReducer = combineReducers({
  islogin: loggedInReducer,
  location: locationReducer
});
