import { GET_LON, GET_LAT, GET_WEATHER, GET_DATE, GET_TIME } from "./actions";

const initialState = {
  latitude: "6.9271",
  longitude: "79.8612",
  weather: {},
  dateItem: "",
  timeItem: "",
};

function apiCallReducer(state = initialState, action) {
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

function settingUpDateReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATE:
      return { ...state, dateItem: action.payload };

    case GET_TIME:
      return { ...state, timeItem: action.payload };

    default:
      return state;
  }
}

export default apiCallReducer;
export default settingUpDateReducer;
