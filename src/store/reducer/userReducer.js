import {
  USER_PREFERRED_ADDRESS_SUCCESS,
  USER_PREFERRED_ADDRESS_ERROR,
  USER_DEFAULT_ADDRESS_SUCCESS,
  USER_DEFAULT_ADDRESS_ERROR,
  SHOW_PRODUCT_MODAL_REQUEST,
  SHOW_PRODUCT_MODAL_SUCCESSFUL,
  SHOW_PRODUCT_MODAL_ERROR,
  CLOSE_PRODUCT_MODAL,
  SHOW_ORDERS_MODAL_REQUEST,
  SHOW_ORDERS_MODAL_SUCCESSFUL,
  CLOSE_ORDERS_MODAL,
  SHOW_ORDERS_MODAL_ERROR
} from '../constant';
import { axiosInstance } from '../../axios';

const submitUserPreferredAddress = payload => {
  const location = payload.location;
  const locationArray = location.split(',');
  const latitude = payload.latitude;
  const longitude = payload.longitude;
  const lga = locationArray[1];
  const state = locationArray[2];
  console.log(locationArray, 'locationArray');
  axiosInstance
    .post('/app/landing', { lga, state, latitude, longitude })
    .then(result => console.log('result', result))
    .catch(err => console.log(err));
};
const submitUserDefaultAddress = payload => {
  const location = payload.address;
  const locationArray = location.split(',');
  const { lat, lng } = payload.mapPosition;
  const latitude = lat;
  const longitude = lng;
  const lga = locationArray[1];
  const state = locationArray[2];
  console.log(locationArray, 'locationArray');
  console.log(lat, 'lat');
  console.log(lng, 'lng');
  axiosInstance
    .post('/app/landing', { lga, state, latitude, longitude })
    .then(result => console.log('result', result))
    .catch(err => console.log(err));
};

export const UserAddressReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_PREFERRED_ADDRESS_SUCCESS:
      submitUserPreferredAddress(payload);
      return {
        loading: false,
        location: payload.location,
        latitude: payload.latitude,
        longitude: payload.longitude
      };
    case USER_DEFAULT_ADDRESS_SUCCESS:
      submitUserDefaultAddress(payload);
      return {
        loading: false,
        location: payload.address,
        latitude: payload.mapPosition.lat,
        longitude: payload.mapPosition.lng
      };
    case USER_PREFERRED_ADDRESS_ERROR:
      return {
        loading: false,
        error: payload
      };
    case USER_DEFAULT_ADDRESS_ERROR:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
export const ProductModalReducer = (
  state = { product: {}, productModal: false, showLoadingProducts: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_PRODUCT_MODAL_REQUEST:
      return { showLoadingProducts: true, productModal: false };
    case SHOW_PRODUCT_MODAL_SUCCESSFUL:
      return {
        showLoadingProducts: false,
        product: { ...payload },
        productModal: true
      };
    case CLOSE_PRODUCT_MODAL:
      return {
        showLoadingProducts: false,
        product: { ...state.product },
        productModal: false
      };
    case SHOW_PRODUCT_MODAL_ERROR:
      return { loadingProductModal: false, error: payload };
    default:
      return state;
  }
};
export const OrdersModalReducer = (
  state = { showLoadingOrders: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ORDERS_MODAL_REQUEST:
      return { showLoadingOrders: true, ordersModal: false };
    case SHOW_ORDERS_MODAL_SUCCESSFUL:
      return { showLoadingOrders: false, ordersModal: true };
    case CLOSE_ORDERS_MODAL:
      return { showLoadingOrders: false, ordersModal: false };
    case SHOW_ORDERS_MODAL_ERROR:
      return { showLoadingOrders: false, error: payload };
    default:
      return state;
  }
};
