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
      const userAddress = action.payload;
      const userAddressArray = userAddress.split(',');
      if (userAddressArray.length > 2) {
        const userLocation = userAddressArray[0];
        const userLGA = userAddressArray[1];
        const userState = userAddressArray[2];
        return {
          userLocation,
          userLGA,
          userState
        };
      }
      return {
        loading: true,
        address: action.payload,
        street: userLocation,
        LGA: userLGA,
        state: userState
      };
    case USER_PREFERRED_ADDRESS_ERROR:
      return { loading: false, error };
    default:
      return state;
  }
};
