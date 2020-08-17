import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default class ContactsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <MapView
            style={styles.map}
            initialRegion={{
              //   latitude: 37.78825,
              //   longitude: -122.4324,
              latitude: 48.61667,
              longitude: 22.3,
              latitudeDelta: 0.0222,
              longitudeDelta: 0.021,
            }}
          >
            <Marker
              coordinate={{ latitude: 48.61667, longitude: 22.3 }}
              title={"Coffee Shop"}
              description={"original"}
            />
          </MapView>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <View>
            <Text style={styles.title}>tel: +38 (068) - 531 - 13 - 12</Text>
          </View>
          <View>
            <Text style={styles.title}>Gagarina, 27</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#533A20",
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    width: "80%",
    height: "70%",
    borderWidth: 2,
    borderColor: "#D3A170",
  },
  title: {
    color: "#fff",
    fontSize: 15,
  },
});
