import {
  USER_PREFERRED_ADDRESS_ENTERED,
  USER_PREFERRED_ADDRESS_ERROR
} from '../../imports';


export const userPreferredAddressReducer = (state={}, action ) => {
  switch(action.type){
    case USER_PREFERRED_ADDRESS_ENTERED: 
    return {loading: true}
    case USER_PREFERRED_ADDRESS_ERROR:
      return {loading: false}
    default:
      return state;
  }
}