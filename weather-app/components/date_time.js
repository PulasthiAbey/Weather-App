import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

// weather item component to retrieve the data
const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemTitle}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

function date_time() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {}, []);
  
  return (
    //   containers for the date and time functions in the app
    <View style={styles.container}>
      {/* Date container */}
      <View>
        <View>
          <Text style={styles.heading}>12.30 am</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>Monday, Aug 30</Text>
        </View>
        {/* weather item container */}
        <View style={styles.weatherItemContainer}>
          <WeatherItem title="Humidity" value="79" unit="%" />
          <WeatherItem title="Pressure" value="1.1" unit="bar" />
          <WeatherItem title="Sunrise" value="06:00" unit="am" />
          <WeatherItem title="Sunset" value="06:30" unit="pm" />
        </View>
      </View>

      {/* latitude and location */}
      <View style={styles.rightAlign}>
        <Text style={styles.timeZone}>Colombo, Sri Lanka</Text>
        <Text style={styles.latLong}>4.22M 50E</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space - between",
    padding: 20,
  },

  heading: {
    fontSize: 45,
    color: "#EEE",
    fontWeight: "100",
  },

  subHeading: {
    fontSize: 25,
    color: "#EEE",
    fontWeight: "300",
  },

  rightAlign: {
    textAlign: "right",
    marginTop: 20,
  },

  timeZone: {
    fontSize: 20,
    color: "white",
  },

  latLong: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },

  weatherItemContainer: {
    backgroundColor: "#18181B99",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },

  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  weatherItemTitle: {
    color: "#EEE",
    fontSize: 14,
    fontWeight: "100",
  },
});

export default date_time;
