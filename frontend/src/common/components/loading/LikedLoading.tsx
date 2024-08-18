import {
  LikedSavedContentWrapper,
  LikedSavedSearchWrapper,
  LikedSavedWrapper,
} from "@/modules/user/profile/pages/styles";
import { LoadingPostItem } from "@/common/components/loading/styles";
import { PageHeaderContentLoading } from "@/common/components/loading/PageHeaderContentLoading";
import { ProfilePostList } from "@/modules/user/profile/components/publication/render/styles";
import { SearchInputLoading } from "@/common/components/loading/SearchInputLoading";
import { NavigationPublicationLoading } from "@/common/components/loading/NavigationPublicationLoading";

export const LikedLoading = () => {
  return (
    <LikedSavedWrapper>
      <PageHeaderContentLoading />
      <LikedSavedSearchWrapper>
        <SearchInputLoading />
      </LikedSavedSearchWrapper>

      <LikedSavedContentWrapper>
        <NavigationPublicationLoading />

        <ProfilePostList>
          <LoadingPostItem />
          <LoadingPostItem />
          <LoadingPostItem />
          <LoadingPostItem />
          <LoadingPostItem />
          <LoadingPostItem />
        </ProfilePostList>
      </LikedSavedContentWrapper>
    </LikedSavedWrapper>
  );
};
