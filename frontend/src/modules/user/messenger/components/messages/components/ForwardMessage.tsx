import { IMessage } from "@/store/messenger/messengerTypes";
import { AnswerdMessageText, AnswerdMessageWrapper } from "@/modules/user/messenger/components/messages/style";
import { sliceText } from "@/modules/user/messenger/components/helpers/sliceText";

interface ForwardMessageProps {
    forwardMessages?: IMessage
};

const ForwardMessage = ({ forwardMessages }: ForwardMessageProps) => {
    if (!forwardMessages) {
        return null;
    }


    //TODO
    return (
        <AnswerdMessageWrapper>
            <AnswerdMessageText>
                {forwardMessages?.author}
                <br />
                <span style={{color:'#D9D9D9'}}>{forwardMessages.text}</span>
            </AnswerdMessageText>
        </AnswerdMessageWrapper>
    )
};

export default ForwardMessage;