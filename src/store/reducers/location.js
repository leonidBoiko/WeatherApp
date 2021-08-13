import {LOCATION_ERROR, LOCATION_REQUEST, LOCATION_SUCCESS} from '../types';

const initialState = {
  location: null,
  loading: false,
  error: null,
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOCATION_SUCCESS:
      return {
        ...state,
        location: action.payload,
        loading: false,
      };
    case LOCATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
