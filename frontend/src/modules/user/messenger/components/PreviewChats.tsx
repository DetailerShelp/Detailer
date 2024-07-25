import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { SearchInput } from "@/common/styles/tags/input/SearchInput";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import {
    PreviewChatsWrapper,
    ChatToolWrapper,
    AdderChat,
    PreviewChat,
    ChatsWrapper,
    ChatAvatar,
    TextInfoWrapper,
} from "@/modules/user/messenger/components/style";
import MessageInfo from "@/modules/user/messenger/components/MessageInfo";

const PreviewChats = () => {
    return (
        <PreviewChatsWrapper>
            <ChatToolWrapper>
                <SearchInput />
                <AdderChat onClick={() => console.log('newchat')}>
                    <ButtonWithIcon size={40} icon="createChat"></ButtonWithIcon>
                </AdderChat>
            </ChatToolWrapper>

            <ChatsWrapper>
                <PreviewChat to={'/messenger/chat'}>
                    <ChatAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvLDufK1c995wXvLsyn_LMIreLZSxOTy7Rg&s" />
                    <TextInfoWrapper>
                        <h3>Nagibator</h3>
                        <p>message</p>
                    </TextInfoWrapper>
                    <MessageInfo time="12:16" statusMessage={<SvgHelper iconName="sent"/>} isPinned={true}/>
                </PreviewChat>

                <PreviewChat to={'/messenger/chat/2'}>
                    <ChatAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvLDufK1c995wXvLsyn_LMIreLZSxOTy7Rg&s" />
                    <TextInfoWrapper>
                        <h3>Nagibator</h3>
                        <p>You: message</p>
                    </TextInfoWrapper>
                    <MessageInfo time="12:16" />
                </PreviewChat>

                
                <PreviewChat to={'/messenger/chat/3'}>
                    <ChatAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvLDufK1c995wXvLsyn_LMIreLZSxOTy7Rg&s" />
                    <TextInfoWrapper>
                        <h3>Nagibator</h3>
                        <p>You: Текст</p>
                    </TextInfoWrapper>
                    <MessageInfo time="12:16" />
                </PreviewChat>
            </ChatsWrapper>
        </PreviewChatsWrapper>
    )
};

export default PreviewChats;