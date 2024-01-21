import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Styled from "styled-components/native";
import NextLecture from "../component/NextLecture";
import Weather from "../component/Weather";

const Container = Styled.SafeAreaView``;
var { height, width } = Dimensions.get("window");

const Home = ({ navigation: { navigate } }) => (
  <Container style={{ flex: 1 }}>
    <View>
      <Image
        source={require("../asset/image1.jpg")}
        style={{ width: width, height: 200 }}
      />
    </View>
    <View style={{ flexDirection: "row", flex: 1 }}>
      <Weather />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <NextLecture />
      </View>
    </View>
    <View style={{ flexDirection: "row", flex: 1, marginTop: -40 }}>
      <View style={styles.four_box}>
        <TouchableOpacity
          title="click"
          onPress={() => navigate("Stack", { screen: "Building" })}
        >
          <Image
            source={require("../asset/lectureroom1.jpg")}
            style={{ width: 100, height: 110 }}
          />
          <Text style={styles.textstyle2}>실시간 조회</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.four_box}>
        <TouchableOpacity
          title="click"
          onPress={() => navigate("Stack", { screen: "LectureRoomInfo" })}
        >
          <Image
            source={require("../asset/lectureroom2.jpg")}
            style={{ width: 100, height: 110 }}
          />
          <Text style={styles.textstyle3}>강의실별 조회</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textstyle: {
    fontSize: 15,
    marginTop: 10,
  },
  textstyle2: {
    fontSize: 15,
    marginLeft: 17,
  },
  textstyle3: {
    fontSize: 15,
    marginLeft: 10,
  },
  four_box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
