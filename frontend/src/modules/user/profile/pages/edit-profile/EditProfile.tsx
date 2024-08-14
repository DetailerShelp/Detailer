import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { MultipleInput } from "@/common/styles/tags/textarea/MultipleInput";
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
  EditProfileUserDescriptionWrpper,
  EditProfileUserAvatarWrapper,
  EditProfileAvatarButtonWrapper,
} from "@/modules/user/profile/pages/edit-profile/styles";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { useNavigate } from "react-router-dom";

export const EditProfile = () => {
  const navigate = useNavigate();
  const userId = Number(authorizedUser());
  const { data } = useGetUserByIdQuery(userId);

  return (
    <EditProfileWrapper>
      <EditProfileHeader>
        <ButtonWithIcon
          size={35}
          icon="close"
          title="Отклонить изменения"
          click={() => navigate(`/profile/${userId}`)}
        />
        <EditProfileTitle>Редактировать</EditProfileTitle>
        <ButtonWithIcon size={35} icon="checkMark" title="Принять изменения" />
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

          <EditProfileBackgroundImage src={data?.backgroundImg} />

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
                <ButtonWithIcon size={window.innerWidth >= 768 ? 100 : 85} icon="camera" title="Изменить аватар профиля" />
              </EditProfileAvatarButtonWrapper>
              <EditProfileUserAvatar
                src={data?.avatarImg}
                alt={`${data?.username}'s avatar`}
              />
            </EditProfileUserAvatarWrapper>

            <EditProfileUserName>{data?.username}</EditProfileUserName>
          </EditProfileUserHeaderWrapper>
        </EditProfileBackgroundWrapper>

        <EditProfileUserDescriptionWrpper>
          <MultipleInput
            key="edit-profile"
            placeholder="Добавить информацию о себе..."
            title="Описание"
          />
        </EditProfileUserDescriptionWrpper>
      </EditProfileContent>
    </EditProfileWrapper>
  );
};
