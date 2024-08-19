import { Category } from "@/common/components/widgets/category/Category";
import { Accounts } from "@/common/components/widgets/accounts/Accounts";
import { HomeContent } from "@/modules/user/home/HomeContent";
import { PageContent } from "@/modules/user/PageContent";
import { useGetUsersQuery } from "@/store/reducers/user/userApi";
import { AccountsLoading } from "@/common/components/loading/AccountsLoading";

export const HomePage = () => {
  const { data, isLoading } = useGetUsersQuery();
  return (
    <PageContent
      // TODO Добавить посты
      content={<HomeContent />}
      widgetOne={<Category />}
      widgetTwo={
        !!data &&
        (isLoading ? (
          <AccountsLoading title="Популярные аккаунты" />
        ) : (
          <Accounts title="Популярные аккаунты" user={data} />
        ))
      }
    />
  );
};
