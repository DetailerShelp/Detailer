import { colors } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useActions } from "@/store/actions";
import styled from "styled-components";
import useDataMessageStore from "@/modules/user/messenger/hooks/useDataMessageStore";
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
    top: 180px;
    background-color: ${colors.whiteTotal};
    z-index: 5;
`

const ForwardsMessageInfo = styled('div')`
    max-width: 70%;
    border-left: 2px solid blue;
    padding-left: 10px;
`

const PinMessage = ({ idChat }: ForwardsMessageProps) => {
    const {currentChat, messages} = useDataMessageStore({chatId: idChat});
    const forwardMes = messages.find(message => message.id === currentChat.pinnedMessage);

    if (!forwardMes || !currentChat.pinnedMessage) {
        return null;
    };

    const { pinMessage } = useActions();

    return (
        <ForwardsMessageWrapper>
            <ForwardsMessageInfo>
                Закрепленное сообщение
                <br />
                {sliceText({text:forwardMes.text, len:40})}
            </ForwardsMessageInfo>

            <button onClick={() => pinMessage({ chatId: idChat, mesId: undefined })}>
                <SvgHelper iconName="close" height="16px" width="16px" />
            </button>
        </ForwardsMessageWrapper>
    )
};

export default PinMessage;