import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CompositeScreenProps } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Community from "../screens/Community";
import Chat from "../screens/Chat";
import Status from "../screens/Status";
import Calls from "../screens/Calls";

export type TabTopStackParamList = {
  Calls: undefined;
  Chat: undefined;
  Community: undefined;
  Status: undefined;
};

const Tab = createMaterialTopTabNavigator<TabTopStackParamList>();

const TopTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#0e806a",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="account-group-outline"
                size={24}
                color={color}
              />
            );
          },
          tabBarLabelStyle: styles.tabBarStyleLabel,
        }}
        name="Community"
        component={Community}
      />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default TopTabBar;

const styles = StyleSheet.create({
  container: {},
  tabBarStyleLabel: {
    display: "none",
  },
});
