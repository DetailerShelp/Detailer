import { PageWrapper } from "../PageWrapper";
import { Category } from "@/common/components/widgets/category/Category";
import { Accounts } from "@/common/components/widgets/accounts/Accounts";

export const HomePage = () => {
  return (
    <PageWrapper
      content={<p>Post</p>}
      widgetOne={<Category />}
      widgetTwo={<Accounts />}
    />
  );
};
