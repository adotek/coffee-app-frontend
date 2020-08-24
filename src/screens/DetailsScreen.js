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
import { WIDTH, HEIGHT } from "../Constants";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import PayButton from "../components/PayButton";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

import { setPrice, setCount, setSize } from "../actions/PageActions";
import Counter from "../components/Counter";

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      value3Index: 0,
    };
  }

  componentDidMount = () => {
    const { setPricing, data, activeIndex } = this.props;
    setPricing(data[activeIndex].prices.smallSize);
  };

  render() {
    const {
      data,
      activeIndex,
      setPricing,
      price,
      setCounter,
      count,
      setActiveSize,
    } = this.props;
    const { value3Index } = this.state;
    const radio_props = [
      {
        label: "0.20 ml",
        value: data[activeIndex].prices.smallSize,
        size: "Small",
      },
      {
        label: "0.30 ml",
        value: data[activeIndex].prices.mediumSize,
        size: "Medium",
      },
      {
        label: "0.40 ml",
        value: data[activeIndex].prices.bigSize,
        size: "Big",
      },
    ];
    console.log((price * count).toFixed(2));
    return (
      <View style={styles.container}>
        <Image style={styles.bg} source={require("../../assets/bg_pay.jpg")} />
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            flex: 1,
            alignItems: "flex-start",
            paddingTop: 20,
            paddingLeft: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setPricing(0);
              setCounter(1);
              this.props.navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={40} color="#CE9660" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{data[activeIndex].name}</Text>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 10,
          }}
        >
          <RadioForm formHorizontal={true} animation={true}>
            {radio_props.map((obj, i) => {
              return !!obj.value ? (
                <RadioButton labelHorizontal={false} key={i}>
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={value3Index === i}
                    onPress={(value) => {
                      setPricing(value);
                      this.setState({ value3Index: i });
                    }}
                    borderWidth={2}
                    buttonInnerColor={"#CE9660"}
                    buttonOuterColor={value3Index === i ? "#CE9660" : "#CE9660"}
                    buttonSize={20}
                    buttonOuterSize={30}
                    buttonStyle={{}}
                    buttonWrapStyle={{ marginLeft: 10 }}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={(value) => {
                      setPricing(value);
                      this.setState({ value3Index: i });
                    }}
                    labelStyle={{
                      fontSize: 15,
                      color: "rgba(241,241,241,0.83)",
                    }}
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              ) : null;
            })}
          </RadioForm>
        </View>

        <View style={styles.priceCount}>
          <Counter />
          <View>
            <Text style={styles.price}>
              {`${(price * count).toFixed(2)} $`}
            </Text>
          </View>
        </View>
        <ScrollView style={{ marginTop: 20, marginBottom: 5 }}>
          <Text style={styles.describe}>
            Caffe Americano is a type of coffee drink prepared by diluting an
            espresso with hot water, giving it a similar strength to, but
            different flavor from, traditionally brewed coffee. The strength of
            an Americano varies with the number of shots of espresso and the
            amount of water added. The name is also spelled with varying
            capitalization and use of diacritics: e.g., café americano. InItaly,
            caffè americano could mean either espresso with hot water or
            filtered coffee (caffè all'americana).
          </Text>
        </ScrollView>

        <PayButton
          title="Go to Pay"
          onPress={() => {
            setActiveSize(radio_props[value3Index].size);
            this.props.navigation.navigate("PayScreen");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#533A20",
    flex: 1,
  },
  bg: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: WIDTH,
    height: 250,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    opacity: 0.9,
    paddingLeft: 20,
    paddingTop: 20,
  },
  price: {
    color: "#CE9660",
    fontSize: 25,
  },
  priceCount: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 30,
    paddingRight: 30,
    paddingLeft: 30,
    alignItems: "center",
  },
  describe: {
    color: "#fff",
    opacity: 0.7,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontFamily: "Indie-Flower",
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
    setPricing: (price) => dispatch(setPrice(price)),
    setCounter: (count) => dispatch(setCount(count)),
    setActiveSize: (adtiveSize) => dispatch(setSize(adtiveSize)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
