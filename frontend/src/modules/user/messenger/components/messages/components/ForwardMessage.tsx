import { IMessage } from "@/store/reducers/messenger/messengerTypes";
import { AnswerdMessageText, AnswerdMessageWrapper } from "@/modules/user/messenger/components/messages/style";
import { colors } from "@/common/styles/styleConstants";
import TypeMedia from "@/modules/user/messenger/components/helpers/TypeMedia";

interface ForwardMessageProps {
    forwardMessages?: IMessage;
    isMine: boolean;
};

const ForwardMessage = ({ forwardMessages, isMine }: ForwardMessageProps) => {
    if (!forwardMessages) {
        return null;
    }

    return (
        <AnswerdMessageWrapper>
            <AnswerdMessageText $isMine={isMine}>
                <span style={{ color: isMine ? colors.white : colors.myMesDefault }}>{forwardMessages?.author}</span>
                <br />
                <span style={{ color: isMine ? colors.gray : colors.black }}>
                    {forwardMessages.media && !forwardMessages.text ?
                        <TypeMedia mediaInfo={forwardMessages.media.type.split('/')[0]}/>
                        :
                        forwardMessages.text
                    }
                </span>
            </AnswerdMessageText>
        </AnswerdMessageWrapper>
    )
};

export default ForwardMessage;