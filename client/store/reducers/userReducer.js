import { USER_INFO_GET, USER_INFO_UPDATE } from '../types';

const initialState = {
  userID: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO_GET:
      return {
        ...state
      };
    case USER_INFO_UPDATE:
      return {
        ...state,
        userID: action.payload
      };
    default:
      return state;
  }
};
