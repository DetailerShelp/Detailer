import { FC } from "react";
import { ProfileRaitingItem, ProfileRaitingLink } from "@/modules/user/profile/components/styles";

interface ProfileItemProps {
  link?: string;
  title: string;
  count: string;
}

export const ProfileItem: FC<ProfileItemProps> = ({ link, title, count }) => {
  return (
    <ProfileRaitingItem>
      <ProfileRaitingLink href={link}>
        {title}
        <br />
        {count}
      </ProfileRaitingLink>
    </ProfileRaitingItem>
  );
};
