import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import AuthScreen from "../screens/Profile/AuthScreen";
import RegistrationScreen from "../screens/Profile/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

export default class ProfileStackNavigator extends Component {
  render() {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={() => ({
            headerShown: false,
          })}
        />
      </AuthStack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  arrow: {
    paddingLeft: 20,
    paddingTop: 22,
  },
});
