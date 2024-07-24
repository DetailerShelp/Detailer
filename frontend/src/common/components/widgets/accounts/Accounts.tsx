import { WidgetsWrapper } from "@/common/components/widgets/WidgetsWrapper";
import { AccountsList } from "@/common/components/widgets/accounts/styles";
import { AccountItem } from "@/common/components/widgets/accounts/AccountItem";
import { FC } from "react";
import { ShortUserInfo } from "@/store/reducers/users/types";

//TODO AccountsProps
interface AccountsProps {
  title: string;
  user?: ShortUserInfo[];
}

export const Accounts: FC<AccountsProps> = ({ title, user }) => {
  return (
    <>
      {!!user && (
        <WidgetsWrapper title={title} link="/">
          <AccountsList>
            {user.slice(0, 3).map((item) => (
              <AccountItem
                key={item.id}
                name={item.username}
                avatar={item.avatarImg}
                link="/"
              />
            ))}
          </AccountsList>
        </WidgetsWrapper>
      )}
    </>
  );
};
