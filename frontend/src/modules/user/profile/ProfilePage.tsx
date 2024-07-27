import { PageContent } from "@/modules/user/PageContent";
import { Profile } from "@/modules/user/profile/components/Profile";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { Accounts } from "@/common/components/widgets/accounts/Accounts";

export const ProfilePage = () => {
  const { userId } = useParams();
  const { data } = useGetUserByIdQuery(Number(userId));

  return (
    <PageContent
      content={<Profile user={data} />}
      widgetOne={<Accounts title="Подписчики" user={data?.subscribers} />}
      widgetTwo={<Accounts title="Подписки" user={data?.subscribes} />}
    />
  );
};
