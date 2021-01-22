import { combineReducers } from 'redux';
import { getLandingPageProductsReducer } from './productReducer';

const initialState = {
  isLoggedIn: false,
  location: ''
};

const locationReducer = (state = initialState.location, action) => {
  return state;
};

const loggedInReducer = (state = initialState.isLoggedIn, action) => {
  return state;
};

export const rootReducer = combineReducers({
  islogin: loggedInReducer,
  location: locationReducer,
  LandingPageProducts: getLandingPageProductsReducer
});
