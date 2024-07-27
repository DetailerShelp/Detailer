import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { WhiteButtonWithIcon } from "@/common/styles/tags/button/WhiteButtonWithIcon";
import {
  ProfileBackgroundImage,
  ProfileBackgroundWrapper,
  ProfileButtonMoreWrapper,
  ProfileButtonsWrapper,
  ProfileContentImage,
  ProfileContentItem,
  ProfileContentList,
  ProfileContentWrapper,
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
import { ProfileNavLinks } from "@/common/styles/tags/a/ProfileNavLinks";
import defaultAvatar from "@/common/images/avatar.png";
import { User } from "@/store/reducers/user/types";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
  user?: User;
}

export const Profile = ({ user }: ProfileProps) => {
  const [dropdownIsOpen, setDropdownOpen] = useState(false);

  const userSubscribers = !!user?.subscribers ? user?.subscribers.length : 0;
  const userSubscribes = !!user?.subscribes ? user?.subscribes.length : 0;

  const currentUserId = authorizedUser();
  const isAdmin = user?.id == currentUserId;
  const navigate = useNavigate();

  return (
    <ProfileWrapper>
      <ProfileBackgroundWrapper>
        <ProfileBackgroundImage src={user?.backgroundImg} />

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
        <ProfileItem title="Подписчики" count={userSubscribers} link="/" />
        <ProfileItem title="Подписки" count={userSubscribes} link="/" />
        <ProfileItem title="Публикации" count={-1} link="/" />
      </ProfileRaitingList>

      {isAdmin ? (
        <ProfileButtonsWrapper>
          <WhiteButtonWithIcon
            size={40}
            title="Редактировать"
            icon="edit"
            click={() => navigate("/edit")}
          />
          <BlackWhiteButton size={40} title="Избранное" color="black" />
        </ProfileButtonsWrapper>
      ) : (
        <ProfileButtonsWrapper>
          <WhiteButtonWithIcon size={40} title="Подписаться" icon="plus" />
          <BlackWhiteButton size={40} title="Написать" color="black" />
        </ProfileButtonsWrapper>
      )}

      <ProfileContentWrapper>
        <ProfileNavLinks />
        {/* TODO Добавить отображение определенного контента */}
        <ProfileContentList>
          <ProfileContentItem>
            <ProfileContentImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6yT7oBWFeKJH-85mTe_LX8XL5RXw1mRFow&s" />
          </ProfileContentItem>

          <ProfileContentItem>
            <ProfileContentImage src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" />
          </ProfileContentItem>

          <ProfileContentItem>
            <ProfileContentImage src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D" />
          </ProfileContentItem>

          <ProfileContentItem>
            <ProfileContentImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6yT7oBWFeKJH-85mTe_LX8XL5RXw1mRFow&s" />
          </ProfileContentItem>
        </ProfileContentList>
        {/* <Outlet /> */}
      </ProfileContentWrapper>
    </ProfileWrapper>
  );
};
