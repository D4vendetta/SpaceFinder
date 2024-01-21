import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Alert } from "react-native";
import TimeTableView, { genTimeBlock } from "react-native-timetable";
import { useRoute } from "@react-navigation/native";

const BuildingSchdule = ({ navigation }) => {
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
    fetch("http://10.0.2.2:3000/LectureTimeroomAll") // 실제 서버 엔드포인트로 대체
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

  const events_data = data.map((item) => ({
    title: `${item.lecture_name}`,
    startTime: genTimeBlock(item.day, item.starthour, item.startmin),
    endTime: genTimeBlock(item.day, item.endhour, item.endmin),
    location: item.classroom_code,
    extra_descriptions: [item.instructor_name],
  }));

  const numOfDays = 5;
  const pivotDate = genTimeBlock("mon");

  const scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  const onEventPress = (events_data) => {
    Alert.alert(
      `${events_data.title}`,
      `${events_data.location}, ${events_data.extra_descriptions}`
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TimeTableView
          scrollViewRef={scrollViewRef}
          events={events_data}
          pivotTime={9}
          pivotEndTime={20}
          pivotDate={pivotDate}
          nDays={numOfDays}
          onEventPress={onEventPress}
          headerStyle={styles.headerStyle}
          formatDateHeader="dddd"
          locale="ko"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#B0E0E6",
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
});

export default BuildingSchdule;
