import { borders, colors, device } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useActions } from "@/store/actions";
import styled from "styled-components";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { flexCenter, resetButton } from "@/common/styles/mixins";

interface ForwardsMessageProps {
    idChat: number | string;
};

const ForwardsMessageWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 25px;
    width: inherit;
    height: 60px;
    position: fixed;
    bottom: 110px;
    background-color: ${colors.whiteTotal};
    z-index: 5;
    border-bottom: ${borders.defaultBorder};

    animation: showsDown 0.5s;

    @keyframes showsDown {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media ${device.mobile} {
        bottom: 160px;
    }
`

const ForwardsMessageInfo = styled('div')`
    max-width: 70%;
    border-left: ${borders.forwardMesBorder} ;
    padding-left: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const AuthorMessage = styled('span')`
    color: ${colors.blue};
`

const ButtonClose = styled('button')`
    ${resetButton}
    ${flexCenter}
`

const ForwardsMessage = ({ idChat }: ForwardsMessageProps) => {
    const storeChats = useAppSelector((state) => state.newChatReducer);
    const currentChat = storeChats.chats[idChat];

    let forwardMes;
    if (storeChats.forwardMes)
        forwardMes = storeChats.chats[storeChats.forwardMes.chatId].messages.find(message => message.id === storeChats.forwardMes?.mesId);
    else
        forwardMes = currentChat.messages.find(message => message.id === currentChat.answeredMessages);

    if (!forwardMes) {
        return null;
    };

    const { deleteForwardMessage } = useActions();

    const handleDeleteForwards = () => {
        deleteForwardMessage({ chatId: idChat })
    };

    return (
        <ForwardsMessageWrapper>
            <ForwardsMessageInfo>
                <AuthorMessage>{forwardMes?.author}</AuthorMessage>
                <br />
                <span>{forwardMes.text}</span>
            </ForwardsMessageInfo>

            <ButtonClose onClick={handleDeleteForwards}>
                <SvgHelper iconName="close" height="25px" width="25px" />
            </ButtonClose>
        </ForwardsMessageWrapper>
    )
};

export default ForwardsMessage;
