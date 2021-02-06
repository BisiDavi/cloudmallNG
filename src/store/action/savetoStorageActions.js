import {
  SAVE_TO_LOCALSTORAGE_ERROR,
  SAVE_TO_LOCALSTORAGE_SUCCESSFUL
} from '../constant';

export const SaveToStorage = (itemName, itemValue) => dispatch => {
  try {
    dispatch({
      type: SAVE_TO_LOCALSTORAGE_SUCCESSFUL,
      payload:{
        name:itemName,
        value: itemValue
      }
    });
  } catch (error) {
    dispatch({
      type: SAVE_TO_LOCALSTORAGE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
