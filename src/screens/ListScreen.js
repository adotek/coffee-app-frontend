import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import ListItem from "../components/ListItem";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { WIDTH, HEIGHT } from "../Constants";

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    this.getDrinksList();
  };

  getDrinksList = async () => {
    try {
      const response = await fetch(
        `https://cafe-drinks-api.herokuapp.com/drinks`
      );
      const json = await response.json();
      setTimeout(() => this.setState({ data: json }), 500);
    } catch (e) {
      console.warn(e);
    }
  };

  render() {
    const { data } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.bg} source={require("../../assets/bg.jpeg")} />
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              height: 100,
              width: 100,
              backgroundColor: "white",
            }}
          >
            <Text>asdasdasd</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          {data.length > 0 ? (
            data.map((el, i) => (
              <ListItem
                key={el + i}
                price={el.price}
                name={el.name}
                picture={"../../assets/cup.png"}
                describe={"try coffees from Keniya, Ethiopia"}
              />
            ))
          ) : (
            <View
              style={{
                height: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size={50} color="#D3A170" />
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#533A20",
  },
  list: {
    padding: 10,
  },
  block: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  bg: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: WIDTH,
    height: 250,
  },
});
