import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { ProductReducer } from "../../imports";

const bindMiddleware = middleware => {
  // if (process.env.NODE_ENV !== "production") {
    // const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  // }
  // return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  ProductReducer
});

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === HYDRATE) {
    const nextState = {
      ...state,
      ...payload
    };
    if (state.product.product) {
      nextState.product.product = state.product.product;
      return nextState;
    }
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunk]));
};

export const wrapper = createWrapper(initStore);
