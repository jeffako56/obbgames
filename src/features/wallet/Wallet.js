import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Wallet = () => {
  return (
    <View style={styles.content}>
      <Text>Wallet Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Wallet;
