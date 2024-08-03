import DragAndDropUpload from "@/common/components/DraggerUploadFile";
import TextArea from "@/common/components/ui/TextArea";
import { flexCenter, resetButton } from "@/common/styles/mixins";
import { borders, colors, device } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useActions } from "@/store/actions";
import { useState } from "react";
import styled from "styled-components";
import ModalMedia from "@/modules/user/messenger/components/modal/ModalMedia";
import ForwardsMessage from "@/modules/user/messenger/components/ForwardsMessage";

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

    &:hover{
        background-color: ${colors.grayBorder};
    }
`

const MessageTool = styled(SvgHelper)`
    width: 35px;
    height: 35px;
`

const MessageTextWrapper = styled('div')`
    width: 100%;
    height: 60px;
`

const CreaterMessage = ({ id }: CreaterMessageProps) => {
    const [text, setText] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [media, setMedia] = useState<File>();

    const { addNewMessage } = useActions();

    const handleNewMes = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text.trim()) {
            addNewMessage({ text: text, chatId: id! });
            setText('');
        }
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

            <ForwardsMessage idChat={id}/>

            <MessageWrapper onSubmit={handleNewMes}>
                <DragAndDropUpload onFile={handleAddFile} multiple={false}>
                    <MessageToolWrapper>
                        <MessageTool iconName="clip" />
                    </MessageToolWrapper>
                </DragAndDropUpload>

                <MessageTextWrapper>
                    <TextArea
                        value={text}
                        setText={setText}
                        textAreaPlaceholder="Сообщение"
                        wrapperStyle={{ padding: '7px 10px', height: '100%' }}
                        style={{ height: '110%' }}
                    />
                </MessageTextWrapper>

                <MessageToolWrapper>
                    <MessageTool iconName="emoticon" />
                </MessageToolWrapper>

                <MessageToolWrapper type="submit">
                    <MessageTool iconName="sender" />
                </MessageToolWrapper>
            </MessageWrapper >
        </>
    )
};

export default CreaterMessage;