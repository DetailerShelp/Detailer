import { useState } from "react";
import Modal from "@/common/components/ui/Modal";
import Post from "@/modules/NewPost/components/post/Post";
import TabsMenu from "@/modules/NewPost/components/TabsMenu";
import { Tabs } from "@/modules/NewPost/utils/Enums";
import {
    ButtonPostCancel,
    ButtonPostOk,
    ButtonsWrapper,
    ContentWrapper,
    ModalPostContent,
    ModalPostHeader,
    ModalPostWrapper
} from "@/modules/NewPost/style";
import ModalConfirm from "@/common/components/ui/ModalConfirm";
import ShotrsUpload from "@/modules/NewPost/components/shorts/ShortsUload";

interface ModalPostProps {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
}

const ModalPost = ({ isOpen, setOpen }: ModalPostProps) => {
    const [moduleTab, setModuleTab] = useState(Tabs.POST);
    const [openConf, setOpenConf] = useState(false);

    const onCancel = () => {
        setOpen(false);
        setOpenConf(false);
        setModuleTab(Tabs.POST);
    };

    const onOk = () => {
        setOpenConf(false);
    };

    const closeModal = () => {
        setOpenConf(true);
    };

    return <>
        <ModalConfirm
            isOpen={openConf}
            zIndex={1005}
            headerText={'Вы действительно хотите отменить создание поста? После закрытия данные не будут сохранены'}
            okText="Отмена"
            cancelText="Удалить"
            onOk={onOk}
            onCancel={onCancel}
            style={{ borderRadius: '25px' }}
        />
        <Modal isOpen={isOpen} onClose={closeModal} closeIcon={true} zIndex={1001}>
            <ModalPostWrapper>
                <ModalPostContent>
                    <ModalPostHeader>
                        Создать
                    </ModalPostHeader>
                    
                    <ContentWrapper>
                        <TabsMenu onSwap={setModuleTab}></TabsMenu>
                        {moduleTab === Tabs.POST && <Post></Post>}
                        {moduleTab === Tabs.SHORTS && <ShotrsUpload></ShotrsUpload>}
                        {moduleTab === Tabs.GARAGE && <div style={{ height: '500px' }}>GARAGE</div>}
                    </ContentWrapper>

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