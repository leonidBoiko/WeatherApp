import {weatherUrl} from '../../constants';
import {SEARCH_ERROR, SEARCH_REQUEST, SEARCH_SUCCESS} from '../types';

export const fetchWeatherData = coords => async dispatch => {
  dispatch({type: SEARCH_REQUEST});
  try {
    const res = await fetch(weatherUrl(coords));
    const data = await res.json();
    const filteredData = data.daily.slice(0, -1).map((item, idx) => {
      return {
        id: idx + 1,
        date: new Date(item.dt * 1000),
        day: Math.round(item.temp.day),
        night: Math.round(item.temp.night),
        color: `#${idx}A69C0`,
      };
    });
    dispatch({
      type: SEARCH_SUCCESS,
      payload: filteredData,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_ERROR,
      payload: error,
    });
  }
};
