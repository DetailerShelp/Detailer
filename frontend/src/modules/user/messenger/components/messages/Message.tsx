import { 
    MessageContent, 
    MessageInfo, 
    MessageTime, 
    MessageWrapper 
} from "@/modules/user/messenger/components/messages/style";

interface MessageProps {
}

const Message = ({ }: MessageProps) => {
    return (
        <MessageWrapper >
            <MessageContent>
                Так, это вообще изи, попробуй сам решить
            </MessageContent>
            <MessageInfo>
                <MessageTime>
                    22:16
                </MessageTime>
            </MessageInfo>
        </MessageWrapper>
    )
};

export default Message;