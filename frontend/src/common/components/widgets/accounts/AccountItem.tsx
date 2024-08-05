import {
  AccountsAvatar,
  AccountsLink,
  AccountsListItem,
  AccountsName,
} from "@/common/components/widgets/accounts/styles";
import { FC } from "react";
import defaultAvatar from "@/common/images/avatar.png";

interface AccountItemProps {
  avatar?: string;
  name: string;
  link: string;
  click?: () => void;
}

export const AccountItem: FC<AccountItemProps> = ({
  avatar,
  name,
  link,
  click,
}) => {
  return (
    <AccountsListItem>
      <AccountsLink onClick={click} to={link}>
        <AccountsAvatar
          src={!!avatar ? avatar : defaultAvatar}
          alt={`${name}'s avatar`}
        />
        <AccountsName>{name}</AccountsName>
      </AccountsLink>
    </AccountsListItem>
  );
};
