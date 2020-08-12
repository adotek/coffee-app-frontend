import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.content}>
          <Image
            style={styles.icon}
            source={require("../../assets/cofe_cup.png")}
          />
          <Text style={styles.text}>COFFE SHOP</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("ListScreen")}
        >
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 300,
    height: 170,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D3A170",
  },
  text: {
    color: "#563014",
    fontWeight: "bold",
    fontSize: 30,
  },
  content: {
    alignItems: "center",
    marginTop: 100,
  },
  button: {
    backgroundColor: "#533A20",
    padding: 20,
    width: 250,
    borderRadius: 50,
    marginTop: 300,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
});
