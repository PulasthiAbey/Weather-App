import React from "react";
import { Alert, FlatList, TouchableHighlight } from "react-native";

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
          <TouchableHighlight onPress={() => navigation.navigate("weather", {key})}>
            {" "}
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
