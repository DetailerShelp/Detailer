import Modal from "@/common/components/modal/Modal";
import RenderShortPreviewChats from "@/modules/user/messenger/components/render/RenderShortPreviewChats";
import { HeaderText, ModalWrapper } from "@/modules/user/messenger/components/modal/style";

interface ModalAddMediaProps {
    isOpen: boolean;
    setOpen: () => void;
};

const ModalAddMedia = ({ isOpen, setOpen }: ModalAddMediaProps) => {
    return (
        <Modal isOpen={isOpen} zIndex={1010}>
            <ModalWrapper>
                <HeaderText>Поделиться</HeaderText>
                <RenderShortPreviewChats onClick={setOpen} />
            </ModalWrapper>
        </Modal>
    )
};

export default ModalAddMedia;