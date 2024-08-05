import Modal from "@/common/components/modal/Modal";
import { User } from "@/store/reducers/user/types";
import {
  ProfileBackgroundImage,
  ProfileBackgroungImageWrapper,
  ProfileUserAvatar,
  ProfileUserName,
} from "@/modules/user/profile/components/styles";
import {
  ModalProfileBackgroundWrapper,
  ModalProfileUserAvatarWrapper,
  ModalProfileWrapper,
} from "@/modules/user/profile/components/modal/styles";

const defaultAvatar = "/images/avatar.svg";

interface ModalProfileInfoProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  user?: User;
}

export const ModalProfileInfo = ({
  isOpen,
  setOpen,
  title,
  user,
}: ModalProfileInfoProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      closeIcon={true}
      title={title}
      zIndex={1001}
    >
      <ModalProfileWrapper>
        <ModalProfileBackgroundWrapper>
          <ProfileBackgroungImageWrapper>
            <ProfileBackgroundImage src={user?.backgroundImg} />
          </ProfileBackgroungImageWrapper>

          <ModalProfileUserAvatarWrapper>
            <ProfileUserAvatar src={user?.avatarImg || defaultAvatar} />
          </ModalProfileUserAvatarWrapper>
        </ModalProfileBackgroundWrapper>

        <ProfileUserName>{user?.username}</ProfileUserName>
      </ModalProfileWrapper>
    </Modal>
  );
};
