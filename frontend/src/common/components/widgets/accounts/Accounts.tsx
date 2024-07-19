import { WidgetsWrapper } from "@/common/components/widgets/WidgetsWrapper";
import { AccountsList } from "@/common/components/widgets/accounts/styles";
import { AccountItem } from "@/common/components/widgets/accounts/AccountItem";
import { FC } from "react";

//TODO AccountsProps
interface AccountsProps {
  title: string;
}

export const Accounts: FC<AccountsProps> = ({ title }) => {
  return (
    <WidgetsWrapper title={title} link="/">
      <AccountsList>
        <AccountItem name="Nagibator228" link="/" />
        <AccountItem name="Nagibator228" link="/" />
        <AccountItem name="Nagibator228" link="/" />
      </AccountsList>
    </WidgetsWrapper>
  );
};
