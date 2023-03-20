import { ChannelList, Chat, OverlayProvider } from "stream-chat-expo";
import { StreamChat } from "stream-chat";
import { useAppContext } from '../../AppContext';
const chatClient = StreamChat.getInstance("5hv2he2ryej8");
const ChannelListScreen = props =>  {
  const { setChannel } = useAppContext();
  return (
    <OverlayProvider>
      <Chat client={chatClient}>
        <ChannelList
          onSelect={(channel) => {
            const { navigation } = props;
            setChannel(channel);
            navigation.navigate('Channel');
            
          }}
        />
      </Chat>
    </OverlayProvider>
  );
};

export default ChannelListScreen;
