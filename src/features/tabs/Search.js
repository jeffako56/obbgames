import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Search() {
  return (
    <View style={styles.content}>
      <Text>Search Content</Text>
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

export default Search;
