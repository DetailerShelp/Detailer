import {
  AccountsAvatar,
  AccountsLink,
  AccountsListItem,
  AccountsName,
} from "@/common/components/widgets/accounts/styles";
import { FC } from "react";
import defaulAvatar from "@/common/images/avatar.png";

interface AccountItemProps {
  avatar?: string;
  name: string;
  link: string;
}

export const AccountItem: FC<AccountItemProps> = ({ avatar, name, link }) => {
  return (
    <AccountsListItem>
      <AccountsLink to={link}>
        {!!avatar ? (
          <AccountsAvatar src={avatar} alt={`${name}'s avatar`} />
        ) : (
          <AccountsAvatar src={defaulAvatar} alt={`${name}'s avatar`} />
        )}
        <AccountsName>{name}</AccountsName>
      </AccountsLink>
    </AccountsListItem>
  );
};
