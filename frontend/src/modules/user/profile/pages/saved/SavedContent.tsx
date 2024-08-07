import {
  NavigationList,
  NavProfileButton,
} from "@/common/styles/tags/button/NavProfileButton";
import { SearchInput } from "@/common/styles/tags/input/SearchInput";
import { PageHeaderContent } from "@/modules/user/PageHeaderContent";
import { useState } from "react";
import { ProfilePosts } from "@/modules/user/profile/components/publication/ProfilePosts";
import { User } from "@/store/reducers/user/types";
import { ProfileShorts } from "@/modules/user/profile/components/publication/ProfileShorts";
import { ProfileGarage } from "@/modules/user/profile/components/publication/ProfileGarage";
import { SavedProfile } from "@/modules/user/profile/pages/saved/SavedProfile";
import {
  LikedSavedContentWrapper,
  LikedSavedSearchWrapper,
  LikedSavedWrapper,
} from "@/modules/user/profile/pages/styles";

interface SavedContentProps {
  user?: User;
}

export const SavedContent = ({ user }: SavedContentProps) => {
  const [publicationPage, setPublicationPage] = useState("post");
  return (
    <LikedSavedWrapper>
      <PageHeaderContent title="Сохраненное" />

      <LikedSavedSearchWrapper>
        <SearchInput placeholder="сохраненного" />
      </LikedSavedSearchWrapper>

      <LikedSavedContentWrapper>
        <NavigationList>
          <NavProfileButton
            isActive={publicationPage === "post"}
            click={() => setPublicationPage("post")}
            icon="post"
            title="Посты"
          />
          <NavProfileButton
            isActive={publicationPage === "shorts"}
            click={() => setPublicationPage("shorts")}
            icon="shorts"
            title="Шортсы"
          />
          <NavProfileButton
            isActive={publicationPage === "profile"}
            click={() => setPublicationPage("profile")}
            icon="profile"
            title="Профиль"
          />
          <NavProfileButton
            isActive={publicationPage === "garage"}
            click={() => setPublicationPage("garage")}
            icon="garage"
            title="Гараж"
          />
        </NavigationList>

        {publicationPage === "post" && (
          <ProfilePosts isAuthorizedUser={false} post={user?.posts} />
        )}
        {publicationPage === "shorts" && (
          <ProfileShorts isAuthorizedUser={false} shorts={user?.shorts} />
        )}
        {publicationPage === "profile" && <SavedProfile profile={user} />}
        {publicationPage === "garage" && (
          <ProfileGarage isAuthorizedUser={false} garage={user?.garage} />
        )}
      </LikedSavedContentWrapper>
    </LikedSavedWrapper>
  );
};
