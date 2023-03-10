import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { createAction } from "../../utils";
import styles from "./Styles";
import ModalComponent from "../../components/ModalComponent";

function Settings({ navigation }) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const flatListRef = useRef();
  const { products = [] } = useSelector((state) => state.product);
  const [modalVisible, setModalVisible] = useState(true);
  const isLoading = useSelector((state) => state.product.isBusy);
  const offSet = useSelector((state) => state.product.offSet);
  const errorMessage = useSelector((state) => state.product.errorMessage);
  const isMaxProducts = useSelector((state) => state.product.isMaxProducts);

  useEffect(() => {
    getProducts();
  }, []);

  const addProducts = useCallback(async () => {
    await dispatch(createAction("product/isAddProducts")({}));
    await dispatch(createAction("product/list")({ skip: offSet }));
  }, []);

  const getProducts = useCallback(() => {
    dispatch(
      createAction("product/list")({
        skip: offSet,
      })
    );
  }, [offSet]);

  const onRefresh = useCallback(() => {
    dispatch(createAction("product/resetProducts")({ isBusy: true }));

    console.log("onRefreshProds", products);
  }, [products]);

  const flatListSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      />
    );
  };

  const toTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const productList = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ padding: 20, display: "flex", flexDirection: "row" }}
        onPress={() => {
          navigation.navigate("Item", { id: item.id });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: `${item.thumbnail}`,
          }}
        />
        <Text style={{ flex: 1, textAlign: "center", verticalAlign: "middle",paddingHorizontal: 20,fontSize: 18, fontWeight:"300" }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {!errorMessage ? (
        <View style={styles.parentContainer}>
          {!isLoading ? (
            <View style={styles.container}>
              <FlatList
                extraData={onRefresh}
                showsVerticalScrollIndicator={false}
                ref={flatListRef}
                style={styles.list}
                data={products}
                ItemSeparatorComponent={flatListSeparator}
                renderItem={productList}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => {
                  addProducts();
                  toTop();
                }}
                contentContainerStyle={{ justifyContent: "center" }}
                onEndReachedThreshold={isMaxProducts ? -1 : 0}
                onRefresh={onRefresh}
                refreshing={false}
              />
            </View>
          ) : (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#0c9" />
              <Text style={{ fontSize: 16, color: "red" }}>
                Loading Data...
              </Text>
            </View>
          )}
        </View>
      ) : (
        <ModalComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          description={"Something Went Wrong"}
        />
      )}
    </SafeAreaView>
  );
}

export default Settings;
