import { useAppSelector } from "@/common/hooks/useAppselector";
import { colors } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useActions } from "@/store/actions";
import styled from "styled-components";
import { sliceText } from "@/modules/user/messenger/components/helpers/sliceText";

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
`

const ForwardsMessageInfo = styled('div')`
    max-width: 70%;
    border-left: 2px solid blue;
    padding-left: 10px;
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

    const { setAnsweredMessage } = useActions();

    return (
        <ForwardsMessageWrapper>
            <ForwardsMessageInfo>
                {forwardMes?.author}
                <br />
                {sliceText({text:forwardMes.text, len: 40})}
            </ForwardsMessageInfo>

            <button onClick={() => setAnsweredMessage({ chatId: idChat, answeredMes: undefined })}>
                <SvgHelper iconName="close" height="16px" width="16px" />
            </button>
        </ForwardsMessageWrapper>
    )
};

export default ForwardsMessage;