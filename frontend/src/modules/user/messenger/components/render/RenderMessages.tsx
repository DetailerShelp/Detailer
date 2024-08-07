import styled from "styled-components";
import Message from "@/modules/user/messenger/components/messages/Message";
import MyMessage from "@/modules/user/messenger/components/messages/MyMessage";
import React, { useCallback, useEffect, useRef } from "react";
import { useAppSelector } from "@/common/hooks/useAppselector";

interface RenderMessagesProps {
    id: string | number;
};

const ChatMessageWrapper = styled('div')`
    position: relative;
    width: inherit;
    background-color: inherit;
    padding-block: 100px 120px;
`;

const RenderMessages: React.FC<RenderMessagesProps> = React.memo(({ id }) => {
    const storeMessage = useAppSelector(state => state.newChatReducer);
    const messages = storeMessage.chats[id].messages;

    const scrollToMessageId = 5;
    const messageRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});

    useEffect(() => {
        if (scrollToMessageId && messageRefs.current[scrollToMessageId]) {
            messageRefs.current[scrollToMessageId].current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, [scrollToMessageId]);

    const renderMessages = useCallback(() => {
        return messages.map((mes, index) => {
            if (!messageRefs.current[mes.id]) {
                messageRefs.current[mes.id] = React.createRef<HTMLDivElement>();
            }
            return (
                <div key={mes.id} ref={messageRefs.current[mes.id]}>
                    {mes.author === 'Ilia'
                        ? <MyMessage
                            text={mes.text}
                            time={mes.createdAt}
                            media={mes.media}
                            chatId={id}
                            mesId={mes.id}
                            answerMes={mes.answeredMessage}
                            forwardMes={mes.forwardMessage}
                            isFirst={index === 0}
                            isLast={index === messages.length - 1}
                            isEdited={mes.isEdited}
                        />
                        : <Message
                            text={mes.text}
                            time={mes.createdAt}
                            media={mes.media}
                        />}
                </div>
            )
        });
    }, [messages]);

    return (
        <ChatMessageWrapper>
            {renderMessages()}
        </ChatMessageWrapper>
    );
});

export default RenderMessages;
