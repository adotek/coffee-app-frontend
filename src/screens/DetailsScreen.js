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
import { setPay } from "../actions/PageActions";

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      small: this.props.data[this.props.activeIndex].prices.smallSize,
      medium: this.props.data[this.props.activeIndex].prices.mediumSize,
      big: this.props.data[this.props.activeIndex].prices.bigSize,
      size: 0,
      price: 0,
      payData: {
        sizeCup: 0,
        pricing: 0,
        conter: 0,
        sizeName: "",
      },
    };
  }

  getSizes() {
    const {
      small,
      big,
      medium,
      count,
      price,
      size,
      coffePrice,
      payData,
    } = this.state;
    const { setPayData } = this.props;
    if (this.props.data[this.props.activeIndex].prices.bigSize !== null) {
      return (
        <>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                count: 1,
                size: small,
                price: small,
                payData: {
                  sizeCup: size,
                  pricing: price,
                  conter: count,
                  sizeName: "Small Size",
                },
              })
            }
          >
            <Image
              style={styles.small}
              source={require("../../assets/cup.png")}
            />
            <Text style={styles.volume}>0.20 ml</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                size: medium,
                count: 1,
                price: medium,
                payData: {
                  sizeCup: size,
                  pricing: price,
                  conter: count,
                  sizeName: "Medium Size",
                },
              })
            }
          >
            <Image
              style={styles.middle}
              source={require("../../assets/cup.png")}
            />
            <Text style={styles.volume}>0.30 ml</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                size: big,
                count: 1,
                price: big,
                payData: {
                  sizeCup: size,
                  pricing: price,
                  conter: count,
                  sizeName: "Big Size",
                },
              })
            }
          >
            <Image
              style={styles.big}
              source={require("../../assets/cup.png")}
            />
            <Text style={styles.volume}>0.40 ml</Text>
          </TouchableOpacity>
        </>
      );
    } else if (
      this.props.data[this.props.activeIndex].prices.mediumSize !== null
    ) {
      return (
        <>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                count: 1,
                size: small,
                price: small,
                payData: {
                  sizeCup: size,
                  pricing: price,
                  conter: count,
                  sizeName: "Small Size",
                },
              })
            }
          >
            <Image
              style={styles.small}
              source={require("../../assets/cup.png")}
            />
            <Text style={styles.volume}>0.20 ml</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                size: medium,
                count: 1,
                price: medium,
                payData: {
                  sizeCup: size,
                  pricing: price,
                  conter: count,
                  sizeName: "Medium Size",
                },
              });
              setPayData(payData);
            }}
          >
            <Image
              style={styles.middle}
              source={require("../../assets/cup.png")}
            />
            <Text style={styles.volume}>0.30 ml</Text>
          </TouchableOpacity>
        </>
      );
    } else if (
      this.props.data[this.props.activeIndex].prices.mediumSize == null
    ) {
      return (
        <TouchableOpacity
          onPress={() =>
            this.setState({
              count: 1,
              size: small,
              price: small,
              payData: {
                sizeCup: size,
                pricing: price,
                conter: count,
                sizeName: "Small Size",
              },
            })
          }
        >
          <Image
            style={styles.small}
            source={require("../../assets/cup.png")}
          />
          <Text style={styles.volume}>0.20 ml</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    const { data, activeIndex, setPayData, pay } = this.props;
    const {
      small,
      big,
      medium,
      count,
      price,
      size,
      coffePrice,
      payData,
    } = this.state;
    console.log("render ----> ", payData);
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
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={40} color="#CE9660" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{data[activeIndex].name}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 5,
          }}
        >
          {this.getSizes()}
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingTop: 30,
            paddingRight: 30,
            paddingLeft: 30,
            alignItems: "center",
          }}
        >
          <View style={styles.count}>
            <TouchableOpacity
              onPress={() => {
                // let sum = parseInt(() * 10) / 10;
                let n = +(price - size).toFixed(1);
                this.setState({
                  count: count - 1,
                  price: n,
                  payData: {
                    sizeCup: size,
                    pricing: price,
                    conter: count,
                    sizeName: this.state.payData.sizeName,
                  },
                });
                setPayData(payData);
                return;
              }}
            >
              <AntDesign name="minus" size={25} color="#CE9660" />
            </TouchableOpacity>
            <Text style={styles.countNum}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                let n = +(price + size).toFixed(1);
                this.setState({
                  count: count + 1,
                  price: n,
                  payData: {
                    sizeCup: size,
                    pricing: price,
                    conter: count,
                    sizeName: this.state.payData.sizeName,
                  },
                });
                setPayData(payData);
              }}
            >
              <AntDesign name="plus" size={25} color="#CE9660" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.price}>
              {/* {data[activeIndex].prices.mediumSize} $ */}
              {/*  {price === 0 ? price : "1"} $ */}
              {price} $
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
            console.log(payData);
            setPayData(payData);
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
  count: {
    flexDirection: "row",
    borderColor: "#CE9660",
    borderWidth: 2,
    borderRadius: 50,
    padding: 9,
    alignItems: "center",
  },
  price: {
    color: "#CE9660",
    fontSize: 25,
  },
  countNum: {
    color: "#CE9660",
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 25,
  },
  describe: {
    color: "#fff",
    opacity: 0.7,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontFamily: "Indie-Flower",
  },

  small: {
    width: 60,
    height: 60,
    opacity: 0.8,
  },
  middle: {
    width: 100,
    height: 100,
    opacity: 0.8,
  },
  big: {
    width: 140,
    height: 140,
    opacity: 0.8,
  },
  volume: {
    color: "#fff",
    opacity: 0.8,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  data: state.data.data,
  activeIndex: state.data.activeIndex,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setPayData: (pay) => dispatch(setPay(pay)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
