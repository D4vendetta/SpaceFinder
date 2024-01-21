import React from "react";
import { View, Text, Image } from "react-native";

const Map = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#EAEBDD",
    }}
  >
    <Image
      source={require("../asset/map.jpg")}
      style={{
        width: "100%",
        height: "100%",
      }}
      resizeMode="contain"
    />
  </View>
);

export default Map;
