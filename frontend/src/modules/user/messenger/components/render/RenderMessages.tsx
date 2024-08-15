import styled from "styled-components";
import Message from "@/modules/user/messenger/components/messages/Message";
import MyMessage from "@/modules/user/messenger/components/messages/MyMessage";
import React, { useCallback, useState } from "react";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import ModalAddMedia from "@/modules/user/messenger/components/modal/ModalAddMedia";

interface RenderMessagesProps {
    id: string | number;
};

const ChatMessageWrapper = styled('div')<{$paddingTop: boolean, $paddingBottom: boolean}>`
    position: relative;
    width: inherit;
    background-color: inherit;
    padding-top: ${props => props.$paddingTop ? '150px' : '90px'};
    padding-bottom: ${props => props.$paddingBottom? '170px' : '110px'};
`;

const RenderMessages: React.FC<RenderMessagesProps> = React.memo(({ id }) => {
    const [openModal, setOpenModal] = useState(false);

    const storeChats = useAppSelector(state => state.newChatReducer);
    const currentChat = storeChats.chats[id];
    const messages = currentChat.messages;
    const pinnedMessage = currentChat.pinnedMessage;
    const isForward = currentChat.answeredMessages || storeChats.forwardMes || currentChat.editedMessageId;

    const renderMessages = useCallback(() => {
        return messages.map((mes) => {
            return (
                mes.author === 'Ilia'
                    ? <MyMessage
                        text={mes.text}
                        time={mes.createdAt}
                        media={mes.media}
                        chatId={id}
                        mesId={mes.id}
                        answerMes={mes.answeredMessage}
                        forwardMes={mes.forwardMessage}
                        isEdited={mes.isEdited}
                        setOpenModal={setOpenModal}
                    />
                    : <Message
                        text={mes.text}
                        time={mes.createdAt}
                        media={mes.media}
                        chatId={id}
                        mesId={mes.id}
                        answerMes={mes.answeredMessage}
                        forwardMes={mes.forwardMessage}
                        isEdited={mes.isEdited}
                        setOpenModal={setOpenModal}
                    />
            )
        });
    }, [messages]);

    return (
        <>
            <ModalAddMedia isOpen={openModal} setOpen={() => setOpenModal(false)} />

            <ChatMessageWrapper $paddingTop={!!pinnedMessage} $paddingBottom={!!isForward}>
                {renderMessages()}
            </ChatMessageWrapper>
        </>
    );
});

export default RenderMessages;
