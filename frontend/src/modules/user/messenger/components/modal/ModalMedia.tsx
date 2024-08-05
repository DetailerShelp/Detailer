import Modal from "@/common/components/ui/Modal";
import { useActions } from "@/store/actions";
import { useState } from "react";
import RenderMedia from "@/modules/user/messenger/components/render/RenderMedia";
import { 
    ButtonsWrapper, 
    ModalMediaWrapper 
} from "@/modules/user/messenger/components/modal/style";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import TextArea from "@/common/components/ui/TextArea";

interface ModalMediaProps {
    chatId: number | string;
    modalOpen: boolean;
    media: File | undefined;
    setModalOpen: (isOpen: boolean) => void;
};

const ModalMedia = ({ chatId, modalOpen, media, setModalOpen }: ModalMediaProps) => {
    if (!media) return null; 

    const [text, setText] = useState('');
    const { addNewMessageMedia } = useActions();

    const handleChangeText = (value: string) => {
        setText(value);
    };

    const handleCancel = () => {
        setModalOpen(false);
    };

    const handleOk = () => {
        addNewMessageMedia({ text: text, chatId: chatId, media: media! });
        setText('');
        setModalOpen(false);
    };

    return (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} zIndex={1001}>
            <ModalMediaWrapper>
                <RenderMedia media={media} withTitle={true} />
                <TextArea
                    textAreaPlaceholder="Подпись"
                    value={text}
                    setText={handleChangeText}
                    wrapperStyle={{height:'60px'}}
                />
                <ButtonsWrapper>
                    <BlackWhiteButton color="white" title="Отмена" size={30} click={handleCancel}/>
                    <BlackWhiteButton color="black" title="Отправить" size={30} click={handleOk}/>
                </ButtonsWrapper>
            </ModalMediaWrapper>
        </Modal>
    )
};

export default ModalMedia;