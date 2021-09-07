import React, { useState } from "react";
import {
  Alert,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const [loading, setLoading] = useState(false);
const dispatch = useDispatch();
const { data } = useSelector((state) => state.weather);

const pressHandler = (key) => {
  console.log(key);
  setLoading(true);
  dispatch(
    getWeather(
      key,
      () => setLoading(false),
      () => setLoading(false)
    )
  );
};

const ListItems = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "Colombo" },
          { key: "Galle" },
          { key: "Jaffna" },
          { key: "Kandy" },
          { key: "London" },
          { key: "New York" },
          { key: "Moscow" },
          { key: "Dublin" },
        ]}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => navigation.navigate("weather", { city: item.key })}
          >
            <Text style={styles.item}>{item.key}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default ListItems;
