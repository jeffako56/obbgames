import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";

import {
  MainStackNavigator,
  SearchStackNavigator,
  FriendsStackNavigator,
  SettingsStackNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTab"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/home.png")}
              style={styles.iconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStackNavigator}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/search.png")}
              style={styles.iconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FriendsTab"
        component={FriendsStackNavigator}
        options={{
          tabBarLabel: "Friends",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/friends.png")}
              style={styles.iconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStackNavigator}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/cog.png")}
              style={styles.iconStyle}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
});

export default BottomTabNavigator;
