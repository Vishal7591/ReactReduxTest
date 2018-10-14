import * as types from './../constants/actionTypes';
import initialState from './initialState';

export default (state = initialState.common, action) => {
  switch (action.type) {
    case types.GET_USERDATA_REQUEST:
      return { ...state, loading: true };
    case types.GET_USERDATA_SUCCESS:
      return { ...state, loading: false, success: action.agent };
    case types.GET_USERDATA_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
