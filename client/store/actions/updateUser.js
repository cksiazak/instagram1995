import { USER_INFO_GET, USER_INFO_UPDATE } from '../types';

export const updateUser = id => dispatch => {
  dispatch({ type: USER_INFO_UPDATE, payload: id });
};
