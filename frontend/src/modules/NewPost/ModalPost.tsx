import Modal from "../../common/components/ui/Modal";
import Post from "./Post";
import { ButtonPostCancel, ButtonPostOk, ButtonsWrapper, ModalPostContent, ModalPostHeader, ModalPostWrapper } from "./style";

interface ModalPostProps {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
}

const ModalPost = ({ isOpen, setOpen }: ModalPostProps) => {
    const closeModal = () => {
        setOpen(false);
    }
    return <>
        <Modal isOpen={isOpen} onClose={closeModal} closeIcon={true} zIndex={1001}>
            <ModalPostWrapper>
                <ModalPostContent>
                    <ModalPostHeader>
                        Создать
                    </ModalPostHeader>

                    <Post></Post>
                    <ButtonsWrapper>
                        <ButtonPostCancel>Отмема</ButtonPostCancel>
                        <ButtonPostOk>Опубликовать</ButtonPostOk>
                    </ButtonsWrapper>
                </ModalPostContent>
            </ModalPostWrapper>
        </Modal>
    </>
}

export default ModalPost;