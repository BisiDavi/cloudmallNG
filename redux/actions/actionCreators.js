import * as actionTypes from "./actiontypes";
import * as axiosInstance from "../axiosInstance/axiosInstance";

const fetchProductSucceeded = products => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    payload: {
      products
    }
  };
};

const FetchProductAsync = () => {
  return dispatch => {
    axiosInstance.fetchProduct().then(resp => {
      dispatch(fetchProductSucceeded(resp.data));
    });
  };
};

export default FetchProductAsync;
