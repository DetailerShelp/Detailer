import { Category } from "@/common/components/widgets/category/Category";
import { Accounts } from "@/common/components/widgets/accounts/Accounts";
import { Post } from "@/common/components/post/Post";
import { PageContent } from "@/modules/user/PageContent";

export const HomePage = () => {
  return (
    <PageContent
    // TODO Добавить посты
      content={<Post />}
      widgetOne={<Category />}
      widgetTwo={<Accounts title="Популярные аккаунты" />}
    />
  );
};
