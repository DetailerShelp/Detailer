import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { WhiteButtonWithIcon } from "@/common/styles/tags/button/WhiteButtonWithIcon";
import {
  ProfileBackgroundImage,
  ProfileBackgroundWrapper,
  ProfileBackgroungImageWrapper,
  ProfileBackWrapper,
  ProfileBlockedWrapper,
  ProfileButtonMoreWrapper,
  ProfileButtonsWrapper,
  ProfileContentWrapper,
  ProfileHideButtonWrapper,
  ProfileMoreWrapper,
  ProfileRaitingList,
  ProfileUserAvatar,
  ProfileUserAvatarWrapper,
  ProfileUserDescription,
  ProfileUserHeaderWrapper,
  ProfileUserName,
  ProfileWrapper,
} from "@/modules/user/profile/components/styles";
import { ProfileItem } from "@/modules/user/profile/components/ProfileItem";
import { DropdownWrapper } from "@/common/components/dropdown-menu/styles";
import { memo, useState } from "react";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { ProfileDropdownMenu } from "@/modules/user/profile/components/ProfileDropdownMenu";
import { User } from "@/store/reducers/user/types";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useNavigate } from "react-router-dom";
import {
  NavProfileButton,
  NavigationList,
} from "@/common/styles/tags/button/NavProfileButton";
import { ProfilePosts } from "@/modules/user/profile/components/publication/ProfilePosts";
import { ProfileShorts } from "@/modules/user/profile/components/publication/ProfileShorts";
import { ProfileGarage } from "@/modules/user/profile/components/publication/ProfileGarage";
import { ModalProfilesList } from "@/modules/user/profile/components/modal/ModalProfilesList";
import { ModalProfileInfo } from "@/modules/user/profile/components/modal/ModalProfileInfo";
import { ModalQR } from "@/common/components/modal/ModalQR";
import { ModalReport } from "@/common/components/modal/ModalReport";
import ModalConfirm from "@/common/components/modal/ModalConfirm";
import { useToast } from "@/common/toast/toast-contex";
import {
  profileBlockInfo,
  profileQuitSuccess,
  profileUnlockInfo,
} from "@/common/toast/toastsMessages/profileToasts";

const defaultAvatar = "/images/avatar.svg";
const defaultBackground = "/images/background.svg";

interface ProfileProps {
  user?: User;
}

