import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const BuildingEmpty = ({ navigation }) => {
  const route = useRoute();
  const { buttonName } = route.params;
  const [data, setData] = useState([]);
  const [Rdata, RsetData] = useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: `${buttonName} 강의실`,
    });
  }, [navigation, buttonName]);

  const handleButtonPress = (buttonName) => {
    navigation.navigate("DescLectureRoom", { buttonName });
  };

  const fetchData = (url, setter) => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const filteredData = result.filter(
          (Lecture_room) => Lecture_room.building_name === buttonName
        );
        setter(filteredData);
      })
      .catch((error) => console.error("데이터 가져오기 오류:", error));
  };

  useEffect(() => {
    fetchData("http://10.0.2.2:3000/LectureTimeroom", setData);
  }, [buttonName]);

  useEffect(() => {
    fetchData("http://10.0.2.2:3000/dataLectureroom", RsetData);
  }, [buttonName]);

  return (
    <ScrollView>
      <View style={styles.info}>
        <AntDesign name="rightcircle" size={20} color="black" />
        <Text> 사용 중 </Text>
        <AntDesign name="rightcircleo" size={20} color="black" />
        <Text> 미사용 중 </Text>
      </View>
      {Rdata.map((item) => {
        const isClassroomCodeIncluded = data.some(
          (dataItem) => dataItem.classroom_code === item.classroom_code
        );

        return (
          <TouchableOpacity
            key={item.classroom_code}
            title="click"
            style={styles.card}
            onPress={() => handleButtonPress(`${item.classroom_code}`)}
          >
            <View>
              {isClassroomCodeIncluded ? (
                <AntDesign name="rightcircle" size={40} color="black" />
              ) : (
                <AntDesign name="rightcircleo" size={40} color="black" />
              )}
            </View>
            <View style={{ marginLeft: 17, marginTop: -5 }}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                {item.room_number}호실
              </Text>
              <Text>{item.additional_info}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 1,
    padding: 10,
    borderColor: "#B0E0E6",
    backgroundColor: "#B0E0E6",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 5,
  },
  info: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    marginBottom: 1,
    padding: 10,
    borderColor: "#426E86",
    backgroundColor: "#426E86",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 5,
  },
});

export default BuildingEmpty;
