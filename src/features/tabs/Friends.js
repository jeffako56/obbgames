import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Friends() {
  return (
    <View style={styles.content}>
      <Text>Friends Content</Text>
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

export default Friends;
