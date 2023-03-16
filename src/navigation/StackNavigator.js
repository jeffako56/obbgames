import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../features/tabs/Home";
import Profile from "../features/profile/Profile";
import Search from "../features/tabs/Search";
import Friends from "../features/tabs/Friends";
import ChatComponent from "../features/chat/ChatComponent";
import Favorite from "../features/favorite/Favorite";
import Wallet from "../features/wallet/Wallet";
import Settings from "../features/settings/Settings";
import SettingsItem from "../features/settings/SettingsItem";
import { Image, TouchableOpacity } from "react-native";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ChannelScreen from "../features/chat/ChannelScreen";

const Stack = createStackNavigator();

const MainStackNavigator = ({ navigation }) => {
  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fafdff",
        },
        headerTitleAlign: "center",
        headerLayoutPreset: "center",
        headerLeft: () => (
          <TouchableOpacity
            onPress={openDrawer}
            style={{ marginLeft: 15, padding: 10 }}
          >
            <Image
              source={require("../../assets/menu.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Chat" component={ChatComponent} />
      {/* <Stack.Screen
        name="Channel"
        component={ChannelScreen}
        // options={() => ({
        //   headerBackTitle: "Back",
        //   headerRight: () => <></>,
        //   // headerTitle: channel?.data?.name,
        // })}
      /> */}
    </Stack.Navigator>
  );
};

const SearchStackNavigator = ({ navigation }) => {
  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fafdff",
        },
        headerTitleAlign: "center",
        headerLayoutPreset: "center",
        headerLeft: () => (
          <TouchableOpacity
            onPress={openDrawer}
            style={{ marginLeft: 15, padding: 10 }}
          >
            <Image
              source={require("../../assets/menu.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

const FriendsStackNavigator = ({ navigation }) => {
  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fafdff",
        },
        headerTitleAlign: "center",
        headerLayoutPreset: "center",
        headerLeft: () => (
          <TouchableOpacity
            onPress={openDrawer}
            style={{ marginLeft: 15, padding: 10 }}
          >
            <Image
              source={require("../../assets/menu.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Friends" component={Friends} />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = ({ navigation }) => {
  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  const goBack = () => navigation.dispatch(StackActions.pop());
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fafdff",
        },
        headerTitleAlign: "center",
        headerLayoutPreset: "center",
        headerLeft: () => (
          <TouchableOpacity
            onPress={openDrawer}
            style={{ marginLeft: 15, padding: 10 }}
          >
            <Image
              source={require("../../assets/menu.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="Item"
        component={SettingsItem}
        options={{
          headerStyle: {
            backgroundColor: "#fafdff",
          },
          headerTitleAlign: "center",
          headerLayoutPreset: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={goBack}
              style={{ marginLeft: 15, padding: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  SearchStackNavigator,
  FriendsStackNavigator,
  SettingsStackNavigator,
};
