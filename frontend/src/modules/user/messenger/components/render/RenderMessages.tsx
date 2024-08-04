import styled from "styled-components";
import Message from "@/modules/user/messenger/components/messages/Message";
import MyMessage from "@/modules/user/messenger/components/messages/MyMessage";
import React, { memo, useEffect, useRef } from "react";
import useDataMessageStore from "@/modules/user/messenger/hooks/useDataMessageStore";

interface RenderMessagesProps {
    id: string | number;
};

const ChatMessageWrapper = styled('div')`
    position: relative;
    width: inherit;
    background-color: inherit;
    padding-block: 100px 120px;
`;

const RenderMessages = memo(({ id }: RenderMessagesProps) => {
    const { messages } = useDataMessageStore({ chatId: id });

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
    console.log('isForward');
    return (
        <ChatMessageWrapper>
            {messages.map((mes, index) => {
                console.log('123')
                if (!messageRefs.current[mes.id]) {
                    messageRefs.current[mes.id] = React.createRef<HTMLDivElement>();
                }
                return (
                    <div key={mes.id} ref={messageRefs.current[mes.id]} >
                        {mes.author === 'Ilia'
                            ? <MyMessage
                                key={mes.id}
                                text={mes.text}
                                time={mes.createdAt}
                                media={mes.media}
                                chatId={id}
                                mesId={mes.id}
                                answerMes={mes.answeredMessage}
                                forwardMes={mes.forwardMessage}
                                isFirst={index === 0 ? true : false}
                                isLast={index === messages.length - 1 ? true : false}
                            />
                            : <Message
                                key={mes.id}
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