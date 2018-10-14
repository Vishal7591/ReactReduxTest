import axios from 'axios';
import * as types from './../constants/actionTypes';
import * as config from './../constants/config';

export function getUserDataRequest() {
  return { type: types.GET_USERDATA_REQUEST };
}

export function getUserDataSuccess(userData) {
  return { type: types.GET_USERDATA_SUCCESS, userData };
}

export function getUserDataFail(error) {
  return { type: types.GET_USERDATA_FAIL, error };
}

export function getUserData() {
  return (dispatch) => {
    dispatch(getUserDataRequest());
    return axios
      .post(`${config.PUBLIC_URL}5b9751e5300000332a0bd52d`)
      .then((response) => {
        dispatch(getUserDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUserDataFail(error));
      });
  };
}