import { useAppSelector } from "@/common/hooks/useAppselector";
import { square } from "@/common/styles/mixins";
import { borders, colors, transitions } from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MessageInfo from "@/modules/user/messenger/components/MessageInfo";
import SvgHelper from "@/common/svg-helper/SvgHelper";

export const ChatsWrapper = styled('div')`
    display: flex;
    flex-direction: column;
`

export const PreviewChat = styled(NavLink)`
    display: grid;
    grid-template-columns: 60px auto 60px;
    align-items: center;
    height: 90px;
    padding: 15px 25px;
    gap: 15px;
    transition: ${transitions.mediumTransition};

    &:hover{
        background-color: ${colors.grayBorder};
    }

    &:last-child{
        border-bottom-left-radius: ${borders.defaultBorderRadius};
        border-bottom-right-radius: ${borders.defaultBorderRadius};
    }
`

export const ChatAvatar = styled('img')`
    ${square(60)}
    border-radius: ${borders.circleBorderRadius};
`

export const TextInfoWrapper = styled('div')`
    justify-self: start;
`

interface RenderPreviewChatsProps {
    onClick?: ()=>void;
};

const RenderPreviewChats = ({onClick}:RenderPreviewChatsProps) => {
    const storeChats = useAppSelector((state) => state.newChatReducer);
    const allChats = storeChats.chats;

    return (
        <ChatsWrapper>
            {Object.keys(allChats).map(key => {
                const chat = allChats[key];
                return (
                    <PreviewChat to={`/messenger/chat/${key}`} onClick={onClick}>
                        <ChatAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvLDufK1c995wXvLsyn_LMIreLZSxOTy7Rg&s" />
                        <TextInfoWrapper>
                            <h3>{chat.nameGroup ? chat.nameGroup : chat.participants[1]}</h3>
                            <p>{chat.messages ? chat.messages[chat.messages.length - 1].text : ''}</p>
                        </TextInfoWrapper>
                        <MessageInfo time="12:16" statusMessage={<SvgHelper iconName="sent" />} isPinned={true} />
                    </PreviewChat>
                );
            })}
        </ChatsWrapper>
    )
};

export default RenderPreviewChats;