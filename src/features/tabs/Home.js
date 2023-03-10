import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Home() {

  return (
    <View style={styles.content}>
      <Text>Home Content</Text>
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

export default Home;
