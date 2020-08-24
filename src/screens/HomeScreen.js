import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ripple from "react-native-material-ripple";

export default class HomeScreen extends Component {
  render() {
    return (
      <>
        {/* <ProfileStackNavigator /> */}
        <View style={styles.container}>
          <StatusBar hidden />
          <View style={styles.content}>
            <Image
              style={styles.icon}
              source={require("../../assets/cofe_cup.png")}
            />
            <Text style={styles.text}>COFFE SHOP</Text>
          </View>
          <View style={{ marginTop: 200 }}>
            <Ripple
              rippleSize={0}
              rippleContainerBorderRadius={8}
              style={styles.button}
              onPress={() => this.props.navigation.navigate("ListScreen")}
            >
              <Text style={styles.buttonText}>Get coffee</Text>
            </Ripple>
            <Ripple
              rippleSize={0}
              style={styles.button}
              onPress={() => this.props.navigation.navigate("AuthScreen")}
            >
              <Text style={styles.buttonText}>Autorization</Text>
            </Ripple>

            <TouchableOpacity
              style={styles.contacts}
              onPress={() => this.props.navigation.navigate("ContactsScreen")}
            >
              <Text style={styles.contactsText}>Contacts</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
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
    fontSize: 70,
    fontFamily: "Trampoline",
  },
  content: {
    alignItems: "center",
    marginTop: 100,
  },
  button: {
    backgroundColor: "#533A20",
    padding: 20,
    width: 250,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Arciform",
  },
  contactsText: {
    color: "#533A20",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Arciform",
  },
  contacts: {
    marginTop: 20,
    width: 250,
    padding: 20,
  },
});
