import {
    MessageContentWrapper,
    MessageInfoWrapper,
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
            <MessageContentWrapper>
                {text && <MessageText>
                    {text}
                </MessageText>}
            </MessageContentWrapper>
            <MessageInfoWrapper>
                <MessageTime>
                    {time}
                </MessageTime>
            </MessageInfoWrapper>
        </MessageWrapper>
    )
};

export default Message;