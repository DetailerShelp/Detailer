import { IMessage } from "@/store/messenger/messengerTypes";
import { AnswerdMessageWrapper } from "@/modules/user/messenger/components/messages/style";
import { sliceText } from "@/modules/user/messenger/components/helpers/sliceText";

interface ForwardMessageProps {
    forwardMessages?: IMessage
};

const ForwardMessage = ({ forwardMessages }: ForwardMessageProps) => {
    if (!forwardMessages) {
        return null;
    }

    return (
        <AnswerdMessageWrapper>
            {forwardMessages?.author}
            <br />
            {sliceText({text:forwardMessages.text})}
        </AnswerdMessageWrapper>
    )
};

export default ForwardMessage;