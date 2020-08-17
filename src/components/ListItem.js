import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.url = this.props.picture;
  }
  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.block}>
          <Image
            style={styles.icon}
            source={{
              uri: this.url,
            }}
          />
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
    elevation: 10,
  },
  title: {
    color: "#fff",
    fontSize: 15,
  },
  icon: {
    width: 130,
    height: 120,
    opacity: 0.8,
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
    width: 40,
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

// export default function (props) {
//   const navigation = useNavigation();

//   return <ListItem {...props} navigation={navigation} />;
// }

export default ListItem;
