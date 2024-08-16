import { borders, colors, device } from "@/common/styles/styleConstants";
import {
  ProfileBackgroundWrapper,
  ProfileBackgroungImageWrapper,
  ProfileBackWrapper,
  ProfileButtonsWrapper,
  ProfileContentWrapper,
  ProfileMoreWrapper,
  ProfileRaitingItem,
  ProfileRaitingList,
  ProfileUserAvatarWrapper,
  ProfileUserDescription,
  ProfileUserHeaderWrapper,
  ProfileUserName,
  ProfileWrapper,
} from "@/modules/user/profile/components/styles";
import styled from "styled-components";
import { loadingGradient, square } from "@/common/styles/mixins";
import { NavigationList } from "@/common/styles/tags/button/NavProfileButton";
import { ProfilePostList } from "@/modules/user/profile/components/publication/render/styles";
import {
  LoadingCircle,
  LoadingNavigationButton,
  LoadingNavigationItem,
  LoadingPostItem,
  LoadingWhiteBlackButton,
} from "@/common/components/loading//styles";

const Wrapper = styled(ProfileWrapper)`
  width: 100%;

  @media ${device.mobile} {
    width: clamp(308px, 91.33vw, 548px);
  }
`;

const BackgroundImage = styled(ProfileBackgroungImageWrapper)`
  ${loadingGradient};
  border-radius: ${borders.defaultBorderRadius};
  position: relative;

  width: 100%;
`;

const LeftButton = styled(ProfileBackWrapper)`
  ${square(35)}
  border-radius: ${borders.circleBorderRadius};
`;

const RightButton = styled(ProfileMoreWrapper)`
  ${square(35)}
  border-radius: ${borders.circleBorderRadius};
  background-color: ${colors.blackBackground};
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

export const ProfileLoading = () => {
  return (
    <Wrapper>
      <ProfileBackgroundWrapper>
        <BackgroundImage />

        <LeftButton />

        <RightButton />

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
        <LoadingWhiteBlackButton $size={35} />
        <LoadingWhiteBlackButton $size={35} />
      </ProfileButtonsWrapper>

      <ProfileContentWrapper>
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
        </NavigationList>

        <ProfilePostList>
          <LoadingPostItem />
          <LoadingPostItem />
          <LoadingPostItem />
          <LoadingPostItem />
          <LoadingPostItem />
          <LoadingPostItem />
        </ProfilePostList>
      </ProfileContentWrapper>
    </Wrapper>
  );
};
