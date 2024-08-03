import RenderMedia from "@/modules/user/messenger/components/render/RenderMedia";
import { MessageContentWrapper, MessageText } from "@/modules/user/messenger/components/messages/style";

interface MessageContentProps {
    text?: string;
    media?: File;
}

const MessageContent = ({ text, media }: MessageContentProps) => {
    return (
        <MessageContentWrapper>
            <RenderMedia media={media || undefined} withTitle={false} />
            {text && <MessageText>
                {text}
            </MessageText>}
        </MessageContentWrapper>
    )
};

export default MessageContent;