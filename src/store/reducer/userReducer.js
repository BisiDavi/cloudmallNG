import {
  USER_PREFERRED_ADDRESS_ENTERED,
  USER_PREFERRED_ADDRESS_SUCCESS,
  USER_PREFERRED_ADDRESS_ERROR
} from '../constant';

export const UserPreferredAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PREFERRED_ADDRESS_ENTERED:
      return { loading: true };
    case USER_PREFERRED_ADDRESS_SUCCESS:
      console.log('action.payload.location', action.payload);
      return { loading: true, address: action.payload };
    case USER_PREFERRED_ADDRESS_ERROR:
      return { loading: false, error };
    default:
      return state;
  }
};
