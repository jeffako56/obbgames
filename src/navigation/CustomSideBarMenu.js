import React from "react";
import { SafeAreaView, StyleSheet, Image, Text, Linking } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialIcons, Ionicons, Entypo, Feather } from "@expo/vector-icons";

const CustomSidebarMenu = (props, { navigation }) => {
  const BASE_PATH =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";
  const proileImage = "react_logo.png";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../../assets/avatar.png")}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        {/* ////to get include drawer items in Drawer Navigation///// */}
        {/* <DrawerItemList {...props} />  */}

        <DrawerItem
          label="Profile"
          onPress={() => props.navigation.navigate("Profile")}
          icon={({ size }) => (
            <Ionicons name="person" size={size} color="#FF5149" />
          )}
        />
        <DrawerItem
          label="Favorite"
          onPress={() => props.navigation.navigate("Favorite")}
          icon={({ size }) => (
            <MaterialIcons name="favorite" size={size} color="#FF5149" />
          )}
        />
        <DrawerItem
          label="Wallet"
          onPress={() => props.navigation.navigate("Wallet")}
          icon={({ size }) => (
            <Entypo name="wallet" size={size} color="#FF5149" />
          )}
        />
        <DrawerItem
          label="Chat"
          onPress={() => props.navigation.navigate("Chat")}
          icon={({ size }) => (
            <Feather name="message-circle" size={size} color="#FF5149" />
          )}
        />
        <DrawerItem
          label="Rate Us"
          onPress={() => Linking.openURL("https://ohbabygames.com/")}
          icon={({ size }) => (
            <Ionicons name="star" size={size} color="#FF5149" />
          )}
        />
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 12,
          textAlign: "center",
          color: "grey",
        }}
      >
        www.ohbabygames.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    marginTop: 80,
    marginHorizontal: 50,
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomSidebarMenu;
