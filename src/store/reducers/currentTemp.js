import {
  CURRENT_TEMP_ERROR,
  CURRENT_TEMP_REQUEST,
  CURRENT_TEMP_SUCCESS,
} from '../types';

export const currentTempReducer = (state, action) => {
  if (state === undefined) {
    return {
      temp: null,
      loading: false,
      error: null,
    };
  }
  switch (action.type) {
    case CURRENT_TEMP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CURRENT_TEMP_SUCCESS:
      return {
        ...state,
        temp: action.payload,
        loading: false,
      };
    case CURRENT_TEMP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
