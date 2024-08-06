import { borders, colors, device } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useActions } from "@/store/actions";
import styled from "styled-components";
import useDataMessageStore from "@/modules/user/messenger/hooks/useDataMessageStore";
import { flexCenter, resetButton } from "@/common/styles/mixins";

interface ForwardsMessageProps {
    idChat: number | string;
};

const PinMessageWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 25px;
    width: inherit;
    height: 60px;
    position: fixed;
    top: 180px;
    background-color: ${colors.whiteTotal};
    border-top: ${borders.defaultBorder};
    z-index: 5;

    animation: showsTop 0.5s;

    @keyframes showsTop {
        from {
            transform: translateY(-50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    
    @media ${device.mobile} {
        top: 230px;
    }
`

const ForwardsMessageInfo = styled('div')`
    max-width: 75%;
    border-left: ${borders.forwardMesBorder} ;
    padding-left: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Header = styled('span')`
    color: ${colors.blue};
`

const ButtonClose = styled('button')`
    ${resetButton}
    ${flexCenter}
`

const PinMessage = ({ idChat }: ForwardsMessageProps) => {
    const {currentChat, messages} = useDataMessageStore({chatId: idChat});
    const forwardMes = messages.find(message => message.id === currentChat.pinnedMessage);

    if (!forwardMes || !currentChat.pinnedMessage) {
        return null;
    };

    const { pinMessage } = useActions();

    return (
        <PinMessageWrapper>
            <ForwardsMessageInfo>
                <Header>Закрепленное сообщение</Header>
                <br />
                {forwardMes.text}
            </ForwardsMessageInfo>

            <ButtonClose onClick={() => pinMessage({ chatId: idChat, mesId: undefined })}>
                <SvgHelper iconName="close" height="25px" width="25px" />
            </ButtonClose>
        </PinMessageWrapper>
    )
};

export default PinMessage;