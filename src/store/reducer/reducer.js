import { combineReducers } from 'redux';
import { GetLandingPageProductsReducer } from './productReducer';
import { LocationReducer } from './locationReducer';
import { RedirectUserReducer } from './redirectReducer';
import { SaveToStorageReducer } from './savetoStorageReducer';
import {
  UserAddressReducer,
  ProductModalReducer,
  OrdersModalReducer
} from './userReducer';

export const rootReducer = combineReducers({
  location: UserAddressReducer,
  landingPageProducts: GetLandingPageProductsReducer,
  onClickedProduct: ProductModalReducer,
  makeOrders: OrdersModalReducer,
  redirect: RedirectUserReducer,
  getLocation: LocationReducer,
  saveToLocalStorage: SaveToStorageReducer
});
