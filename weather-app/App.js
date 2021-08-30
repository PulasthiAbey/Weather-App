import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import DateTime from "./components/date_time";
import WeatherScroll from "./components/weather_scroll";

// api key
const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";

const img = require("./assets/image.png");

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        fetchDataFromApi("40.7128", "-74.0060");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchDataFromApi = (latitude, longitude) => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setData(data);
        });
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.imageStyle}>
        <DateTime
          current={data.current}
          lat={data.lat}
          lon={data.lon}
          timezone={data.timezone}
        />
        <WeatherScroll weatherData={data.daily} />
      </ImageBackground>
    </View>
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
