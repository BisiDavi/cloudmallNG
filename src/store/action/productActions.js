import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL
} from '../constant';

export const FetchProductAsync = () => dispatch => {
  dispatch({
    type: FETCH_PRODUCTS_REQUEST
  });



  dispatch({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data
  });

  dispatch({
    type: FETCH_PRODUCTS_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
  });
};
