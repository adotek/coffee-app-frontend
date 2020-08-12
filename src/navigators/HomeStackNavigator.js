import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import DetailsScreen from "../screens/DetailsScreen";
import PayScreen from "../screens/PayScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class HomeStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="PayScreen" component={PayScreen} />
      </Stack.Navigator>
    );
  }
}
