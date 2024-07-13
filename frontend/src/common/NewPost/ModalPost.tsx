import Modal from "../components/ui/Modal";
import Post from "./Post";
import { DescriptionBlock, ModalPostContent, ModalPostHeader, ModalPostWrapper, PostMediaContent } from "./style";

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

                    <DescriptionBlock>
                        Фото/видео
                    </DescriptionBlock>

                        <Post></Post>
                </ModalPostContent>
            </ModalPostWrapper>
        </Modal>
    </>
}

export default ModalPost;