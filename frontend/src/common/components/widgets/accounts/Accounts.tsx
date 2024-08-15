import { WidgetsWrapper } from "@/common/components/widgets/WidgetsWrapper";
import { AccountsList } from "@/common/components/widgets/accounts/styles";
import { AccountItem } from "@/common/components/widgets/accounts/AccountItem";
import { ShortUserInfo } from "@/store/reducers/user/types";

//TODO AccountsProps
interface AccountsProps {
  title: string;
  user?: ShortUserInfo[];
}

export const Accounts = ({ title, user }: AccountsProps) => {
  return (
    <>
      {user?.length !== 0 && (
        <WidgetsWrapper title={title} link="/">
          <AccountsList>
            {user?.slice(0, 3).map((item) => (
              <AccountItem
                key={item.id}
                name={item.username}
                avatar={item.avatarImg}
                link={`/profile/${item.id}`}
              />
            ))}
          </AccountsList>
        </WidgetsWrapper>
      )}
    </>
  );
};
