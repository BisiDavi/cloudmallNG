import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '../constant';

export const fetchProduct = () => dispatch => {
  try {
    dispatch({
      type: FETCH_PRODUCTS_REQUEST
    });

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE
    });
  }
};
