import { PageWrapper } from "../PageWrapper";
import { Category } from "@/common/components/widgets/category/Category";
import { Accounts } from "@/common/components/widgets/accounts/Accounts";
import { Post } from "@/common/components/post/Post";

export const HomePage = () => {
  return (
    <PageWrapper
    // TODO Добавить посты
      content={<Post />}
      widgetOne={<Category />}
      widgetTwo={<Accounts />}
    />
  );
};
