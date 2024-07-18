import { Accounts } from "@/common/components/widgets/accounts/Accounts";
import { Profile } from "@/modules/user/profile/components/Profile";
import { PageContent } from "@/modules/user/PageContent";

export const ProfilePage = () => {
  return (
    <PageContent
      content={<Profile />}
      widgetOne={<Accounts title="Подписчики" />}
      widgetTwo={<Accounts title="Подписки" />}
    />
  );
};
