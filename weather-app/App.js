import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import DateTime from "./components/date_time";
import WeatherScroll from "./components/weather_scroll";

const img = require("./assets/image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.imageStyle}>
        <DateTime />
        <WeatherScroll />
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
