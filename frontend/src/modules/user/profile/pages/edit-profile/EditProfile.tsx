import ModalConfirm from "@/common/components/modal/ModalConfirm";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { MultipleInput } from "@/common/styles/tags/textarea/MultipleInput";
import { useToast } from "@/common/toast/toast-contex";
import {
  editProfileDefaultInfo,
  editProfileSuccessInfo,
} from "@/common/toast/toastsMessages/profileToasts";
import {
  EditProfileHeader,
  EditProfileWrapper,
  EditProfileTitle,
  EditProfileContent,
  EditProfileBackgroundWrapper,
  EditProfileBackgroundImage,
  EditProfileButtonWrapper,
  EditProfileUserHeaderWrapper,
  EditProfileUserAvatar,
  EditProfileUserName,
  EditProfileUserDescriptionWrapper,
  EditProfileUserAvatarWrapper,
  EditProfileAvatarButtonWrapper,
} from "@/modules/user/profile/pages/edit-profile/styles";
import { User } from "@/store/reducers/user/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface EditProfileProps {
  user?: User;
}

export const EditProfile = ({user}: EditProfileProps) => {
  const toast = useToast();
  const navigate = useNavigate();

  //TODO edit page
  const [isEdit, setEdit] = useState(true);
  const [openConf, setOpenConf] = useState(false);

  const back = () => {
    navigate(-1);
    toast?.info(editProfileDefaultInfo);
  };

  const onCancel = () => {
    setOpenConf(false);
    back();
  };

  const onOk = () => {
    setOpenConf(false);
  };

  const handleRejectEditClick = () => {
    isEdit ? setOpenConf(true) : back();
  };

  const handleAcceptEditClick = () => {
    isEdit
      ? toast?.success(editProfileSuccessInfo)
      : toast?.info(editProfileDefaultInfo);
    navigate(-1);
  };

  return (
    <EditProfileWrapper>
      <ModalConfirm
        isOpen={openConf}
        zIndex={1005}
        headerText={
          "Вы действительно хотите удалить изменения? После закрытия данные не будут сохранены"
        }
        okText="Отмена"
        cancelText="Удалить"
        onOk={onOk}
        onCancel={onCancel}
        style={{ borderRadius: "25px" }}
      />

      <EditProfileHeader>
        <ButtonWithIcon
          size={35}
          icon="close"
          title="Отклонить изменения"
          click={handleRejectEditClick}
        />
        <EditProfileTitle>Редактировать</EditProfileTitle>
        <ButtonWithIcon
          size={35}
          icon="checkMark"
          title="Принять изменения"
          click={handleAcceptEditClick}
        />
      </EditProfileHeader>
      <EditProfileContent>
        <EditProfileBackgroundWrapper>
          <EditProfileButtonWrapper $position="left">
            <ButtonWithIcon
              size={35}
              icon="edit"
              title="Изменить фон профиля"
            />
          </EditProfileButtonWrapper>

          <EditProfileBackgroundImage src={user?.backgroundImg} />

          <EditProfileButtonWrapper $position="right">
            <ButtonWithIcon
              size={35}
              icon="trash"
              title="Удалить фон профиля"
            />
          </EditProfileButtonWrapper>

          <EditProfileUserHeaderWrapper>
            <EditProfileUserAvatarWrapper>
              <EditProfileAvatarButtonWrapper>
                <ButtonWithIcon
                  size={window.innerWidth >= 768 ? 100 : 85}
                  icon="camera"
                  title="Изменить аватар профиля"
                />
              </EditProfileAvatarButtonWrapper>
              <EditProfileUserAvatar
                src={user?.avatarImg}
                alt={`${user?.username}'s avatar`}
              />
            </EditProfileUserAvatarWrapper>

            <EditProfileUserName>{user?.username}</EditProfileUserName>
          </EditProfileUserHeaderWrapper>
        </EditProfileBackgroundWrapper>

        <EditProfileUserDescriptionWrapper>
          <MultipleInput
            key="edit-profile"
            placeholder="Добавить информацию о себе..."
            title="Описание"
          />
        </EditProfileUserDescriptionWrapper>
      </EditProfileContent>
    </EditProfileWrapper>
  );
};
