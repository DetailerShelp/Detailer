import { useState } from "react";
import Modal from "@/common/components/ui/Modal";
import Post from "@/modules/NewPost/components/Post";
import TabsMenu from "@/modules/NewPost/components/TabsMenu";
import { Tabs } from "@/modules/NewPost/utils/Enums";
import {
    ButtonPostCancel,
    ButtonPostOk,
    ButtonsWrapper,
    ModalPostContent,
    ModalPostHeader,
    ModalPostWrapper
} from "@/modules/NewPost/style";

interface ModalPostProps {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
}

const ModalPost = ({ isOpen, setOpen }: ModalPostProps) => {
    const [moduleTab, setModuleTab] = useState(Tabs.POST);

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

                    <TabsMenu onSwap={setModuleTab}></TabsMenu>
                    {moduleTab === Tabs.POST && <Post></Post>}
                    {moduleTab === Tabs.SHORTS && <div style={{ height: '500px' }}>SHORTS</div>}
                    {moduleTab === Tabs.GARAGE && <div style={{ height: '500px' }}>GARAGE</div>}

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