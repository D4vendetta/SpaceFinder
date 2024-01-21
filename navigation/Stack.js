import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LectureRoomInfo from "../screens/LectureRoomInfo";
import ShowLectureRoomInfo from "../screens/ShowLectureRoomInfo";
import DescLectureRoom from "../screens/DescLectureRoom";
import Building from "../screens/Building";
import BuildingEmpty from "../screens/BuildingEmpty";
import BuildingSchdule from "../screens/BuildingSchedule";

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen name="강의실별 조회" component={LectureRoomInfo} />
    <NativeStack.Screen
      name="ShowLectureRoomInfo"
      component={ShowLectureRoomInfo}
    />
    <NativeStack.Screen name="DescLectureRoom" component={DescLectureRoom} />
    <NativeStack.Screen name="Building" component={Building} />
    <NativeStack.Screen name="BuildingEmpty" component={BuildingEmpty} />
    <NativeStack.Screen name="BuildingSchdule" component={BuildingSchdule} />
  </NativeStack.Navigator>
);

export default Stack;
