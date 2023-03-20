import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { OverlayProvider } from "stream-chat-expo";
import { useChatClient } from "./src/config/useChatClient";
import { AppProvider } from "./src/AppContext";
import store from "./src/store";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const { clientIsReady } = useChatClient();

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>;
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <Provider store={store}>
          <DrawerNavigator />
        </Provider>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
