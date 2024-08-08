import { Category } from "@/common/components/widgets/category/Category";
import { Accounts } from "@/common/components/widgets/accounts/Accounts";
import { Post } from "@/common/components/post/Post";
import { PageContent } from "@/modules/user/PageContent";
import { Garage } from "@/common/components/garage/Garage";
import { GarageLoading } from "@/common/components/loading/GarageLoading";

export const HomePage = () => {
  return (
    <PageContent
      // TODO Добавить посты
      content={
        <>
          <Garage />
          <GarageLoading />
          <Post />
        </>
      }
      widgetOne={<Category />}
      widgetTwo={<Accounts title="Популярные аккаунты" />}
    />
  );
};
