export const GET_WEATHER = "GET_DATA";
export const GET_LAT = "GET_LAT";
export const GET_LON = "GET_LON";

//API key and the URL
const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";
const API_URL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=${GET_LAT}&lon=${GET_LON}&exclude=hourly,minutely&units=metric&appid=${API_KEY}";

export const getWeather = () => {
  try {
    return async (dispatch) => {
      const results = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await results.json();
      if (json) {
        dispatch({
          type: GET_WEATHER,
          payload: json,
        });
      } else {
        console.log("Unable to fetch data from API");
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getLatitude = (latitude) => (dispatch) => {
  dispatch({
    type: GET_LAT,
    payload: latitude,
  });
};

export const getLongitude = (longitude) => (dispatch) => {
  dispatch({
    type: GET_LON,
    payload: longitude,
  });
};
