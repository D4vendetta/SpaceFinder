import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LectureRoomInfo = () => {
  const navigation = useNavigation();

  const handleButtonPress = (buttonName) => {
    navigation.navigate("ShowLectureRoomInfo", { buttonName });
  };

  return (
    <View>
      <Button title="인문학관" onPress={() => handleButtonPress("인문학관")} />
      <Button title="대학원" onPress={() => handleButtonPress("대학원")} />
      <Button title="국제학관" onPress={() => handleButtonPress("국제학관")} />
      <Button
        title="대진교육관"
        onPress={() => handleButtonPress("대진교육관")}
      />
      <Button title="도서관" onPress={() => handleButtonPress("도서관")} />
      <Button
        title="산학협동실습관"
        onPress={() => handleButtonPress("산학협동실습관")}
      />
      <Button title="예술관" onPress={() => handleButtonPress("예술관")} />
      <Button title="음악학관" onPress={() => handleButtonPress("음악학관")} />
      <Button
        title="정보전산원"
        onPress={() => handleButtonPress("정보전산원")}
      />
      <Button title="체육관" onPress={() => handleButtonPress("체육관")} />
      <Button
        title="사회과학관"
        onPress={() => handleButtonPress("사회과학관")}
      />
      <Button
        title="이공대가동"
        onPress={() => handleButtonPress("이공대가동")}
      />
      <Button
        title="이공대나동"
        onPress={() => handleButtonPress("이공대나동")}
      />
      <Button
        title="이공대다동"
        onPress={() => handleButtonPress("국제학관")}
      />
    </View>
  );
};

export default LectureRoomInfo;
