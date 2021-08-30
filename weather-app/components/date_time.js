import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import moment from "moment-timezone";

// days & months array
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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

const date_time = ({ current, lat, lon, timezone }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HourFormat = hour >= 13 ? hour % 12 : hour;
      const minute = time.getMinutes();
      const ampm = hour > 12 ? "PM" : "AM";

      setTime(
        (hoursIn12HourFormat < 10
          ? "0" + hoursIn12HourFormat
          : hoursIn12HourFormat) +
          " : " +
          (minute < 10 ? "0" + minute : minute) +
          " " +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);

  return (
    //   containers for the date and time functions in the app
    <View style={styles.container}>
      {/* Date container */}
      <View>
        <View>
          <Text style={styles.heading}>{time}</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>{date}</Text>
        </View>
        {/* weather item container */}
        <View style={styles.weatherItemContainer}>
          <WeatherItem
            title="Humidity"
            value={current ? current.humidity : ""}
            unit="%"
          />
          <WeatherItem
            title="Pressure"
            value={current ? current.pressure : ""}
            unit="hPA"
          />
          <WeatherItem
            title="Sunrise"
            value={
              current
                ? moment.tz(current.sunrise * 1000, timezone).format("HH:mm")
                : ""
            }
            unit="am"
          />
          <WeatherItem
            title="Sunset"
            value={
              current
                ? moment.tz(current.sunset * 1000, timezone).format("HH:mm")
                : ""
            }
            unit="pm"
          />
        </View>
      </View>

      {/* latitude and location */}
      <View style={styles.rightAlign}>
        <Text style={styles.timeZone}>{timezone}</Text>
        <Text style={styles.latLong}>
          {lat}M {lon}E
        </Text>
      </View>
    </View>
  );
};

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
