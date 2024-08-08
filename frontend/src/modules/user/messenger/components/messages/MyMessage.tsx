import { useCallback, useRef, useState } from "react";
import {
    MyMessageWrapper,
} from "@/modules/user/messenger/components/messages/style";
import MessageDropdownMenu from "@/modules/user/messenger/components/DropMenu/MessageDropdownMenu";
import { useActions } from "@/store/actions";
import { IForwardMessage } from "@/store/messenger/messengerTypes";
import useDataMessageStore from "@/modules/user/messenger/hooks/useDataMessageStore";
import MessageInfo from "@/modules/user/messenger/components/messages/components/MessageInfo"
import MessageContent from "@/modules/user/messenger/components/messages/components/MessageContent";
import ForwardMessage from "@/modules/user/messenger/components/messages/components/ForwardMessage";
import ModalAddMedia from "@/modules/user/messenger/components/modal/ModalAddMedia";

interface MessageProps {
    text?: string;
    time: string;
    media?: File;
    chatId: number | string;
    mesId: number | string;
    answerMes?: number | string;
    forwardMes?: IForwardMessage;
    isFirst?: boolean;
    isLast?: boolean;
    isEdited?: boolean;
};

const MyMessage = ({
    text,
    time,
    media,
    chatId,
    mesId,
    answerMes,
    forwardMes,
    isFirst,
    isLast,
    isEdited,
}: MessageProps) => {
    const [focus, setFocus] = useState(false);
    const [dropdownIsOpen, setDropdownOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const MyMessage = useRef<HTMLDivElement>(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const { messages: currentMessages, pinnedMessage, isForward } = useDataMessageStore({ chatId: chatId });

    let forwardMessages;
    if (forwardMes) {
        const { messages } = useDataMessageStore({ chatId: forwardMes.chatId });
        forwardMessages = messages.find(message => message.id === forwardMes.mesId);
    }
    else {
        forwardMessages = currentMessages.find(message => message.id === answerMes);
    };

    const {
        setAnsweredMessage,
        deleteMessage,
        pinMessage,
        addForwardMessage,
        setEditedMessage,
    } = useActions();

    const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setX(e.clientX);
        setY(e.clientY);
        setFocus(true);
        setDropdownOpen(true);
    };

    const handleBlur = () => {
        setFocus(false);
        setTimeout(() => {
            setDropdownOpen(false);
        }, 250);
    };

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(text || '');
    }, [text]);

    const handleAnswer = useCallback(() => {
        setAnsweredMessage({ chatId, answeredMes: mesId });
        setDropdownOpen(false);
    }, [chatId, mesId]);

    const handleDelete = useCallback(() => {
        deleteMessage({ chatId: chatId, mesId: mesId });
        setDropdownOpen(false);
    }, [chatId, mesId]);

    const handlePinMessage = useCallback(() => {
        pinMessage({ chatId: chatId, mesId: mesId });
        setDropdownOpen(false);
    }, [chatId, mesId]);

    const handleForwardMessage = useCallback(() => {
        addForwardMessage({ chatId: chatId, mesId: mesId });
        setOpenModal(true);
        setDropdownOpen(false);
    }, [chatId, mesId]);

    const handleEdit = useCallback(() => {
        setEditedMessage({ chatId: chatId, mesId: mesId });
    }, [chatId, mesId]);

    const setOpen = () => {
        setOpenModal(false);
        setDropdownOpen(false);
    };

    return (
        <>
            <ModalAddMedia isOpen={openModal} setOpen={setOpen} />

            <MyMessageWrapper
                ref={MyMessage}
                tabIndex={0}
                onContextMenu={handleRightClick}
                onBlur={handleBlur}
                isFocus={focus}
                onDoubleClick={handleAnswer}
                isFlex={(media || (text || '').length > 15 || forwardMessages) ? false : true}
                style={{
                    marginTop: isFirst && pinnedMessage ? '60px' : '0',
                    marginBottom: isLast && isForward ? '60px' : '10px',
                }}>

                <ForwardMessage forwardMessages={forwardMessages} />

                <MessageContent text={text} media={media} />
                
                <MessageInfo time={time} isEdited={isEdited} />

                <MessageDropdownMenu
                    isOpen={dropdownIsOpen}
                    handleCopy={handleCopy}
                    handleAnswer={handleAnswer}
                    handleDelete={handleDelete}
                    handlePinMessage={handlePinMessage}
                    handleForwardMessage={handleForwardMessage}
                    handleEdit={handleEdit}
                    x={x}
                    y={y}
                />
            </MyMessageWrapper>
        </>
    )
};

export default MyMessage;