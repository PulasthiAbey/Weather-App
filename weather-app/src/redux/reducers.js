import { GET_LON, GET_LAT, GET_WEATHER } from "./actions";

const initialState = {
  latitude: "6.9271",
  longitude: "79.8612",
  weather: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LAT:
      return { ...state, latitude: action.payload };

    case GET_LON:
      return { ...state, longitude: action.payload };

    case GET_WEATHER:
      return { ...state, weather: action.payload };

    default:
      return state;
  }
}
