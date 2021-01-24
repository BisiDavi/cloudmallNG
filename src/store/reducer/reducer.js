import { combineReducers } from 'redux';
import { GetLandingPageProductsReducer } from './productReducer';
import { UserPreferredAddressReducer } from './userReducer';

export const rootReducer = combineReducers({
  location: UserPreferredAddressReducer,
  landingPageProducts: GetLandingPageProductsReducer
});
