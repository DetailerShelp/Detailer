import { borders, colors, device } from "@/common/styles/styleConstants";
import {
  ProfileBackgroundWrapper,
  ProfileBackgroungImageWrapper,
  ProfileButtonsWrapper,
  ProfileContentWrapper,
  ProfileRaitingItem,
  ProfileRaitingList,
  ProfileUserAvatarWrapper,
  ProfileUserDescription,
  ProfileUserHeaderWrapper,
  ProfileUserName,
  ProfileWrapper,
} from "@/modules/user/profile/components/styles";
import styled from "styled-components";
import {
  clampWidth,
  flexCenter,
  loadingGradient,
  square,
} from "@/common/styles/mixins";
import { NavigationList } from "@/common/styles/tags/button/NavProfileButton";
import { ProfilePostItem, ProfilePostList } from "@/modules/user/profile/components/publication/render/styes";

const BackgroundImage = styled(ProfileBackgroungImageWrapper)`
  ${loadingGradient};
  border-radius: ${borders.defaultBorderRadius};
  position: relative;

  width: 100%;

  @media ${device.mobile} {
    width: clamp(300px, 89vw, 548px);
  }
`;

const UserAvatar = styled(ProfileUserAvatarWrapper)`
  ${loadingGradient};
`;

const UserName = styled(ProfileUserName)`
  width: 150px;
  height: 20px;
  ${loadingGradient};
  border-radius: ${borders.mediaBorderRadius};

  @media ${device.mobileM} {
    height: 15px;
  }
`;

const Description = styled(ProfileUserDescription)`
  height: 18px;
  ${loadingGradient};
  border-radius: ${borders.mediaBorderRadius};

  @media ${device.mobileM} {
    height: 12px;
  }
`;

const RaitingItem = styled(ProfileRaitingItem)`
  height: 50px;
  ${loadingGradient};
  border-radius: ${borders.thinBorderRadius};

  @media ${device.mobileM} {
    height: 12px;
  }
`;

const Button = styled("div")`
  width: 100%;
  height: 35px;
  ${loadingGradient}
  border-radius: ${borders.bigBorderRadius};

  @media ${device.mobileM} {
    height: 25px;
  }
`;

const NavigationItem = styled("li")`
  width: 100%;
  height: 50px;
  padding-block: 10px;
  border-top-left-radius: ${borders.defaultBorderRadius};
  border-top-right-radius: ${borders.defaultBorderRadius};

  ${flexCenter}
  column-gap: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 2px;
    background-color: ${colors.grayBorder};
  }
`;

const NavigationButton = styled("div")`
  ${clampWidth(60, 100)}
  height: 18px;
  ${loadingGradient};
  border-radius: ${borders.mediaBorderRadius};

  @media ${device.mobileM} {
    display: none;
  }
`;

const NavigationIcon = styled("div")`
  ${square(30)}
  border-radius: ${borders.circleBorderRadius};
  ${loadingGradient}
`;

const PostItem = styled(ProfilePostItem)`
  margin-top: 1px;
  ${loadingGradient}
  border-radius: ${borders.smallBorderRadius};
`;

export const ProfileLoading = () => {
  return (
    <ProfileWrapper>
      <ProfileBackgroundWrapper>
        <BackgroundImage />

        <ProfileUserHeaderWrapper>
          <UserAvatar />
          <UserName />
        </ProfileUserHeaderWrapper>
      </ProfileBackgroundWrapper>

      <Description />
      <Description />


      <ProfileRaitingList>
        <RaitingItem />
        <RaitingItem />
        <RaitingItem />
      </ProfileRaitingList>

      <ProfileButtonsWrapper>
        <Button />
        <Button />
      </ProfileButtonsWrapper>

      <ProfileContentWrapper>
        <NavigationList>
          <NavigationItem>
            <NavigationIcon />
            <NavigationButton />
          </NavigationItem>

          <NavigationItem>
            <NavigationIcon />
            <NavigationButton />
          </NavigationItem>

          <NavigationItem>
            <NavigationIcon />

            <NavigationButton />
          </NavigationItem>
        </NavigationList>

        <ProfilePostList>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </ProfilePostList>
      </ProfileContentWrapper>
    </ProfileWrapper>
  );
};
