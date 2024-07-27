import {
    MessageContent,
    MessageInfo,
    MessageText,
    MessageTime,
    MessageWrapper
} from "@/modules/user/messenger/components/messages/style";

interface MessageProps {
    text?: string;
    time: string;
    media?: File;
}

const Message = ({ text, time, media }: MessageProps) => {
    return (
        <MessageWrapper >
            <MessageContent>
                {text && <MessageText>
                    {text}
                </MessageText>}
            </MessageContent>
            <MessageInfo>
                <MessageTime>
                    {time}
                </MessageTime>
            </MessageInfo>
        </MessageWrapper>
    )
};

export default Message;