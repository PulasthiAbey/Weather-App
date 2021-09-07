import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch, useSelector, Provider } from "react-redux";
import { getWeather } from "./src/store/actions/weatherActions";
import Form from "./Form";
import Weather from "./Weather";
import ListItems from "./ListItems";
import store from "./src/store/index";

const BindingApp = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.weather);

  const searchSubmitHandler = () => {
    if (search === "") {
      return Alert.alert("Validation", "City name is required!", [
        { text: "OK" },
      ]);
    }

    setLoading(true);
    dispatch(
      getWeather(
        search,
        () => setLoading(false),
        () => setLoading(false)
      )
    );
    setSearch("");
    Keyboard.dismiss();
  };

  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Form
            search={search}
            onSetSearch={setSearch}
            onSubmit={searchSubmitHandler}
          />
          <ListItems navigation={navigation} />
          <Weather loading={loading} data={data} error={error} />
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BindingApp;
