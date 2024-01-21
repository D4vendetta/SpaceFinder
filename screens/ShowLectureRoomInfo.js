import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const ShowLectureRoomInfo = ({ navigation }) => {
  const route = useRoute();
  const { buttonName } = route.params;
  const [data, setData] = useState([]);

  const handleButtonPress = (buttonName) => {
    navigation.navigate("BuildingSchdule", { buttonName });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: `${buttonName} 강의실`,
    });
  }, [navigation, buttonName]);

  useEffect(() => {
    // 서버에서 데이터 가져오기
    fetch("http://10.0.2.2:3000/dataLectureroom") // 실제 서버 엔드포인트로 대체
      .then((response) => response.json())
      .then((result) => {
        //console.log("서버에서 받은 데이터:", result);

        // 필터링된 데이터를 state에 설정
        const filteredData = result.filter(
          (Lecture_room) => Lecture_room.building_name === buttonName
        );
        setData(filteredData);
      })
      .catch((error) => console.error("데이터 가져오기 오류:", error));
  }, [buttonName]); // buttonName이 변경될 때마다 다시 불러오도록 변경

  return (
    <ScrollView>
      {data.map((item) => (
        <View key={`${item.classroom_code}`}>
          <TouchableOpacity
            title="click"
            style={styles.card}
            onPress={() => handleButtonPress(`${item.classroom_code}`)}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              {item.room_number}호실
            </Text>
            <Text style={{ marginTop: 5 }}> {item.additional_info}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginBottom: 1,
    padding: 10,
    borderColor: "#B0E0E6",
    backgroundColor: "#B0E0E6",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 5,
  },
});

export default ShowLectureRoomInfo;
