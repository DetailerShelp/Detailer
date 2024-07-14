import { WidgetsWrapper } from "@/common/components/widgets/WidgetsWrapper";
import { AccountsList } from "@/common/components/widgets/accounts/styles";
import { AccountItem } from "@/common/components/widgets/accounts/AccountItem";

export const Accounts = () => {
  return (
    <WidgetsWrapper title="Популярные аккаунты" link="/">
      <AccountsList>
        <AccountItem name="Nagibator228" link="/" />
        <AccountItem name="Nagibator228" link="/" />
        <AccountItem name="Nagibator228" link="/" />
      </AccountsList>
    </WidgetsWrapper>
  );
};
