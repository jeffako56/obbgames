import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Profile() {
  return (
    <View style={styles.content}>
      <Text>Profile Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
