import { Category } from "@/common/components/widgets/category/Category";
import { Accounts } from "@/common/components/widgets/accounts/Accounts";
import { HomeContent } from "@/modules/user/home/HomeContent";
import { PageContent } from "@/modules/user/PageContent";

export const HomePage = () => {
  return (
    <PageContent
      // TODO Добавить посты
      content={<HomeContent />
      }
      widgetOne={<Category />}
      widgetTwo={<Accounts title="Популярные аккаунты" />}
    />
  );
};
