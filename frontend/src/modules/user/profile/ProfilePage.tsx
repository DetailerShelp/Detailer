import { PageContent } from "@/modules/user/PageContent";
import { Profile } from "@/modules/user/profile/components/Profile";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { Accounts } from "@/common/components/widgets/accounts/Accounts";
import { ProfileLoading } from "@/common/components/loading/ProfileLoading";
import { AccountsLoading } from "@/common/components/loading/AccountsLoading";

export const ProfilePage = () => {
  const { userId } = useParams();
  const { data, isLoading } = useGetUserByIdQuery(Number(userId));

  return (
    <PageContent
      content={isLoading ? <ProfileLoading /> : <Profile user={data} />}
      widgetOne={
        isLoading ? (
          <AccountsLoading title="Подписчики" />
        ) : (
          <Accounts title="Подписчики" user={data?.subscribers} />
        )
      }
      widgetTwo={
        isLoading ? (
          <AccountsLoading title="Подписки" />
        ) : (
          <Accounts title="Подписки" user={data?.subscribes} />
        )
      }
    />
  );
};
