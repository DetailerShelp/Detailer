import { FC } from "react";
import {
  ProfileRaitingItem,
  ProfileRaitingButton,
} from "@/modules/user/profile/components/styles";
import { normalizeCount } from "@/common/helpers/countHelpers";

interface ProfileItemProps {
  click?: () => void;
  title: string;
  count: number;
}

export const ProfileItem: FC<ProfileItemProps> = ({ click, title, count }) => {
  return (
    <ProfileRaitingItem>
      <ProfileRaitingButton onClick={click}>
        {title}
        <br />
        {normalizeCount(count)}
      </ProfileRaitingButton>
    </ProfileRaitingItem>
  );
};
