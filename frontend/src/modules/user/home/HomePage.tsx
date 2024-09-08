import { HomeContent } from "@/modules/user/home/HomeContent";
import { PageContent } from "@/modules/user/PageContent";

export const HomePage = () => {
  return (
    <PageContent
      // TODO Добавить посты
      content={<HomeContent />}
    />
  );
};
