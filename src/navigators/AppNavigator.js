import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeStackNavigator from "./HomeStackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    );
  }
}
