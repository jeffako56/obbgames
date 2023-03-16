import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  OverlayProvider,
  ChannelList,
  Channel,
  Chat,
  MessageInput,
  MessageList,
} from "stream-chat-expo";
import { StreamChat, Channel as ChannelType } from "stream-chat";
import { SafeAreaView } from "react-native-safe-area-context";
import { Screen } from "./ChannelScreen";

// const client = StreamChat.getInstance('5hv2he2ryej8');

// console.log("client");
// console.log(client);
const appKEY = "5hv2he2ryej8";
const secret =
  "w9uf6ts4wgw9q8q7x2wssqtdhmf52sttmmxtu54zd3qwm7wcejddygjp92ftnz2u";

const ChatComponent = ({ navigation }) => {
  // const client = StreamChat.getInstance("5hv2he2ryej8");
  // const chatClient = new StreamChat(appKEY);

  // const serverClient = StreamChat.getInstance(
  //   "5hv2he2ryej8",
  // );

  const options = {
    state: true,
    watch: true,
  };
  const AppContext = React.createContext();
  const serverClient = StreamChat.getInstance("5hv2he2ryej8");

  const [channel, setChannel] = useState();


  useEffect(() => {
    const setupClient = async () => {
      await serverClient.connectUser(
        {
          id: "jeffiejeffs",
        },
        serverClient.devToken("jeffiejeffs")
      );
    };

    setupClient();
    // console.log("chanelsu",channel);
  }, []);

  return (
    <AppContext.Provider value={{ channel, setChannel, serverClient }}>
      <OverlayProvider>
        <Chat client={serverClient}>
          {/* <Channel channel={channel}>
          <MessageList />
        </Channel> */}
          <ChannelList
            options={options}
            // onChannelUpdated={}
            
            onSelect={ (thisChannel) => {
               setChannel(thisChannel);
              console.log("channelsu", thisChannel);
              // console.log("channelsu", thisChannel.id);
              

              navigation.navigate("Channel", {
                chan: thisChannel,
                client: serverClient,
              });
            }}
          />
        </Chat>
      </OverlayProvider>
    </AppContext.Provider>

    // <View style={StyleSheet.absoluteFill}>
    //   <Text>wow</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatComponent;
