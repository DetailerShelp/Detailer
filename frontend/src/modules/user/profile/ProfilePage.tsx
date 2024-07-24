import { Accounts } from "@/common/components/widgets/accounts/Accounts";
import { PageContent } from "@/modules/user/PageContent";
import { ProfileContent } from "@/modules/user/profile/components/ProfileContent";

export const ProfilePage = () => {
  return (
    <PageContent
      content={<ProfileContent />}
      widgetOne={<Accounts title="Подписчики" />}
      widgetTwo={<Accounts title="Подписки" />}
    />
  );
};
