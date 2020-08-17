import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class PayButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onPress, title } = this.props;
    return (
      <TouchableOpacity style={styles.order} onPress={onPress}>
        <View style={styles.orderBlock}>
          <Text style={styles.orderText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  order: {
    backgroundColor: "#CE9660",
  },
  orderBlock: {
    alignItems: "center",
    justifyContent: "center",
  },
  orderText: {
    color: "#fff",
    height: 60,
    fontSize: 23,
    padding: 15,
    fontFamily: "Arciform",
  },
});

export default PayButton;
