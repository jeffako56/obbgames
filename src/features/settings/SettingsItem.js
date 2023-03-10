import React, { useCallback, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styles from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { createAction } from "../../utils";
import { ActivityIndicator } from "react-native";

function SettingsItem({ navigation, route }) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { productsItem = [] } = useSelector((state) => state.product);
  const { images, title, brand, price, rating } = productsItem;
  const isLoading = useSelector((state) => state.product.isBusy);
  const [hasData, sethasData] = useState(false);

  useEffect(() => {
    if (isFocused) {
      getProducts();
    }
    sethasData(true);
  }, [isFocused]);

  const getProducts = useCallback(() => {
    dispatch(createAction("product/getItem")(route.params.id));
  }, []);

  return isLoading && hasData ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#0c9" />
      <Text style={{ fontSize: 16, color: "red" }}>Loading Data...</Text>
    </View>
  ) : (
    <View style={internalStyle.container}>
      {productsItem && hasData ? (
        <View>
          <View style={internalStyle.imageContainer}>
            <Image
              style={internalStyle.image}
              source={{
                uri: `${images[0]}`,
              }}
            />
          </View>
          <View
            style={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 30, marginLeft: 40, overflow: "hidden" }}>
              {title}
            </Text>
            <Text style={{ fontSize: 22, paddingLeft: 40, color: "blue" }}>
              {brand}
            </Text>
            <Text style={internalStyle.text}>Price: $ {price}</Text>
            <Text style={internalStyle.text}>Rating: {rating}</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const internalStyle = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#fafdff",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    display: "flex",
    width: "85%",
    height: "70%",
    resizeMode: "contain",
    borderWidth: 0.2,
    borderColor: "black",
  },
  logo: {
    width: 66,
    height: 58,
  },
  text: {
    fontSize: 15,
    marginLeft: 40,
  },
});

export default SettingsItem;
