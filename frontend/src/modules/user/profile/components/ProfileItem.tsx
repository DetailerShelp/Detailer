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

export const ProfileItem = ({ click, title, count }: ProfileItemProps) => {
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
