import { GET_WEATHER, SET_ERROR } from "../types";
// import { openweathermap_api_key } from '../../config.json';

// api key
const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";

export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
      }

      const resData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
      onSuccess();
    } catch (err) {
      dispatch(setError(err.message));
      onError();
    }
  };
};

const setError = (err) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
