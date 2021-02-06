import {
  SAVE_TO_LOCALSTORAGE_ERROR,
  SAVE_TO_LOCALSTORAGE_SUCCESSFUL
} from '../constant';

const saveAddressToStorage = payload => {
  window.localStorage.setItem(payload.name, payload.value);
};
export const SaveToStorageReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SAVE_TO_LOCALSTORAGE_SUCCESSFUL:
      saveAddressToStorage(payload);
      return { savedToLocalStorage: true, value:payload.value };
    case SAVE_TO_LOCALSTORAGE_ERROR:
      return { savedToLocalStorage: false, error: payload };
    default:
      return state;
  }
};
