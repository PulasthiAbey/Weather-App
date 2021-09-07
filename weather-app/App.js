import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch, useSelector, Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getWeather } from "./src/store/actions/weatherActions";
import Form from "./src/components/Form";
import Weather from "./src/components/Weather";
import ListItems from "./src/components/ListItems";
import ListWeather from "./src/components/ListWeather";
import store from "./src/store/index";

const Stack = createStackNavigator();

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={App} />
          <Stack.Screen name="weather" component={Weather} />
        </Stack.Navigator>
      </NavigationContainer>
      <App />
    </Provider>
  );
};

export default AppWrapper;
