import { useState } from "react";
import Modal from "@/common/components/modal/Modal";
import Post from "@/modules/NewPost/components/post/Post";
import ModalConfirm from "@/common/components/modal/ModalConfirm";
import ShotrsUpload from "@/modules/NewPost/components/shorts/ShortsUload";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import {
  NavigationList,
  NavProfileButton,
} from "@/common/styles/tags/button/NavProfileButton";
import {
  ModalButtonsWrapper,
  ModalScrollContentWrapper,
} from "@/common/components/modal/styles";

interface ModalPostProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  page?: string;
}

const ModalPost = ({ isOpen, setOpen, page }: ModalPostProps) => {
  const [moduleTab, setModuleTab] = useState(page || "post");
  const [openConf, setOpenConf] = useState(false);

  const onCancel = () => {
    setOpen(false);
    setOpenConf(false);
    setModuleTab(page || "post");
  };

  const onOk = () => {
    setOpenConf(false);
  };

  const closeModal = () => {
    setOpenConf(true);
  };

  return (
    <>
      <ModalConfirm
        isOpen={openConf}
        zIndex={1005}
        headerText={
          "Вы действительно хотите отменить создание поста? После закрытия данные не будут сохранены"
        }
        okText="Отмена"
        cancelText="Удалить"
        onOk={onOk}
        onCancel={onCancel}
        style={{ borderRadius: "25px" }}
      />
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Создать"
        closeIcon={true}
        zIndex={1001}
      >
        <ModalScrollContentWrapper>
          <NavigationList>
            <NavProfileButton
              isActive={moduleTab === "post"}
              click={() => setModuleTab("post")}
              icon="post"
              title="Посты"
            />
            <NavProfileButton
              isActive={moduleTab === "shorts"}
              click={() => setModuleTab("shorts")}
              icon="shorts"
              title="Шортсы"
            />
            <NavProfileButton
              isActive={moduleTab === "garage"}
              click={() => setModuleTab("garage")}
              icon="garage"
              title="Гараж"
            />
          </NavigationList>

          {moduleTab === "post" && <Post />}
          {moduleTab === "shorts" && <ShotrsUpload />}
          {moduleTab === "garage" && (
            <div style={{ height: "500px" }}>GARAGE</div>
          )}
        </ModalScrollContentWrapper>

        <ModalButtonsWrapper>
          <BlackWhiteButton
            color="white"
            title="Отмена"
            size={40}
            click={closeModal}
          />
          <BlackWhiteButton color="black" title="Опубликовать" size={40} />
        </ModalButtonsWrapper>
      </Modal>
    </>
  );
};

export default ModalPost;
