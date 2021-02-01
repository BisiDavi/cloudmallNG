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
  switch (action.type) {
    case USER_PREFERRED_ADDRESS_SUCCESS:
      const location = action.payload;
      const userAddressArray = location.split(',');
      submitUserAddress(userAddressArray);
    case USER_PREFERRED_ADDRESS_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ProductModalReducer = (
  state = { product: {}, productModal: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_PRODUCT_MODAL_REQUEST:
      return { loading: true };
    case SHOW_PRODUCT_MODAL_SUCCESSFUL:
      return { loading: false, product: { ...payload }, productModal: true };
    case CLOSE_PRODUCT_MODAL:
      return {
        loading: false,
        product: { ...state.product },
        productModal: false
      };
    case SHOW_PRODUCT_MODAL_ERROR:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
export const OrdersModalReducer = (state = { ordersModal: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ORDERS_MODAL_REQUEST:
      return { loading: true };
    case SHOW_ORDERS_MODAL_SUCCESSFUL:
      return { loading: false, ordersModal: true };
    case CLOSE_ORDERS_MODAL:
      return { loading: false, ordersModal: false };
    case SHOW_ORDERS_MODAL_ERROR:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
