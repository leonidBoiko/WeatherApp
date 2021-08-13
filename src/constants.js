export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const WEATHER_API_KEY = 'c04a4d83b9541e92adc8c0f91c9b5f43';
export const GOOGLE_PLACES_API_KEY = 'AIzaSyBl2tUhCgALkUYgfeTcIKtakqy_vSPy8P4';
export const weatherUrl = ({lat, lng}) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=current,hourly,minutely,alerts&units&appid=${WEATHER_API_KEY}`;
};
export const currentWeatherUrl = ({latitude, longitude}) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,daily,alerts&units=metric&appid=${WEATHER_API_KEY}`;
};
export const locationUrl = ({latitude, longitude}) => {
  return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_PLACES_API_KEY}`;
};
