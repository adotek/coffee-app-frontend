import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import DetailsScreen from "../screens/DetailsScreen";
import PayScreen from "../screens/PayScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileStackNavigator from "./ProfileStackNavigator";
import ContactsScreen from "../screens/ContactsScreen";

const Stack = createStackNavigator();

export default class HomeStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="HomeScreen"
          component={ProfileStackNavigator}
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
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="PayScreen"
          component={PayScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="ContactsScreen"
          component={ContactsScreen}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  arrow: {
    paddingLeft: 20,
    paddingTop: 22,
  },
});
