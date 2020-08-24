import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { setCount, setPrice } from "../actions/PageActions";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    const {
      price,
      count,
      setCounter,
      setPricing,
      data,
      activeIndex,
    } = this.props;
    return (
      <View style={styles.count}>
        <TouchableOpacity
          onPress={() => {
            count > 1 && setCounter(count - 1);
            // let n = +(price - data[activeIndex].prices.smallSize).toFixed(1);
            // setPricing(n);
          }}
        >
          <AntDesign name="minus" size={25} color="#CE9660" />
        </TouchableOpacity>
        <Text style={styles.countNum}>{count}</Text>
        <TouchableOpacity
          onPress={() => {
            setCounter(count + 1);
            // let n = +(count * data[activeIndex].prices.smallSize).toFixed(1);
            // setPricing(n);
          }}
        >
          <AntDesign name="plus" size={25} color="#CE9660" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  count: {
    flexDirection: "row",
    borderColor: "#CE9660",
    borderWidth: 2,
    borderRadius: 50,
    padding: 9,
    alignItems: "center",
  },
  countNum: {
    color: "#CE9660",
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 25,
  },
});

const mapStateToProps = (state) => ({
  data: state.data.data,
  activeIndex: state.data.activeIndex,
  price: state.payData.price,
  count: state.payData.count,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCounter: (count) => dispatch(setCount(count)),
    setPricing: (price) => dispatch(setPrice(price)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
