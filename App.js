import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigators/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/configureStore";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    Arciform: require("./assets/fonts/light.otf"),
    Trampoline: require("./assets/fonts/trampoline.ttf"),
    "Indie-Flower": require("./assets/fonts/IndieFlower-Regular.ttf"),
    Pangolin: require("./assets/fonts/Pangolin-Regular.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
