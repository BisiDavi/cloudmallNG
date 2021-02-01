import {
  USER_PREFERRED_ADDRESS_ERROR,
  USER_PREFERRED_ADDRESS_SUCCESS,
  SHOW_PRODUCT_MODAL_REQUEST,
  SHOW_PRODUCT_MODAL_SUCCESSFUL,
  SHOW_PRODUCT_MODAL_ERROR,
  SHOW_ORDERS_MODAL_REQUEST,
  SHOW_ORDERS_MODAL_SUCCESSFUL,
  SHOW_ORDERS_MODAL_ERROR,
  CLOSE_PRODUCT_MODAL
} from '../constant';

export const UserPreferredAddress = (location, router) => dispatch => {
  try {
    console.log('location', location);
    dispatch({
      type: USER_PREFERRED_ADDRESS_SUCCESS,
      payload: location
    });

    router.push('/home');
  } catch (error) {
    dispatch({
      type: USER_PREFERRED_ADDRESS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const ShowProductModal = product => dispatch => {
  try {
    dispatch({
      type: SHOW_PRODUCT_MODAL_REQUEST
    });
    dispatch({
      type: SHOW_PRODUCT_MODAL_SUCCESSFUL,
      payload: product
    });
  } catch (error) {
    dispatch({
      type: SHOW_PRODUCT_MODAL_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const closeProductModal = () => dispatch => {
  try {
    dispatch({
      type: CLOSE_PRODUCT_MODAL
    });
  } catch (error) {
    dispatch({
      type: SHOW_PRODUCT_MODAL_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
export const ShowOrdersModal = () => dispatch => {
  try {
    dispatch({
      type: CLOSE_PRODUCT_MODAL
    });
    dispatch({
      type: SHOW_ORDERS_MODAL_REQUEST
    });
    dispatch({
      type: SHOW_ORDERS_MODAL_SUCCESSFUL
    });
  } catch (error) {
    dispatch({
      type: SHOW_ORDERS_MODAL_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const closeOrderModal = () => dispatch => {
  try {
    dispatch({
      type: CLOSE_ORDERS_MODAL
    });
  } catch (error) {
    dispatch({
      type: SHOW_ORDERS_MODAL_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
