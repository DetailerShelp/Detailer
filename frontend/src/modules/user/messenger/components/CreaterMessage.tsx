import DragAndDropUpload from "@/common/components/DraggerUploadFile";
import TextArea from "@/common/components/ui/TextArea";
import { flexCenter, hoverActive, resetButton } from "@/common/styles/mixins";
import { borders, colors, device } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useActions } from "@/store/actions";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ModalMedia from "@/modules/user/messenger/components/modal/ModalMedia";
import BottomSheet from "@/modules/user/messenger/components/extraInfo/BottomSheet";
import useDataMessageStore from "@/modules/user/messenger/hooks/useDataMessageStore";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

interface CreaterMessageProps {
    id: number | string;
};

const MessageWrapper = styled('form')`
    display: flex;
    align-items: center;
    padding-inline: 13px;
    gap: 15px;
    position: fixed;
    width: inherit;
    height: 90px;
    bottom: 20px;
    border-bottom-left-radius: ${borders.defaultBorderRadius};
    border-bottom-right-radius: ${borders.defaultBorderRadius};
    background-color: ${colors.whiteTotal};
    z-index: 5;

    @media ${device.mobile}{
        bottom: 70px;
    }
`

const MessageToolWrapper = styled('button')`
    ${resetButton}
    ${flexCenter}
    height: 50px;
    aspect-ratio: 1;
    border-radius: ${borders.circleBorderRadius};

    ${hoverActive}
`

const MessageTool = styled(SvgHelper)`
    width: 35px;
    height: 35px;
`

const MessageTextWrapper = styled('div')`
    width: 100%;
    height: 60px;
`

const PickerWrapper = styled('div')`
    position: absolute;
    bottom: 60px;
    right: 10px;
    padding-bottom: 40px;
`

const CreaterMessage = ({ id }: CreaterMessageProps) => {
    const { editedMessage, editedMessageId } = useDataMessageStore({ chatId: id });

    const [text, setText] = useState<string>('');
    const [modalOpen, setModalOpen] = useState(false);
    const [media, setMedia] = useState<File>();
    const [showPicker, setShowPicker] = useState(false);

    const textarea = useRef<HTMLTextAreaElement>(null);

    const {
        addNewMessage,
        setTextMessage,
        setEditedMessage,
    } = useActions();

    useEffect(() => {
        if (editedMessage) {
            setText(editedMessage.text || '');
        } else {
            setText('');
        }
    }, [editedMessage?.text, editedMessageId])

    const handleNewMes = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text.trim())
            if (editedMessage) {
                if (text !== editedMessage.text) {
                    setTextMessage({ text: text, chatId: id, mesId: editedMessageId })
                }
                else {
                    setEditedMessage({ chatId: id, mesId: undefined });
                }
                setText('');
            }
            else {
                addNewMessage({ text: text, chatId: id });
                setText('');
            }
        setShowPicker(false);
    };

    const handleAddEmoji = (emoji: { native: string }) => {
        if (textarea.current) {
            const start = textarea.current.selectionStart;
            const end = textarea.current.selectionEnd;
            setText(prev => prev.slice(0, start) + emoji.native + prev.slice(end));
        };
    };

    const handleAddFile = (file: File) => {
        setMedia(file);
        setModalOpen(true);
    };

    return (
        <>
            <ModalMedia
                chatId={id!}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                media={media!}
            />

            <BottomSheet idChat={id} />

            <MessageWrapper onSubmit={handleNewMes}>
                <DragAndDropUpload onFile={handleAddFile} multiple={false}>
                    <MessageToolWrapper type="button">
                        <MessageTool iconName="clip" />
                    </MessageToolWrapper>
                </DragAndDropUpload>

                <MessageTextWrapper>
                    <TextArea
                        ref={textarea}
                        value={text}
                        setText={setText}
                        textAreaPlaceholder="Сообщение"
                        wrapperStyle={{ padding: '7px 10px', height: '100%' }}
                        style={{ height: '110%' }}
                    />
                </MessageTextWrapper>

                <MessageToolWrapper
                    type="button"
                    onMouseEnter={() => setShowPicker(true)}
                    onMouseLeave={() => setShowPicker(false)}
                >
                    <MessageTool iconName="emoticon" />

                    <PickerWrapper>
                        {showPicker && <Picker dats={data} onEmojiSelect={handleAddEmoji} theme='light' />}
                    </PickerWrapper>
                </MessageToolWrapper>

                <MessageToolWrapper type="submit">
                    <MessageTool iconName="sender" />
                </MessageToolWrapper>
            </MessageWrapper >
        </>
    )
};

export default CreaterMessage;