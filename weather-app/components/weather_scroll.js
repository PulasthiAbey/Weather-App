import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";

import FutureForecast from "./future_forecast";

const weather_scroll = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTempE1 />
      <FutureForecast />
    </ScrollView>
  );
};

// scrolling component
const CurrentTempE1 = () => {
  const img = {
    uri: "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png",
  };
  return (
    <View style={styles.currentTempContainer}>
      <Image source={img} style={styles.image} />
      <View style={styles.otherContainer}>
        <Text style={styles.day}>Sunday</Text>
        <Text style={styles.temp}>Night - 28&#176;C</Text>
        <Text style={styles.temp}>Day - 35&#176;C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.4,
    backgroundColor: "#18181bcc",
    padding: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  currentTempContainer: {
    flexDirection: "row",
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 15,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  otherContainer: {
    paddingRight: 40,
  },
});

export default weather_scroll;
