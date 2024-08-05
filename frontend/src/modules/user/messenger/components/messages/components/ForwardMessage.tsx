import { IMessage } from "@/store/messenger/messengerTypes";
import { AnswerdMessageText, AnswerdMessageWrapper } from "@/modules/user/messenger/components/messages/style";
import styled from "styled-components";
import { colors } from "@/common/styles/styleConstants";

interface ForwardMessageProps {
    forwardMessages?: IMessage
};

const ForwardMessageText = styled('span')`
    color: ${colors.gray};
`

const ForwardMessage = ({ forwardMessages }: ForwardMessageProps) => {
    if (!forwardMessages) {
        return null;
    }

    return (
        <AnswerdMessageWrapper>
            <AnswerdMessageText>
                {forwardMessages?.author}
                <br />
                <ForwardMessageText>{forwardMessages.text}</ForwardMessageText>
            </AnswerdMessageText>
        </AnswerdMessageWrapper>
    )
};

export default ForwardMessage;