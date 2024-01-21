import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Styled from "styled-components/native";

const NextLecture = () => {
  const [timetableData, setTimetableData] = useState([]);

  useEffect(() => {
    // 서버에서 데이터 가져오기
    fetch("http://10.0.2.2:3000/nextLecture") 
      .then((response) => response.json())
      .then((result) => {
        console.log("서버에서 받은 데이터:", result);
        setTimetableData(result); 
      })
      .catch((error) => console.error("데이터 가져오기 오류:", error));
  }, []);

  // Ensure that timetableData is an object before accessing its properties
  // Check if lecture_name exists before rendering
  return (
    <View>
      {timetableData.map((item) => (
        <View key={`${item.lecture_id}`}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              marginBottom: 5,
              marginTop: -20,
            }}
          >
            다음 수업
          </Text>
          <Text>
            {item.starthour}시 {item.startmin}분
          </Text>
          <Text>{item.lecture_name}</Text>
          <Text>{item.classroom_code}</Text>
        </View>
      ))}
    </View>
  );
};

export default NextLecture;
