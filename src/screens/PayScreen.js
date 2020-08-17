import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";

class PayScreen extends Component {
  render() {
    const { data, activeIndex, pay } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            // ...StyleSheet.absoluteFillObject
            paddingTop: 20,
            paddingLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={40} color="#CE9660" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.ticket}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: 30,
                }}
              >
                <Text style={styles.line}>Name: </Text>
                <Text style={styles.name}>{data[activeIndex].name}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: 30,
                }}
              >
                <Text style={styles.line}>Size: </Text>
                <Text style={styles.size}>{pay.sizeName}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: 30,
                }}
              >
                <Text style={styles.line}>Count: </Text>
                <Text style={styles.count}>{pay.conter}</Text>
              </View>
            </View>
            <View
              style={{
                borderStyle: "solid",
                borderTopColor: "#CE9660",
                borderTopWidth: 1.5,
                paddingTop: 20,
                marginTop: 20,
                paddingBottom: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: 30,
                }}
              >
                <Text style={styles.line}>Price: </Text>
                <Text style={styles.price}>{pay.pricing} $</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.pay}>
          <Text style={styles.payButton}>PAY</Text>
          <MaterialIcons
            style={{ marginRight: 10 }}
            name="payment"
            size={30}
            color="#fff"
          />
          <FontAwesome5 name="apple-pay" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#533A20",
    flex: 1,
  },
  ticket: {
    borderWidth: 2,
    borderColor: "#CE9660",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 50,
    padding: 14,
  },
  pay: {
    flexDirection: "row",
    backgroundColor: "#CE9660",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  payButton: {
    color: "#fff",
    fontSize: 30,
    marginRight: 14,
    fontWeight: "700",
  },
  line: {
    color: "#fff",
    fontSize: 20,
    opacity: 0.7,
    paddingLeft: 30,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    opacity: 0.9,
  },
  size: {
    color: "#fff",
    fontSize: 20,
    opacity: 0.9,
  },
  count: {
    color: "#fff",
    fontSize: 20,
    opacity: 0.9,
  },
  price: {
    color: "#fff",
    fontSize: 20,
    opacity: 0.9,
  },
});

const mapStateToProps = (state) => ({
  data: state.data.data,
  activeIndex: state.data.activeIndex,
  pay: state.payData.pay,
});

export default connect(mapStateToProps)(PayScreen);
