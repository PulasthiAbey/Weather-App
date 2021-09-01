import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import { getWeather, getLatitude, getLongitude } from "./src/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import DateTime from "./src/components/date_time";
import WeatherScroll from "./src/components/weather_scroll";

// API KEY
// const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";

const img = require("./assets/image.png");

export default function App() {
  // const [data, setData] = useState({});
  const { latitude, longitude, weather } = useSelector(
    (state) => state.apiCallReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // fetchDataFromApi();
        dispatch(getWeather());
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      latitude = location.coords.latitude;
      longitude = location.coords.longitude;
      dispatch(getLongitude(longitude));
      dispatch(getLatitude(latitude));
    })();
  }, []);

  // const fetchDataFromApi = (latitude, longitude) => {
  //   if (latitude && longitude) {
  //     fetch(
  //       `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data)
  //         setData(data);
  //       });
  //   }
  // };
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <ImageBackground source={img} style={styles.imageStyle}>
          <DateTime
          // current={weather.current}
          // lat={weather.lat}
          // lon={weather.lon}
          // timezone={weather.timezone}
          />
          <WeatherScroll
          // weatherData={data.daily}
          />
        </ImageBackground>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageStyle: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