export const Profile = memo(({ user }: ProfileProps) => {
  const [publicationPage, setPublicationPage] = useState("post");
  const [dropdownIsOpen, setDropdownOpen] = useState(false);
  const [modalProfileInfo, setModalProfileInfo] = useState(false);
  const [modalQR, setModalQR] = useState(false);
  const [modalReport, setModalReport] = useState(false);
  const [modalQuit, setModalQuit] = useState(false);
  const [modalBlock, setModalBlock] = useState(false);

  //TODO api about blocked user
  const [isBlocked, setBlocked] = useState(false);

  const [modalSubscribers, setModalSubscribers] = useState(false);
  const [modalSubscribes, setModalSubscribes] = useState(false);

  const userSubscribers = !!user?.subscribers ? user?.subscribers.length : 0;
  const userSubscribes = !!user?.subscribes ? user?.subscribes.length : 0;
  const posts = !!user?.posts ? user?.posts.length : 0;
  const shorts = !!user?.shorts ? user?.shorts.length : 0;
  const garage = !!user?.garage ? user?.garage.length : 0;
  const userPosts = posts + shorts + garage;

  const currentUserId = authorizedUser();
  const isAdmin = user?.id == currentUserId;
  const navigate = useNavigate();
  const toast = useToast();

  const onQuitCancel = () => {
    //TODO link to /auth
    setModalQuit(false);
    toast?.success(profileQuitSuccess);
  };

  const onQuitOk = () => {
    setModalQuit(false);
  };

  const onBlockCancel = () => {
    setModalBlock(false);
    setBlocked(!isBlocked);
    isBlocked ? toast?.info(profileUnlockInfo) : toast?.info(profileBlockInfo);
  };

  const onBlockOk = () => {
    setModalBlock(false);
  };

  return (
    <ProfileWrapper>
      <ModalQR
        isOpen={modalQR}
        setOpen={setModalQR}
        title="Пользователя"
        userAvatar={user?.avatarImg}
      />

      {user?.id !== currentUserId && (
        <ModalReport isOpen={modalReport} setOpen={setModalReport} />
      )}

      <ModalProfileInfo
        isOpen={modalProfileInfo}
        setOpen={setModalProfileInfo}
        title="Подробная информация"
        user={user}
      />

      <ModalConfirm
        isOpen={modalQuit}
        zIndex={1005}
        headerText={"Вы действительно хотите выйти из аккаунта?"}
        okText="Отмена"
        cancelText="Выйти"
        onOk={onQuitOk}
        onCancel={onQuitCancel}
        style={{ borderRadius: "25px" }}
      />

      <ModalConfirm
        isOpen={modalBlock}
        zIndex={1005}
        headerText={
          isBlocked
            ? "Вы действительно хотите разблокировать данного пользователя?"
            : "Вы действительно хотите заблокироавть данного пользователя? После блокировки у вас не будет доступа к этому аккаунту"
        }
        okText="Отмена"
        cancelText={isBlocked ? "Разблокировать" : "Заблокировать"}
        onOk={onBlockOk}
        onCancel={onBlockCancel}
        style={{ borderRadius: "25px" }}
      />

      <ProfileBackgroundWrapper>
        <ProfileBackgroungImageWrapper>
          <ProfileBackgroundImage
            src={user?.backgroundImg || defaultBackground}
          />
        </ProfileBackgroungImageWrapper>

        <ProfileBackWrapper>
          <ButtonWithIcon
            icon="arrowLeft"
            title="Назад"
            size={35}
            click={() => navigate(-1)}
          />
        </ProfileBackWrapper>

        <ProfileMoreWrapper>
          <DropdownWrapper
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <ProfileButtonMoreWrapper>
              <ButtonWithIcon icon="burger" size={35} />
            </ProfileButtonMoreWrapper>
            {dropdownIsOpen && (
              <ProfileDropdownMenu
                setDropdownOpen={setDropdownOpen}
                setModalProfileInfo={setModalProfileInfo}
                setModalQR={setModalQR}
                setModalReport={setModalReport}
                setModalQuit={setModalQuit}
                setModalBlock={setModalBlock}
                isBlocked={isBlocked}
              />
            )}
          </DropdownWrapper>
        </ProfileMoreWrapper>

        <ProfileUserHeaderWrapper>
          <ProfileUserAvatarWrapper>
            <ProfileUserAvatar src={user?.avatarImg || defaultAvatar} />
          </ProfileUserAvatarWrapper>
          <ProfileUserName>{user?.username}</ProfileUserName>
        </ProfileUserHeaderWrapper>
      </ProfileBackgroundWrapper>

      {isBlocked ? (
        <ProfileBlockedWrapper>
          <ProfileUserDescription>
            Пользователь ограничил доступ к своему аккаунту
          </ProfileUserDescription>
        </ProfileBlockedWrapper>
      ) : (
        <>
          {!!user?.description && (
            <ProfileUserDescription>{user?.description}</ProfileUserDescription>
          )}

          <ProfileRaitingList>
            <ProfileItem
              title="Подписчики"
              count={userSubscribers}
              click={() => setModalSubscribers(true)}
            />
            <ProfileItem
              title="Подписки"
              count={userSubscribes}
              click={() => setModalSubscribes(true)}
            />
            <ProfileItem title="Публикации" count={userPosts} />
          </ProfileRaitingList>

          <ModalProfilesList
            isOpen={modalSubscribers}
            setOpen={setModalSubscribers}
            title="Подписчики"
            placeholder="подписчиков"
            user={user?.subscribers}
          />

          <ModalProfilesList
            isOpen={modalSubscribes}
            setOpen={setModalSubscribes}
            title="Подписки"
            placeholder="подписок"
            user={user?.subscribes}
          />

          {isAdmin ? (
            <ProfileButtonsWrapper>
              <ProfileHideButtonWrapper>
                <WhiteButtonWithIcon
                  size={40}
                  title="Редактировать"
                  icon="edit"
                  click={() => navigate("/edit")}
                />
              </ProfileHideButtonWrapper>
              <BlackWhiteButton size={40} title="Избранное" color="black" />
            </ProfileButtonsWrapper>
          ) : (
            <ProfileButtonsWrapper>
              <ProfileHideButtonWrapper>
                <WhiteButtonWithIcon
                  size={40}
                  title="Подписаться"
                  icon="plus"
                />
              </ProfileHideButtonWrapper>
              <BlackWhiteButton size={40} title="Написать" color="black" />
            </ProfileButtonsWrapper>
          )}

          <ProfileContentWrapper>
            <NavigationList>
              <NavProfileButton
                isActive={publicationPage === "post"}
                click={() => setPublicationPage("post")}
                icon="post"
                title="Посты"
              />
              <NavProfileButton
                isActive={publicationPage === "shorts"}
                click={() => setPublicationPage("shorts")}
                icon="shorts"
                title="Шортсы"
              />
              <NavProfileButton
                isActive={publicationPage === "garage"}
                click={() => setPublicationPage("garage")}
                icon="garage"
                title="Гараж"
              />
            </NavigationList>

            {publicationPage === "post" && (
              <ProfilePosts
                isAuthorizedUser={user?.isAuthorizedUser}
                post={user?.posts}
              />
            )}
            {publicationPage === "shorts" && (
              <ProfileShorts
                isAuthorizedUser={user?.isAuthorizedUser}
                shorts={user?.shorts}
              />
            )}
            {publicationPage === "garage" && (
              <ProfileGarage
                isAuthorizedUser={user?.isAuthorizedUser}
                garage={user?.garage}
              />
            )}
          </ProfileContentWrapper>
        </>
      )}
    </ProfileWrapper>
  );
});
