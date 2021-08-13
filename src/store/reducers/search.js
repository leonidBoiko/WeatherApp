import {SEARCH_ERROR, SEARCH_REQUEST, SEARCH_SUCCESS} from '../types';

const initialState = {
  dataList: [],
  loading: false,
  error: null,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SUCCESS:
      console.log('action.payload', action.payload);
      return {
        ...state,
        dataList: [...action.payload],
        loading: false,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
