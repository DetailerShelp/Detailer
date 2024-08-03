import styled from "styled-components";
import Message from "@/modules/user/messenger/components/messages/Message";
import MyMessage from "@/modules/user/messenger/components/messages/MyMessage";
import { useAppSelector } from "@/common/hooks/useAppselector";
import React, { useEffect, useRef } from "react";

interface RenderMessagesProps {
    id: string | number;
};

const ChatMessageWrapper = styled('div')`
    position: relative;
    width: inherit;
    background-color: inherit;
    padding-block: 100px 120px;
`;

const RenderMessages = React.memo(({ id }: RenderMessagesProps) => {
    const storeChats = useAppSelector((state) => state.newChatReducer);
    const currentChat = storeChats.chats[id!];

    const scrollToMessageId = 5;

    const messageRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});

    useEffect(() => {
        // Прокрутка к сообщению, если scrollToMessageId указан
        if (scrollToMessageId && messageRefs.current[scrollToMessageId]) {
            messageRefs.current[scrollToMessageId].current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, [scrollToMessageId]);

    // const scroll = () => {
    //     if (scrollToMessageId && messageRefs.current[scrollToMessageId]) {
    //         messageRefs.current[scrollToMessageId].current?.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'center'
    //         });
    //     }
    // }

    return (
        <ChatMessageWrapper>
            {currentChat.messages.map((mes, index) => {
                if (!messageRefs.current[mes.id]) {
                    messageRefs.current[mes.id] = React.createRef<HTMLDivElement>();
                }
                return (
                    <div key={mes.id} ref={messageRefs.current[mes.id]} >
                        {mes.author === 'Ilia'
                            ? <MyMessage
                                key={index}
                                text={mes.text}
                                time={mes.createdAt}
                                media={mes.media}
                                chatId={id}
                                mesId={mes.id}
                                answerMes={mes.answeredMessage}
                                forwardMes={mes.forwardMessage}
                            />
                            : <Message
                                key={index}
                                text={mes.text}
                                time={mes.createdAt}
                                media={mes.media}
                            />}
                    </div>
                )
            })}
        </ChatMessageWrapper>
    )
});

export default RenderMessages;