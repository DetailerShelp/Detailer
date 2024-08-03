import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { WhiteButtonWithIcon } from "@/common/styles/tags/button/WhiteButtonWithIcon";
import {
  ProfileBackgroundImage,
  ProfileBackgroundWrapper,
  ProfileBackWrapper,
  ProfileButtonMoreWrapper,
  ProfileButtonsWrapper,
  ProfileContentWrapper,
  ProfileHideButtonWrapper,
  ProfileMoreWrapper,
  ProfileRaitingList,
  ProfileUserAvatar,
  ProfileUserDescription,
  ProfileUserHeaderWrapper,
  ProfileUserName,
  ProfileWrapper,
} from "@/modules/user/profile/components/styles";
import { ProfileItem } from "@/modules/user/profile/components/ProfileItem";
import { DropdownWrapper } from "@/common/components/dropdown-menu/styles";
import { useState } from "react";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { ProfileDropdownMenu } from "@/modules/user/profile/components/ProfileDropdownMenu";
import { User } from "@/store/reducers/user/types";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { Link, useNavigate } from "react-router-dom";
import {
  NavProfileButton,
  NavigationList,
} from "@/common/styles/tags/button/NavProfileButton";
import { ProfilePosts } from "@/modules/user/profile/components/publication/ProfilePosts";
import { ProfileShorts } from "@/modules/user/profile/components/publication/ProfileShorts";
import { ProfileGarage } from "@/modules/user/profile/components/publication/ProfileGarage";

const defaultAvatar = '/images/avatar.svg';

interface ProfileProps {
  user?: User;
  url?: string;
}

export const Profile = ({ user, url }: ProfileProps) => {
  const [publicationPage, setPublicationPage] = useState("post");
  const [dropdownIsOpen, setDropdownOpen] = useState(false);

  const userSubscribers = !!user?.subscribers ? user?.subscribers.length : 0;
  const userSubscribes = !!user?.subscribes ? user?.subscribes.length : 0;
  const posts = !!user?.posts ? user?.posts.length : 0;
  const shorts = !!user?.shorts ? user?.shorts.length : 0;
  const garage = !!user?.garage ? user?.garage.length : 0;
  const userPosts = posts + shorts + garage;

  const currentUserId = authorizedUser();
  const isAdmin = user?.id == currentUserId;
  const navigate = useNavigate();

  return (
    <ProfileWrapper>
      <ProfileBackgroundWrapper>
        <ProfileBackgroundImage src={user?.backgroundImg} />

        {!!url && (
          <ProfileBackWrapper>
            <ButtonWithIcon
              icon="arrowLeft"
              title="Назад"
              size={35}
              click={() => <Link to={url} />}
            />
          </ProfileBackWrapper>
        )}

        <ProfileMoreWrapper>
          <DropdownWrapper
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <ProfileButtonMoreWrapper>
              <ButtonWithIcon icon="burger" size={35} />
            </ProfileButtonMoreWrapper>
            {dropdownIsOpen && <ProfileDropdownMenu />}
          </DropdownWrapper>
        </ProfileMoreWrapper>

        <ProfileUserHeaderWrapper>
          <ProfileUserAvatar src={user?.avatarImg || defaultAvatar} />
          <ProfileUserName>{user?.username}</ProfileUserName>
        </ProfileUserHeaderWrapper>
      </ProfileBackgroundWrapper>

      <ProfileUserDescription>{user?.description}</ProfileUserDescription>

      <ProfileRaitingList>
        <ProfileItem title="Подписчики" count={userSubscribers} />
        <ProfileItem title="Подписки" count={userSubscribes} />
        <ProfileItem title="Публикации" count={userPosts} />
      </ProfileRaitingList>

      {isAdmin ? (
        <ProfileButtonsWrapper>
          <ProfileHideButtonWrapper>
            <WhiteButtonWithIcon
              size={40}
              title="Редактировать"
              icon="edit"
              click={() => navigate("/edit")}
            />
          </ProfileHideButtonWrapper>
          <BlackWhiteButton size={40} title="Избранное" color="black" />
        </ProfileButtonsWrapper>
      ) : (
        <ProfileButtonsWrapper>
          <ProfileHideButtonWrapper>
            <WhiteButtonWithIcon size={40} title="Подписаться" icon="plus" />
          </ProfileHideButtonWrapper>
          <BlackWhiteButton size={40} title="Написать" color="black" />
        </ProfileButtonsWrapper>
      )}

      <ProfileContentWrapper>
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
            isActive={publicationPage === "garage"}
            click={() => setPublicationPage("garage")}
            icon="garage"
            title="Гараж"
          />
        </NavigationList>

        {publicationPage === "post" && (
          <ProfilePosts
            isAuthorizedUser={user?.isAuthorizedUser}
            post={user?.posts}
          />
        )}
        {publicationPage === "shorts" && (
          <ProfileShorts
            isAuthorizedUser={user?.isAuthorizedUser}
            shorts={user?.shorts}
          />
        )}
        {publicationPage === "garage" && (
          <ProfileGarage
            isAuthorizedUser={user?.isAuthorizedUser}
            garage={user?.garage}
          />
        )}
      </ProfileContentWrapper>
    </ProfileWrapper>
  );
};
