import React from "react";
import { View, ScrollView, Text } from "react-native";

const weather_scroll = () => {
  return (
    <ScrollView>
      <CurrentTempE1 />
    </ScrollView>
  );
};

const CurrentTempE1 = () => {
  return (
    <View>
      <Image />
      <Text>Sunday</Text>
      <Text>Night - 28&#176;C</Text>
      <Text>Day - 35&#176;C</Text>
    </View>
  );
};

export default weather_scroll;
