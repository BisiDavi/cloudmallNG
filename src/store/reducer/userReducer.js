import {
  USER_PREFERRED_ADDRESS_SUCCESS,
  USER_PREFERRED_ADDRESS_ERROR,
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

const submitUserAddress = userAddressArray => {
  if (userAddressArray.length > 2) {
    const userLocation = userAddressArray[0];
    const LGA = userAddressArray[1];
    const userState = userAddressArray[2];
    console.log(userAddressArray, 'userAddressArray');
    axiosInstance
      .post('/app/landing', { userLocation, LGA, userState })
      .then(result => {
        loading: false;
        address: userLocation;
        console.log(result, 'successful');
        console.log(loading, 'submitUserAddress loading');
        console.log(address, 'submitUserAddress address');
      })
      .catch(err => console.log(err));
  }
};
export const UserPreferredAddressReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_PREFERRED_ADDRESS_SUCCESS:
      const location = payload.location;
      const userAddressArray = location.split(',');
      submitUserAddress(userAddressArray);
      return {
        loading: false,
        location: payload.location,
      };
    case USER_PREFERRED_ADDRESS_ERROR:
      return {
        loading: false,
        error: payload.error,
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
