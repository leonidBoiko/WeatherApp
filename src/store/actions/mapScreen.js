import {currentWeatherUrl, locationUrl} from '../../constants';
import {
  LOCATION_REQUEST,
  LOCATION_ERROR,
  LOCATION_SUCCESS,
  CURRENT_TEMP_REQUEST,
  CURRENT_TEMP_ERROR,
  CURRENT_TEMP_SUCCESS,
} from '../types';

export const fetchCurrentTemp = props => async dispatch => {
  dispatch({type: CURRENT_TEMP_REQUEST});
  try {
    const res = await fetch(currentWeatherUrl(props));
    const data = await res.json();
    dispatch({
      type: CURRENT_TEMP_SUCCESS,
      payload: data.current.temp,
    });
  } catch (error) {
    dispatch({type: CURRENT_TEMP_ERROR, payload: error});
  }
};

export const fetchLocation = props => async dispatch => {
  dispatch({type: LOCATION_REQUEST});
  try {
    const res = await fetch(locationUrl(props));
    const data = await res.json();
    const resString = data.plus_code.compound_code.split(' ');
    const filterStr = resString.slice(1, resString.length).join(' ');
    dispatch({
      type: LOCATION_SUCCESS,
      payload: filterStr,
    });
  } catch (error) {
    dispatch({type: LOCATION_ERROR, payload: error});
  }
};
