import { useRef, useState } from "react";
import {
    MyMessageWrapper,
} from "@/modules/user/messenger/components/messages/style";
import MessageDropdownMenu from "@/modules/user/messenger/components/dropMenu/MessageDropdownMenu";
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
};

const MyMessage = ({ text, time, media, chatId, mesId, answerMes, forwardMes }: MessageProps) => {
    const [focus, setFocus] = useState(false);
    const [dropdownIsOpen, setDropdownOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const MyMessage = useRef<HTMLDivElement>(null);

    const { messages: currentMessages } = useDataMessageStore({ chatId: chatId });

    let forwardMessages;
    if (forwardMes) {
        const { messages } = useDataMessageStore({ chatId: forwardMes.chatId });
        forwardMessages = messages.find(message => message.id === forwardMes.mesId);
    }
    else{
        forwardMessages = currentMessages.find(message => message.id === answerMes);
    };

    const { 
        setAnsweredMessage, 
        deleteMessage, 
        pinMessage, 
        addForwardMessage 
    } = useActions();

    const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setFocus(true);
        setDropdownOpen(true);
    };

    const handleBlur = async () => {
        await setTimeout(() => {
            setFocus(false);
            setDropdownOpen(false);
        }, 100);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text || '')
    };

    const handleAnswer = async () => {
        await setTimeout(() => {
            setAnsweredMessage({ chatId: chatId, answeredMes: mesId });
        }, 100);
    };

    const handleDelete = () => {
        deleteMessage({ chatId: chatId, mesId: mesId });
    };

    const handlePinMessage = () => {
        pinMessage({ chatId: chatId, mesId: mesId });
    };

    const handleForwardMessage = () => {
        addForwardMessage({ chatId: chatId, mesId: mesId });
        setOpenModal(true);
    };

    const setOpen = ()=>{
        setOpenModal(false);
    };

    return (
        <>
            <ModalAddMedia isOpen={openModal} setOpen={setOpen}/>

            <MyMessageWrapper
                ref={MyMessage}
                tabIndex={0}
                onContextMenu={handleRightClick}
                onBlur={handleBlur}
                isFocus={focus}
                onDoubleClick={handleAnswer}>

                <ForwardMessage forwardMessages={forwardMessages}/>

                <MessageContent text={text} media={media}/>

                <MessageInfo time={time}/>

                <MessageDropdownMenu
                    isOpen={dropdownIsOpen}
                    handleCopy={handleCopy}
                    handleAnswer={handleAnswer}
                    handleDelete={handleDelete}
                    handlePinMessage={handlePinMessage}
                    handleForwardMessage={handleForwardMessage}
                />
            </MyMessageWrapper>
        </>
    )
};

export default MyMessage;