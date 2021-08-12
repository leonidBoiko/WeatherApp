export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const weatherUrl = ({lat, lng}) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=current,hourly,minutely,alerts&units=metric&appid=c04a4d83b9541e92adc8c0f91c9b5f43`;
};
