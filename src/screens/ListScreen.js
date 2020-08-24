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
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native-gesture-handler";
import { WIDTH, HEIGHT } from "../Constants";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  setData,
  setText,
  setActiveIndex,
  setCount,
  setPrice,
} from "../actions/PageActions";

import { connect } from "react-redux";

import axios from "axios";

class ListScreen extends Component {
  componentDidMount = () => {
    this.getDrinksList();
  };

  getDrinksList = async () => {
    axios.get(`https://cafe-drinks-api.herokuapp.com/drinks`).then((res) => {
      const data = res.data;
      // console.log(data);
      this.props.setDataApi(data);
    });
  };

  search() {
    const { setIndex, navigation } = this.props;
    const url = "https://cafe-drinks-api.herokuapp.com/";
    const filterDrinks = this.props.data.filter((item) => {
      return item.name.toLowerCase().includes(this.props.text.toLowerCase());
    });
    console.log(filterDrinks);
    return filterDrinks.map((el, i) => (
      <ListItem
        key={el + i}
        price={el.price}
        name={el.name}
        picture={`${url + "images/" + el.image}`}
        describe={"try coffees from Keniya, Ethiopia"}
        onPress={() => {
          setIndex(i);
          navigation.navigate("DetailsScreen");
        }}
      />
    ));
  }

  render() {
    const {
      data,
      navigation,
      setIndex,
      text,
      setCounter,
      setPricing,
    } = this.props;
    const url = "https://cafe-drinks-api.herokuapp.com/";
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.bg} source={require("../../assets/bg.jpeg")} />
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            flex: 1,
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              this.props.setTextInput(text);
            }}
            value={this.props.text.text}
          />
        </View>
        <View style={styles.block}>
          {data.length > 0 ? (
            text ? (
              this.search()
            ) : (
              data.map((el, i) => (
                <ListItem
                  key={el + i}
                  price={el.price}
                  name={el.name}
                  picture={`${url + "images/" + el.image}`}
                  describe={"try coffees from Keniya, Ethiopia"}
                  onPress={() => {
                    setIndex(i);
                    setCounter(1);
                    setPricing(0);
                    navigation.navigate("DetailsScreen");
                  }}
                />
              ))
            )
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

const mapStateToProps = (store) => {
  return {
    text: store.text.text,
    data: store.data.data,
    price: store.payData.price,
    count: store.payData.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTextInput: (text) => dispatch(setText(text)),
    setDataApi: (data) => dispatch(setData(data)),
    setIndex: (index) => dispatch(setActiveIndex(index)),
    setCounter: (count) => dispatch(setCount(count)),
    setPricing: (price) => dispatch(setPrice(price)),
  };
};

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
    opacity: 0.4,
  },
  input: {
    height: 40,
    borderColor: "#533A20",
    borderWidth: 1,
    color: "#fff",
    margin: 20,
    width: "90%",
    backgroundColor: "#CE9660",
    opacity: 0.9,
    padding: 10,
    borderRadius: 50,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
