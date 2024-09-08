import Modal from "@/common/components/modal/Modal";
import {
  ModalScrollContentWrapper,
  ModalSearchWrapper,
  ModalProfileList,
} from "@/common/components/modal/styles";
import { SearchInput } from "@/common/styles/tags/input/SearchInput";
import { ShortUserInfo } from "@/store/reducers/user/types";
import { ProfileEmptyPublication } from "@/modules/user/profile/components/ProfileEmptyPublication";

interface ModalProfilesListProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  placeholder: string;
  user?: ShortUserInfo[];
}

export const ModalProfilesList = ({
  isOpen,
  setOpen,
  title,
  placeholder,
  user,
}: ModalProfilesListProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      closeIcon={true}
      title={title}
      zIndex={1001}
    >
      <ModalSearchWrapper>
        <SearchInput placeholder={placeholder} />
      </ModalSearchWrapper>

      <ModalScrollContentWrapper>
        {user?.length !== 0 ? (
          <ModalProfileList>
            
          </ModalProfileList>
        ) : (
          <ProfileEmptyPublication title={`Нет ${placeholder}`} icon="profileGroup" />
        )}
      </ModalScrollContentWrapper>
    </Modal>
  );
};
