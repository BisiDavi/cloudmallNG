import * as actionTypes from "../actions/actiontypes";

const initialState = { products: [] };

const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        products: payload.products
      };
    default:
      return state;
  }
};

export default ProductReducer;
