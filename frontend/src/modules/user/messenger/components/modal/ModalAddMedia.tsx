import Modal from "@/common/components/ui/Modal";
import RenderPreviewChats from "@/modules/user/messenger/components/render/RenderPreviewChats";

interface ModalAddMediaProps {
    isOpen: boolean;
    setOpen: ()=>void;
}

const ModalAddMedia = ({isOpen, setOpen}:ModalAddMediaProps) => {
    return (
        <Modal isOpen={isOpen} onClose={setOpen} zIndex={1010}>
            <RenderPreviewChats onClick={setOpen}/>
        </Modal>
    )
};

export default ModalAddMedia;