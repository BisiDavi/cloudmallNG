import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducer/reducer';

const middleware = [thunk];

const initialStore = {
  location: { loading: false, address : ''}
};
export const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);
