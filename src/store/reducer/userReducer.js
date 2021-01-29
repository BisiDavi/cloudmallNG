import {
  USER_PREFERRED_ADDRESS_ENTERED,
  USER_PREFERRED_ADDRESS_SUCCESS,
  USER_PREFERRED_ADDRESS_ERROR
} from '../constant';
import { axiosInstance } from '../../axios';

const submitUserAddress = userAddressArray => {
  if (userAddressArray.length > 2) {
    const userLocation = userAddressArray[0];
    const LGA = userAddressArray[1];
    const userState = userAddressArray[2];

    axiosInstance
      .post('/app/landing', { userLocation, LGA, userState })
      .then(result => {
        loading: false;
        address: userLocation;
        console.log(result, 'successful');
        console.log(loading, 'submitUserAddress loading');
        console.log(address, 'submitUserAddress address');
      })
      .catch(err => console.log(err));
  }
};
export const UserPreferredAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PREFERRED_ADDRESS_ENTERED:
      return { loading: true };
    case USER_PREFERRED_ADDRESS_SUCCESS:
      const location = action.payload;
      const userAddressArray = location.split(',');
      submitUserAddress(userAddressArray);
    case USER_PREFERRED_ADDRESS_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
