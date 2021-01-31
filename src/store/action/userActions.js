import {
  USER_PREFERRED_ADDRESS_ERROR,
  USER_PREFERRED_ADDRESS_SUCCESS,
  SHOW_PRODUCT_MODAL,
  SHOW_PRODUCT_MODAL_ERROR
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

export const ShowProductModal = () => dispatch => {
  try {
    dispatch({
      type: SHOW_PRODUCT_MODAL
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
