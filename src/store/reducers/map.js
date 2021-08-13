import {GET_MAP_DATA_REQUEST} from '../types';

const initialState = {
  coords: {
    latitude: 50.49558653006826,
    longitude: 30.554091297090057,
    latitudeDelta: 12.8,
    longitudeDelta: 15.06,
  },
  location: [],
  temp: null,
  loading: false,
  error: null,
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAP_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MAP_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
