import { combineReducers } from 'redux';
import { GetLandingPageProductsReducer } from './productReducer';
import { LocationReducer } from './locationReducer';
import { RedirectUserReducer } from './redirectReducer';
import {
  UserPreferredAddressReducer,
  ProductModalReducer,
  OrdersModalReducer
} from './userReducer';

export const rootReducer = combineReducers({
  location: UserPreferredAddressReducer,
  landingPageProducts: GetLandingPageProductsReducer,
  onClickedProduct: ProductModalReducer,
  makeOrders: OrdersModalReducer,
  redirect: RedirectUserReducer,
  getLocation: LocationReducer
});
