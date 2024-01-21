import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, Image } from "react-native";
import Home from "../screens/Home";
import Schedule from "../screens/Schedule";
import Map from "../screens/Map";
import { Entypo, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarStyle: { backgroundColor: "#0c0c0c" },
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "#a9a9a9",
      headerRight: () => (
        <View>
          <Text style={{ fontSize: 10, marginRight: 10 }}>SpaceFinder</Text>
        </View>
      ),
      tabBarLabelStyle: {
        fontSize: 12,
        marginTop: -5,
        marginBottom: 5,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Entypo name="home" color={color} size={20} />;
        },
      }}
    />
    <Tab.Screen
      name="Schedule"
      component={Schedule}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <AntDesign name="table" color={color} size={20} />;
        },
      }}
    />
    <Tab.Screen
      name="Map"
      component={Map}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Entypo name="map" color={color} size={18} />;
        },
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
