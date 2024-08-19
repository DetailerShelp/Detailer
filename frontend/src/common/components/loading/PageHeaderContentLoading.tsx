import {
  LoadingCircle,
  LoadingTitle,
} from "@/common/components/loading/styles";
import {
  PageHeader,
  PageHeaderButtonWrapper,
} from "@/modules/user/PageHeaderContent";

export const PageHeaderContentLoading = () => {
  return (
    <PageHeader>
      <PageHeaderButtonWrapper>
        <LoadingCircle $size={30} />
      </PageHeaderButtonWrapper>
      <LoadingTitle />
    </PageHeader>
  );
};
