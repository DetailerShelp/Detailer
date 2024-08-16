import {
    LikedSavedContentWrapper,
    LikedSavedSearchWrapper,
    LikedSavedWrapper,
  } from "@/modules/user/profile/pages/styles";
  import { NavigationList } from "@/common/styles/tags/button/NavProfileButton";
  import { LoadingCircle, LoadingNavigationButton, LoadingNavigationItem, LoadingPostItem } from "@/common/components/loading/styles";
  import { PageHeaderContentLoading } from "@/common/components/loading/PageHeaderContentLoading";
  import { ProfilePostList } from "@/modules/user/profile/components/publication/render/styles";
  import { SearchInputLoading } from "@/common/components/loading/SearchInputLoading";
  
  export const SavedLoading = () => {
    return (
      <LikedSavedWrapper>
        <PageHeaderContentLoading />
        <LikedSavedSearchWrapper>
          <SearchInputLoading />
        </LikedSavedSearchWrapper>
  
        <LikedSavedContentWrapper>
          <NavigationList>
            <LoadingNavigationItem>
              <LoadingCircle $size={30} />
              <LoadingNavigationButton />
            </LoadingNavigationItem>
  
            <LoadingNavigationItem>
              <LoadingCircle $size={30} />
              <LoadingNavigationButton />
            </LoadingNavigationItem>
  
            <LoadingNavigationItem>
              <LoadingCircle $size={30} />
              <LoadingNavigationButton />
            </LoadingNavigationItem>

            <LoadingNavigationItem>
              <LoadingCircle $size={30} />
              <LoadingNavigationButton />
            </LoadingNavigationItem>
          </NavigationList>
  
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
  