import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.url = this.props.picture;
  }
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.block}>
          <Image style={styles.icon} source={require(`../../assets/cup.png`)} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Text style={styles.title}>{this.props.name}</Text>
          {/*<Text style={styles.price}>${this.props.price}</Text>*/}
          <Image
            style={styles.priceImg}
            source={require("../../assets/sizes.png")}
          />
        </View>
        <View style={{ paddingRight: 10, paddingLeft: 10 }}>
          <Text style={styles.describe}>{this.props.describe}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CE9660",
    width: 150,
    height: 200,
    borderRadius: 20,
    margin: 20,
  },
  title: {
    color: "#fff",
    fontSize: 17,
  },
  icon: {
    width: 120,
    height: 120,
  },
  block: {
    alignItems: "center",
    marginTop: 5,
  },
  price: {
    color: "#4D3617",
    fontSize: 25,
  },
  priceImg: {
    width: 50,
    height: 30,
    opacity: 0.5,
  },
  describe: {
    color: "#4D3617",
    fontSize: 12,
    opacity: 0.7,
    fontWeight: "700",
  },
});
