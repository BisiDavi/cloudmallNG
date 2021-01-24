import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL
} from '../constant';

export const GetLandingPageProductsReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { loading: true, products: [] };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
