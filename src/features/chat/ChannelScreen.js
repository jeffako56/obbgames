import {
  Channel,
  MessageList,
  MessageInput,
  Chat,
  OverlayProvider,
} from "stream-chat-expo";
import { StreamChat } from "stream-chat";
import { useAppContext } from "../../AppContext";


const chatClient = StreamChat.getInstance("5hv2he2ryej8");
const ChannelScreen = () => {
  const { channel } = useAppContext();

  return (
    <OverlayProvider>
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <MessageList />
          <MessageInput />
        </Channel>
      </Chat>
    </OverlayProvider>
  );
};

export default ChannelScreen;
