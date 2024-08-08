import MessageInfo from "@/modules/user/messenger/components/MessageInfo";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useAppSelector } from "@/common/hooks/useAppSelector"
import { 
    MessageText, 
    ChatAvatar, 
    TextInfoWrapper,
    PreviewChat,
    ChatsWrapper
} from "@/modules/user/messenger/components/render/style";

const RenderPreviewChats = () => {
    const storeChats = useAppSelector((state) => state.newChatReducer);
    const allChats = storeChats.chats;

    return (
        <ChatsWrapper>
            {Object.keys(allChats).map(key => {
                const chat = allChats[key];
                const len = chat.messages.length;
                return (
                    <PreviewChat to={`/messenger/chat/${key}`}>
                        <ChatAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvLDufK1c995wXvLsyn_LMIreLZSxOTy7Rg&s" />
                        
                        <TextInfoWrapper>
                            <h3>{chat.nameGroup ? chat.nameGroup : chat.participants[1]}</h3>
                            <MessageText>{chat.messages ? chat.messages[len- 1].text : ''}</MessageText>
                        </TextInfoWrapper>

                        <MessageInfo time={chat.messages[len - 1].createdAt} statusMessage={<SvgHelper iconName="sent" height="20px"/>} isPinned={true} />
                    </PreviewChat>
                );
            })}
        </ChatsWrapper>
    )
};

export default RenderPreviewChats;