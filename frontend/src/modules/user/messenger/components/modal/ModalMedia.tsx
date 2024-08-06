import Modal from "@/common/components/modal/Modal";
import { useActions } from "@/store/actions";
import { useState } from "react";
import RenderMedia from "@/modules/user/messenger/components/render/RenderMedia";
import { 
    ButtonPostCancel, 
    ButtonPostOk, 
    ButtonsWrapper, 
    ModalMediaWrapper 
} from "@/modules/user/messenger/components/modal/style";

interface ModalMediaProps {
    chatId: number | string;
    modalOpen: boolean;
    media: File | undefined;
    setModalOpen: (isOpen: boolean) => void;
};

const ModalMedia = ({ chatId, modalOpen, media, setModalOpen }: ModalMediaProps) => {
    if (!media) return null; // Если media нет, возвращаем null

    const [text, setText] = useState('');
    const { addNewMessageMedia } = useActions();

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
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

                <input type="text" placeholder="Подпись" onChange={handleChangeText} value={text}></input>

                <ButtonsWrapper>
                    <ButtonPostCancel onClick={handleCancel}>Отмена</ButtonPostCancel>
                    <ButtonPostOk onClick={handleOk}>Отправить</ButtonPostOk>
                </ButtonsWrapper>
            </ModalMediaWrapper>
        </Modal>
    )
};

export default ModalMedia;