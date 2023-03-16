import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  FriendsStackNavigator,
  SearchStackNavigator,
  SettingsStackNavigator,
} from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import CustomSidebarMenu from "./CustomSideBarMenu";
import ChannelScreen from "../features/chat/ChannelScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
        headerShown: false,
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Search" component={SearchStackNavigator} />
      <Drawer.Screen name="Friends" component={FriendsStackNavigator} />
      <Drawer.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{ headerShown: true }}
      />

      <Drawer.Screen name="Channel" component={ChannelScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
