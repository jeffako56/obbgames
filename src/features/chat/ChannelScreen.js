import React, { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StreamChat } from "stream-chat";
import {
  Chat,
  ChatContext,
  Channel,
  MessageInput,
  MessageList,
  OverlayProvider,
} from "stream-chat-expo";
import { AppContext } from './ChatComponent';

const ChannelScreen = ({ navigation,route }) => {
  // const [channel, setChannel] = useState(null);
  const { chan, client } = route.params;


  // const _channel = client.channel('messaging', chan);
    // console.log("channelScreenchannel");
    // console.log(client.activeChannels);

    // useEffect(async() => {
    //   // if (!channel) {
    //   //   navigation.openDrawer();
    //   // }
    //   const _channel = client.channel('messaging', chan);
    //   const cPromise = _channel.watch();

    //   setChannel(cPromise);

  
    // }, [channel]);


  return (
    <SafeAreaView>
      <OverlayProvider>
        <Chat client={client}>
          <Channel client={client} channel={chan}>
            <View style={{ flex: 1 }}>
              <MessageList
                channel={chan}
                // onThreadSelect={(thread) => {
                //   setThread(thread);
                //   navigation.navigate('Thread');
                // }}
              />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </OverlayProvider>
    </SafeAreaView>
  );
};

export default ChannelScreen;
