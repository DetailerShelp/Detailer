import { FC } from "react";
import { ProfileRaitingItem, ProfileRaitingLink } from "@/modules/user/profile/components/styles";
import { normalizeCount } from "@/common/helpers/countHelpers";

interface ProfileItemProps {
  link?: string;
  title: string;
  count: number;
}

export const ProfileItem: FC<ProfileItemProps> = ({ link, title, count }) => {
  return (
    <ProfileRaitingItem>
      <ProfileRaitingLink href={link}>
        {title}
        <br />
        {normalizeCount(count)}
      </ProfileRaitingLink>
    </ProfileRaitingItem>
  );
};
