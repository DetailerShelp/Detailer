import { Accounts } from "@/common/components/widgets/accounts/Accounts";
import { Profile } from "@/modules/user/profile/components/Profile";
import { PageContent } from "@/modules/user/PageContent";
import { UserMockData } from "@/store/reducers/users/types";

export const ProfilePage = () => {
  const user = UserMockData[0];

  return (
    <PageContent
      content={<Profile />}
      widgetOne={<Accounts title="Подписчики" user={user.subscribers} />}
      widgetTwo={<Accounts title="Подписки" user={user.subscribes} />}
    />
  );
};
