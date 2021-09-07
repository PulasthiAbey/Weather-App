import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import WeatherData from "./WeatherData";

const ListWeather = ({ route, navigation }) => {
  const { city } = route.params;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.weather);

  dispatch(
    getWeather(
      city,
      () => setLoading(false),
      () => setLoading(false)
    )
  );

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (!loading && !data) {
    return null;
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00d1b2" />
      ) : (
        <WeatherData data={data} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  error: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
  },
});

export default ListWeather;
