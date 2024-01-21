import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const DescLectureRoom = ({ navigation }) => {
  const route = useRoute();
  const { buttonName } = route.params;
  const [data, setData] = useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: `${buttonName}호실`,
    });
  }, [navigation, buttonName]);

  useEffect(() => {
    // 서버에서 데이터 가져오기
    fetch("http://10.0.2.2:3000/LectureTime") // 실제 서버 엔드포인트로 대체
      .then((response) => response.json())
      .then((result) => {
        //console.log("서버에서 받은 데이터:", result);

        // 필터링된 데이터를 state에 설정
        const filteredData = result.filter(
          (Lecture_room) => Lecture_room.classroom_code === buttonName
        );
        setData(filteredData);
      })
      .catch((error) => console.error("데이터 가져오기 오류:", error));
  }, [buttonName]); // buttonName이 변경될 때마다 다시 불러오도록 변경

  return (
    <ScrollView>
      {data.map((item) => (
        <View
          key={`${item.lecture_id}-${item.lecture_division}`}
          style={styles.card}
        >
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            {item.lecture_name}
          </Text>
          <Text>
            {item.day} {item.start} ~ {item.end}
          </Text>
          <Text style={{ fontSize: 11, color: "#312D2C" }}>
            {item.instructor_name} {item.lecture_id}-{item.lecture_division}
            {"   "}
            {item.credit}학점
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginBottom: -2,
    padding: 10,
    borderColor: "#B0E0E6",
    backgroundColor: "#B0E0E6",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 5,
  },
});

export default DescLectureRoom;
