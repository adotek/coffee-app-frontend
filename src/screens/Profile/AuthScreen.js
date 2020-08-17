import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { WIDTH, HEIGHT } from "../../Constants";
import { AntDesign } from "@expo/vector-icons";

export default class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            paddingTop: 20,
            paddingLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={40} color="#533A20" />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.img}
            source={require("../../../assets/auth.png")}
          />
          <Text style={styles.title}>Autorization</Text>
          <View style={{ marginTop: 120 }}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                // console.log(text);
              }}
              // value={""}
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                // console.log(text);
              }}
              // value={""}
            />
            <TouchableOpacity style={styles.loginButton}>
              <Text style={{ color: "#D3A170" }}>Login</Text>
            </TouchableOpacity>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity style={styles.recoveruButton}>
                <Text style={{ color: "#D3A170" }}>Forgot Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.recoveruButton}
                onPress={() =>
                  this.props.navigation.navigate("RegistrationScreen")
                }
              >
                <Text style={{ color: "#D3A170" }}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3A170",
  },
  img: {
    width: 250,
    height: 160,
    marginTop: 100,
    opacity: 0.7,
  },
  input: {
    height: 40,
    borderColor: "#533A20",
    borderWidth: 1,
    color: "#D3A170",
    width: 340,
    backgroundColor: "#533A20",
    opacity: 0.9,
    padding: 10,
    borderRadius: 50,
    fontWeight: "700",
    marginTop: 10,
    fontSize: 20,
    height: 50,
  },
  title: {
    fontFamily: "Pangolin",
    color: "#533A20",
    fontSize: 40,
    paddingTop: 30,
  },
  loginButton: {
    backgroundColor: "#533A20",
    opacity: 0.9,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  recoveruButton: {
    backgroundColor: "#533A20",
    opacity: 0.9,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: 165,
  },
});
